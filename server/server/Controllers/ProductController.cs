using Microsoft.AspNetCore.Mvc;
using server.Data_Access;
using server.Models;

namespace server.Controllers
{
    public class ProductController : Controller
    {
        private readonly IProductRepository _productRepository;
        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }


        [HttpGet("/products")]
        public IActionResult GetAllProducts()
        {
            try
            {
                var data = _productRepository.GetAllProducts();
                if(data == null)
                {
                    return NotFound(data);
                }
                return Ok(data);
            }
            catch(Exception ex) { 
               return BadRequest(ex.Message);
            }
        }

        [HttpGet("/product/{id}")]
        public IActionResult GetProduct(int id)
        {
            try
            {
                var data = _productRepository.GetProductById(id);
                if (data == null)
                {
                    return NotFound(data);
                }
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
