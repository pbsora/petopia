using System.ComponentModel.DataAnnotations;

namespace server.DTOs.Products
{
    public class NewProductDTO
    {
        [Required]
        [MinLength(3)]
        public string Name { get; set; } = string.Empty;
        public int Stock { get; set; } = 0;
        public double Price { get; set; } = 0.0;
        public string Image { get; set; } = string.Empty;

        [MaxLength(1000)]
        public string Description { get; set; } = string.Empty;

        [Required]
        public int CategoryId { get; set; }

        [Required]
        public int PetId { get; set; }
    }
}
