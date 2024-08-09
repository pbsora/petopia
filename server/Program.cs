using System.Text;
using System.Text.Json;
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration.AzureKeyVault;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using server.Data;
using server.DTOs.Categories;
using server.DTOs.Favorites;
using server.DTOs.Order;
using server.DTOs.PetTypes;
using server.DTOs.Products;
using server.DTOs.User;
using server.ErrorHandler;
using server.Model;
using server.Repositories.CategoryRepo;
using server.Repositories.FavoriteRepo;
using server.Repositories.OrderRepo;
using server.Repositories.OrderRepository;
using server.Repositories.PetTypeRepo;
using server.Repositories.ProductRepo;
using server.Services.Token;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder
    .Services.AddControllers(options =>
    {
        options.Filters.Add(typeof(ApiExceptionFilter));
    })
    .AddNewtonsoftJson(options =>
    {
        options.SerializerSettings.ReferenceLoopHandling = Newtonsoft
            .Json
            .ReferenceLoopHandling
            .Ignore;
    });

var client =
    Environment.GetEnvironmentVariable("Audience")
    ?? builder.Configuration["JWT:Audience"]
    ?? throw new ArgumentException("Invalid client!!");

builder.Services.AddCors(options =>
    options.AddPolicy(
        name: "MyPolicy",
        policy =>
        {
            policy
                .WithOrigins(client)
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials()
                .WithExposedHeaders("X-pagination", "token");
        }
    )
);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Petshop", Version = "v1" });

    c.AddSecurityDefinition(
        "Bearer",
        new OpenApiSecurityScheme()
        {
            Name = "Authorization",
            Type = SecuritySchemeType.Http,
            Scheme = "Bearer",
            BearerFormat = "JWT",
            In = ParameterLocation.Header,
            Description = "Bearer JWT",
        }
    );
    c.AddSecurityRequirement(
        new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecurityScheme
                {
                    Reference = new OpenApiReference
                    {
                        Type = ReferenceType.SecurityScheme,
                        Id = "Bearer"
                    }
                },
                new string[] { }
            }
        }
    );
});
var Configuration = builder.Configuration;

if (builder.Environment.IsDevelopment())
{
    var connectionString =
        builder.Configuration.GetConnectionString("DefaultConnection")
        ?? throw new ArgumentException("Invalid connection string!!");

    builder.Services.AddDbContext<AppDbContext>(options => options.UseNpgsql(connectionString));
}

if (builder.Environment.IsProduction())
{
    var dbUrl =
        Environment.GetEnvironmentVariable("DBString")
        ?? throw new ArgumentException("Database URL is missing");

    builder.Services.AddDbContext<AppDbContext>(options => options.UseNpgsql(dbUrl));
}

builder
    .Services.AddIdentity<ApplicationUser, IdentityRole>(options =>
    {
        options.Password.RequireDigit = false;
        options.Password.RequireLowercase = true;
        options.Password.RequireUppercase = false;
        options.Password.RequireNonAlphanumeric = false;
        options.Password.RequiredLength = 1;
        options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(2);
        options.Lockout.MaxFailedAccessAttempts = 5;
        options.Lockout.AllowedForNewUsers = true;
        options.User.RequireUniqueEmail = true;
    })
    .AddEntityFrameworkStores<AppDbContext>();

var secretKey =
    Environment.GetEnvironmentVariable("JWTKey")
    ?? builder.Configuration["JWT:Key"]
    ?? throw new ArgumentException("Invalid secret key!!");

builder
    .Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme =
            options.DefaultChallengeScheme =
            options.DefaultForbidScheme =
            options.DefaultScheme =
            options.DefaultSignInScheme =
            options.DefaultSignOutScheme =
                JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(options =>
    {
        options.SaveToken = true;
        options.RequireHttpsMetadata = false;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ClockSkew = TimeSpan.Zero,
            ValidIssuer =
                Environment.GetEnvironmentVariable("Issuer") ?? Configuration["Jwt:Issuer"],
            ValidAudience =
                Environment.GetEnvironmentVariable("Issuer") ?? Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey))
        };
        options.Events = new JwtBearerEvents
        {
            OnMessageReceived = context =>
            {
                var accessToken = context.Request.Cookies["token"];
                if (!string.IsNullOrEmpty(accessToken))
                    context.Token = accessToken;
                return Task.CompletedTask;
            }
        };
    });

builder.Services.AddRateLimiter(rateLimiterOptions =>
{
    rateLimiterOptions.AddFixedWindowLimiter(
        policyName: "fixedWindow",
        options =>
        {
            options.PermitLimit = 50;
            options.Window = TimeSpan.FromMinutes(1);
            options.QueueLimit = 0;
        }
    );
    rateLimiterOptions.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
});

builder.Services.AddAutoMapper(typeof(UserDTOMappingProfile));
builder.Services.AddAutoMapper(typeof(ProductDTOMappingProfile));
builder.Services.AddAutoMapper(typeof(CategoryDTOMappingProfile));
builder.Services.AddAutoMapper(typeof(PetDTOMappingProfile));
builder.Services.AddAutoMapper(typeof(OrderItemDTOMappingProfile));
builder.Services.AddAutoMapper(typeof(FavoriteDTOMappingProfile));

builder.Services.AddScoped<ITokenService, TokenService>();
builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IPetTypeRepository, PetTypeRepository>();
builder.Services.AddScoped<IOrderRepository, OrderRepository>();
builder.Services.AddScoped<IFavoriteRepository, FavoriteRepository>();

var app = builder.Build();
AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseRateLimiter();

app.UseCors("MyPolicy");

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
