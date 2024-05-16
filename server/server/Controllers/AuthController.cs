using Microsoft.AspNetCore.Mvc;
using server.Data_Access;
using server.DTOs;
using server.Models;
using server.Services;


namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly IAuthRepository _authRepository;
        private readonly IAuthServices _authServices;

        public AuthController(IAuthRepository authRepository, IAuthServices authServices)
        {
            _authRepository = authRepository;
            _authServices = authServices;
        }


        [HttpPost("/login")]
        public IActionResult Login([FromBody] Login loginCred)
        {
            try
            {
                if (loginCred == null)
                {
                    ErrorResponseDTO response = new ErrorResponseDTO()
                    {
                        Message = "No Request Data"
                    };
                    return BadRequest(response);
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var user = _authRepository.CheckUserEmail(loginCred.Email);
                if (!user)
                {
                    ErrorResponseDTO response = new ErrorResponseDTO()
                    {
                        Message = "User_notexist"
                    };
                    return BadRequest(response);
                }


                if (!_authRepository.HandleUserLogin(loginCred))
                {
                    ErrorResponseDTO response = new ErrorResponseDTO()
                    {
                        Message = "Wrong credentials"
                    };
                    return BadRequest(response);
                }
                else
                {
                    var token = _authServices.GenerateToken();
      
                    LoginSuccessResponseDTO body = new  LoginSuccessResponseDTO()
                    {
                        Message = "Login Success",
                        Token = token
                    };
                    return Ok(body);
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }

        [HttpPost("/signup")]
        public IActionResult Signup([FromBody] Signup signupCred)
        {
            try
            {
                if (signupCred == null)
                {
                    ErrorResponseDTO response = new ErrorResponseDTO()
                    {
                        Message = "No Request Data"
                    };
                    return BadRequest(response);
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                
                if (_authRepository.CheckUserEmail(signupCred.Email))
                {
                    ErrorResponseDTO response = new ErrorResponseDTO()
                    {
                        Message = "User_exist"
                    };
                    return BadRequest(response);
                }

                _authRepository.HandleUserSignup(signupCred);

                SignupSuccesResponseDTO responseDTO = new SignupSuccesResponseDTO()
                {
                    Message = "Signup_Success"
                };

                 return Ok(responseDTO);
             

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
