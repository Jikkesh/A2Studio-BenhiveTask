namespace server.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Image_url { get; set; }
        public decimal New_price { get; set; }
        public decimal Old_price { get; set; }
    }
}
