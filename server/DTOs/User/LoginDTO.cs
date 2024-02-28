using System.ComponentModel.DataAnnotations;

namespace server.DTOs.User
{
    public class LoginDTO
    {
        [Required]
        public string? UserName { get; set; }

        [Required]
        public string? Password { get; set; }
    }
}
