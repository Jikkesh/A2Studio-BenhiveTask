using server.Models;
using Npgsql;
using server.Services;

namespace server.Data_Access
{
    public interface IAuthRepository
    {
        public bool CheckUserEmail(string email);
        public bool HandleUserLogin(Login loginCred);
        public void HandleUserSignup(Signup signupCred);
    }


    public class AuthRepository : IAuthRepository
    {
        private readonly IAuthServices _authServices;
        private readonly string _connectionString;
  

        public AuthRepository(IConfiguration configuration, IAuthServices authServices) {
 
            _connectionString = configuration.GetConnectionString("PostgresConnection");
            _authServices = authServices;
        }

        public bool CheckUserEmail(string email)
        {
            try
            {
                using (var connection = new NpgsqlConnection(_connectionString))
                {
                    connection.Open();
                    using (var command = new NpgsqlCommand("SELECT COUNT(*) FROM user_table WHERE email = @Email", connection))
                    {
                        command.Parameters.AddWithValue("@Email", email);
                        return (long)command.ExecuteScalar() > 0;
                    }
                }
            } 
            catch(Exception exp) { 
                throw; 
            }
        }

        public bool HandleUserLogin(Login userCred)
        {
            try
            {
                using (var connection = new NpgsqlConnection(_connectionString))
                {
                    connection.Open();
                    using (var command = new NpgsqlCommand("SELECT hashedpassword FROM user_table WHERE email = @Email", connection))
                    {
                        command.Parameters.AddWithValue("@Email", userCred.Email);
                        var hashedPasswordInDatabase = (string)command.ExecuteScalar();

                        if (_authServices.VerifyPassword(hashedPasswordInDatabase, userCred.Password))
                        {
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }
                }
            } 
            catch (Exception ex) { 
                throw; 
            }
        }

        public void HandleUserSignup(Signup signupCred)
        {
            try
            {
                var hashedPassword = _authServices.HashPassword(signupCred.Password);

                using (var connection = new NpgsqlConnection(_connectionString))
                {
                    connection.Open();
                    using (var command = new NpgsqlCommand("INSERT INTO user_table (name ,email,phone ,hashedPassword) VALUES (@FullName, @Email,@Phone, @HashedPassword)", connection))
                    {
                        command.Parameters.AddWithValue("@Email", signupCred.Email);
                        command.Parameters.AddWithValue("@HashedPassword", hashedPassword);
                        command.Parameters.AddWithValue("@FullName", signupCred.Name);
                        command.Parameters.AddWithValue("@Phone", signupCred.PhoneNumber);
                        command.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception ex) { 
                throw; 
            }
        }
    }
}
