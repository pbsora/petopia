using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using server.Model;

namespace server.Services.Token
{
    public class TokenService : ITokenService
    {
        private readonly IConfiguration _config;
        private readonly SymmetricSecurityKey _key;

        public TokenService(IConfiguration config)
        {
            _config = config;
            _key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_config["JWT:Key"] ?? string.Empty)
            );
        }

        /// <summary>
        /// Creates a JWT token for the specified user with the given roles.
        /// </summary>
        /// <param name="user">The ApplicationUser object representing the user.</param>
        /// <param name="roles">The list of roles assigned to the user.</param>
        /// <returns>The generated JWT token.</returns>
        public string CreateToken(ApplicationUser user, List<string> roles)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Email, user.Email!),
                new Claim(JwtRegisteredClaimNames.GivenName, user.UserName!),
                new Claim(JwtRegisteredClaimNames.NameId, user.Id!),
            };

            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            var encryption = new SigningCredentials(_key, SecurityAlgorithms.HmacSha256Signature);
            var tokenDescription = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = encryption,
                Issuer = _config["JWT:Issuer"],
                Audience = _config["JWT:Audience"]
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescription);

            return tokenHandler.WriteToken(token);
        }

        /// <summary>
        /// Creates a refresh token.
        /// </summary>
        /// <returns>A string representing the refresh token.</returns>
        public string CreateRefreshToken()
        {
            var secureRandomBytes = new byte[128];
            using var rng = RandomNumberGenerator.Create();
            rng.GetBytes(secureRandomBytes);
            return Convert.ToBase64String(secureRandomBytes);
        }
    }
}
