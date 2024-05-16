using server.Models;
using Npgsql;

namespace server.Data_Access
{

    public interface IProductRepository
    {
        public List<Product> GetAllProducts();
        public Product GetProductById(int id);
    }

    public class ProductRepository : IProductRepository
    {
        private readonly string _connectionString;
 
        public ProductRepository(IConfiguration configuration) {

            _connectionString = configuration.GetConnectionString("PostgresConnection");
        }


        public List<Product> GetAllProducts()
        {
            try
            {
                List<Product> products = new List<Product>();
                using (var connection = new NpgsqlConnection(_connectionString))
                {
                    connection.Open();
                    using (var command = new NpgsqlCommand("SELECT product_id,name,category,image_url,new_price,old_price FROM product", connection))
                    {
                        NpgsqlDataReader reader = command.ExecuteReader();

                        while (reader.Read())
                        {
                            Product product = new Product()
                            {
                                Id = reader.GetInt32(0),
                                Name = reader.GetString(1),
                                Category = reader.GetString(2),
                                Image_url = reader.GetString(3),
                                New_price = reader.GetDecimal(4),
                                Old_price = reader.GetDecimal(5)
                            };

                            products.Add(product);
                        }
                    }
                }
                return products;
            }
            catch (Exception ex)
            {
                throw;
            }

        }

        public Product GetProductById(int id)
        {
            try
            {
                using (var connection = new NpgsqlConnection(_connectionString))
                {
                    connection.Open();
                    using (var command = new NpgsqlCommand("SELECT product_id,name,category,image_url,new_price,old_price FROM product WHERE product_id = @Id", connection))
                    {
                        command.Parameters.AddWithValue("@Id", id);
                        NpgsqlDataReader reader = command.ExecuteReader();

                        if (reader.Read())
                        {
                            Product product = new Product()
                            {
                                Id = reader.GetInt32(0),
                                Name = reader.GetString(1),
                                Category = reader.GetString(2),
                                Image_url = reader.GetString(3),
                                New_price = reader.GetDecimal(4),
                                Old_price = reader.GetDecimal(5)
                            };

                            return product;
                        }
                        else
                        {
                            return null; // Product with the specified ID not found
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }

    }
}
