using System.ComponentModel.DataAnnotations;

namespace server.Model
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        public string Name { get; set; } = string.Empty;
        ICollection<Product> Products { get; set; } = new List<Product>();
    }
}
