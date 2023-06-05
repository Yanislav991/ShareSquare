using System.ComponentModel.DataAnnotations;

namespace ShareSquare.Server.Models.Authentication
{
    public class RegisterDto
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
