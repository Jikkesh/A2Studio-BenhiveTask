using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Login
    {
        [Required( ErrorMessage ="Please Enter your Email")]
        [EmailAddress(ErrorMessage ="Invalid Email Address")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Please Enter your Password")]
       
        public string Password { get; set; }
    }
}
