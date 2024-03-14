using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using server.Model;

namespace server.DTOs.Products
{
    public class ProductUpdateDTO
    {
        public Guid ProductsId { get; set; }

        [Required]
        [MinLength(3)]
        public string Name { get; set; } = string.Empty;
        public int Stock { get; set; } = 0;
        public double Price { get; set; } = 0.0;
        public string Image { get; set; } = string.Empty;

        [MaxLength(250)]
        public string Description { get; set; } = string.Empty;
        public string Slug { get; set; } = string.Empty;

        public int CategoryId { get; set; }
        public int PetId { get; set; }
    }
}
