using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Signup
    {
        [Required(ErrorMessage = "Please Enter your Name")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Please Enter your Email")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Please Enter your Phone")]
        [RegularExpression(@"^\d{10}$", ErrorMessage = "Phone Number must be exactly 10 digits")]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "Please Enter your Password")]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" , 
            ErrorMessage = "Password must contain at least 8 characters including one uppercase letter, one lowercase letter, one digit, and one special character.")]
        public string Password { get; set; }
    }
}
