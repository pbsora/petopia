using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.DTOs.Categories;

namespace server.DTOs.Favorites
{
    public class FavoriteProductDTO
    {
        public Guid ProductsId { get; set; } = Guid.NewGuid();
        public string Name { get; set; } = string.Empty;
        public double Price { get; set; } = 0.0;
        public string Image { get; set; } = string.Empty;
        public string? Slug { get; set; }
        public CategoryProductDTO Category { get; set; } = null!;
    }
}
