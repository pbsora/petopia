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
        private readonly RoleManager<IdentityRole> _roleManager;

        public AuthController(
            UserManager<ApplicationUser> userManager,
            ITokenService tokenService,
            SignInManager<ApplicationUser> signInManager,
            RoleManager<IdentityRole> roleManager
        )
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _signInManager = signInManager;
            _roleManager = roleManager;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO loginDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest(new { message = "Invalid login request" });

            var user = await _userManager.Users.FirstOrDefaultAsync(u =>
                u.UserName == loginDTO.UserName!.ToLower()
            );

            if (user == null)
                return Unauthorized(new { message = "Invalid username or password" });

            var res = await _signInManager.CheckPasswordSignInAsync(
                user,
                loginDTO.Password!,
                false
            );

            if (!res.Succeeded)
                return Unauthorized(new { message = "Invalid username or password" });

            var userRoles = await _userManager.GetRolesAsync(user);

            return Ok(
                new NewUserDTO
                {
                    Id = user.Id,
                    UserName = user.UserName,
                    Email = user.Email,
                    Token = _tokenService.CreateToken(user, userRoles.ToList())
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

        [HttpGet("isAdmin")]
        public ActionResult<Boolean> IsAdmin()
        {
            return Ok(User.IsInRole("Admin"));
        }

        [HttpPost("getAdmin")]
        public async Task<ActionResult> GetAdmin()
        {
            var user = await _userManager.FindByIdAsync(
                User.FindFirst(ClaimTypes.NameIdentifier)!.Value
            );

            if (user == null)
                return NotFound();

            var isInRole = await _userManager.IsInRoleAsync(user, "Admin");

            if (isInRole)
                return Ok(new { message = "User is an admin" });

            var roleResult = await _userManager.AddToRoleAsync(user!, "Admin");

            if (!roleResult.Succeeded)
                return BadRequest(new { message = "Role change failed" });

            return Ok();
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDTO registerDTO)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                if (registerDTO.Password != registerDTO.ConfirmPassword)
                    return BadRequest(new { message = "Passwords do not match" });

                var user = new ApplicationUser
                {
                    UserName = registerDTO.UserName,
                    Email = registerDTO.Email
                };

                var result = await _userManager.CreateAsync(user, registerDTO.Password!);

                if (!result.Succeeded)
                    return BadRequest(new { message = result.Errors.First().Description });

                //Add user to role "User"
                var roleResult = await _userManager.AddToRoleAsync(user, "User");

                if (!roleResult.Succeeded)
                    return BadRequest(new { message = "User creation failed" });

                return Ok(new NewUserDTO { UserName = user.UserName, Email = user.Email, });
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}
