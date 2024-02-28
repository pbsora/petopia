using System.ComponentModel.DataAnnotations;

namespace server.Model
{
    public class Product
    {
        public int ProductId { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;
        public int Stock { get; set; } = 0;
        public double Price { get; set; } = 0.0;
        public string Image { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int CategoryId { get; set; }
        public Category Category { get; set; } = null!;
    }
}
