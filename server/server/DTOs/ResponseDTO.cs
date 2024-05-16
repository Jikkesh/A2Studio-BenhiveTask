using server.Models;

namespace server.DTOs
{
    public class ErrorResponseDTO
    {
       public string Message { get; set; }
    }

    public class SuccessResponseDTO
    {
        public string Message { get; set; }
        public List<Product> Payload; 
    }

    public class LoginSuccessResponseDTO
    {
        public string Message { get; set; }
        public string Token {  get; set; }  
    }

    public class SignupSuccesResponseDTO
    {
        public string Message { get; set; }
    }


}
