using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration.UserSecrets;
using server.DTOs.User;
using server.Model;
using server.Services.Token;

namespace server.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ITokenService _tokenService;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public AuthController(
            UserManager<ApplicationUser> userManager,
            ITokenService tokenService,
            SignInManager<ApplicationUser> signInManager
        )
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _signInManager = signInManager;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO loginDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid login request");

            var user = await _userManager.Users.FirstOrDefaultAsync(u =>
                u.UserName == loginDTO.UserName!.ToLower()
            );

            if (user == null)
                return Unauthorized("Invalid username");

            var res = await _signInManager.CheckPasswordSignInAsync(
                user,
                loginDTO.Password!,
                false
            );

            if (!res.Succeeded)
                return Unauthorized("Invalid username or password");
            /*
                        Response.Cookies.Append(
                            "X-Access-Token",
                            _tokenService.CreateToken(user),
                            new CookieOptions
                            {
                                HttpOnly = true,
                                SameSite = SameSiteMode.None,
                                Secure = true
                            }
                        ); */

            return Ok(
                new NewUserDTO
                {
                    Id = user.Id,
                    UserName = user.UserName,
                    Email = user.Email,
                    Token = _tokenService.CreateToken(user)
                }
            );
        }

        [HttpGet("current")]
        public ActionResult<string> GetAsync()
        {
            var userInfo = new
            {
                userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value,
                Username = User.FindFirst(ClaimTypes.GivenName)?.Value,
                Email = User.FindFirst(ClaimTypes.Email)?.Value
            };

            return Ok(userInfo);
        }

        [HttpGet("isAuthenticated")]
        public ActionResult isAuthenticated()
        {
            return Ok(User.Identity!.IsAuthenticated);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDTO registerDTO)
        {
            try
            {
                var userExists = await _userManager.FindByNameAsync(registerDTO.UserName!);

                if (userExists != null)
                    return BadRequest(new { message = "User already exists" });

                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var user = new ApplicationUser
                {
                    UserName = registerDTO.UserName,
                    Email = registerDTO.Email
                };

                var result = await _userManager.CreateAsync(user, registerDTO.Password!);

                if (!result.Succeeded)
                    return BadRequest(new { message = result.Errors });

                //Add user to role "User"
                var roleResult = await _userManager.AddToRoleAsync(user, "User");

                if (!roleResult.Succeeded)
                    return BadRequest(new { message = "User creation failed" });

                return Ok(new NewUserDTO { UserName = user.UserName, Email = user.Email, });
            }
            catch (Exception e)
            {
                return StatusCode(500, e);
            }
        }
    }
}
