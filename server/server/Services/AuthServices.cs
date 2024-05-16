using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;

namespace server.Services
{

    public interface IAuthServices
    {
        public string HashPassword(string password);
        public string GenerateToken();
        public bool VerifyPassword(string hashedPasswordInDatabase, string providedPassword);
    }


    public class AuthServices : IAuthServices
    {
        

        public AuthServices()
        {
            
        }


        public string HashPassword(string password)
        {
            using (var sha256 = SHA256.Create())
            {
                var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                return BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();
            }
        }

        public string GenerateToken()
        {

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("TheSecretKeyNeedsToBePrettyLongSoWeNeedToAddSomeCharsHere"));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
              issuer: "yourissuer",
              audience: "youraudience",
              claims: new[] {
      new Claim("sub", "user1")
              },
              expires: DateTime.Now.AddMinutes(30),
              signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);

        }


        public bool VerifyPassword(string hashedPasswordInDatabase, string providedPassword)
        {
            var hashedProvidedPassword = HashPassword(providedPassword);
            return hashedPasswordInDatabase == hashedProvidedPassword;
        }
    }
}

