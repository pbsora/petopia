using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using server.Model;

namespace server.Data
{
    public class AppDbContext : IdentityDbContext<ApplicationUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            /* builder
                .Entity<Order>()
                .HasOne(p => p.User)
                .WithMany()
                .HasForeignKey(p => p.UserId)
                .OnDelete(DeleteBehavior.Cascade); */

            base.OnModelCreating(builder);
            List<IdentityRole> roles = new List<IdentityRole>
            {
                new IdentityRole { Name = "Admin", NormalizedName = "ADMIN" },
                new IdentityRole { Name = "User", NormalizedName = "USER" }
            };
            builder.Entity<IdentityRole>().HasData(roles);

            List<Category> categories = new List<Category>
            {
                new Category { CategoryId = 2, Name = "bowls" },
                new Category { CategoryId = 1, Name = "food" },
                new Category { CategoryId = 3, Name = "toys" },
                new Category { CategoryId = 4, Name = "beds" },
                new Category { CategoryId = 5, Name = "litter" },
                new Category { CategoryId = 6, Name = "feeders" },
                new Category { CategoryId = 7, Name = "tanks" },
                new Category { CategoryId = 8, Name = "filters" },
                new Category { CategoryId = 9, Name = "grooming" },
                new Category { CategoryId = 10, Name = "accessories" },
            };
            builder.Entity<Category>().HasData(categories);

            List<PetType> petTypes = new List<PetType>
            {
                new PetType { PetTypeId = 1, Name = "Dog" },
                new PetType { PetTypeId = 2, Name = "Cat" },
                new PetType { PetTypeId = 3, Name = "Fish" },
                new PetType { PetTypeId = 4, Name = "Bird" },
            };
            builder.Entity<PetType>().HasData(petTypes);
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<PetType> PetTypes { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
    }
}
