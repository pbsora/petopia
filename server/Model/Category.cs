using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using server.DTOs.Categories;

namespace server.Model
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        public string Name { get; set; } = string.Empty;

        public ICollection<Product>? Products { get; set; }

        public static implicit operator Category(CategoryProductDTO v)
        {
            throw new NotImplementedException();
        }
    }
}
