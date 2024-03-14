using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using server.DTOs.Categories;
using server.DTOs.PetTypes;
using server.Model;

namespace server.DTOs.Products
{
    public class ProductDTO
    {
        [Key]
        public Guid ProductsId { get; set; } = Guid.NewGuid();

        [Required]
        [MinLength(3)]
        public string Name { get; set; } = string.Empty;
        public int Stock { get; set; } = 0;
        public double Price { get; set; } = 0.0;
        public string Image { get; set; } = string.Empty;

        [MaxLength(250)]
        public string Description { get; set; } = string.Empty;
        public string? Slug { get; set; }

        public CategoryProductDTO Category { get; set; } = null!;

        public PetTypeDTO Pet { get; set; } = null!;
    }
}
