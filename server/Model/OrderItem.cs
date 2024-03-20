using System.ComponentModel.DataAnnotations;

namespace server.Model
{
    public class OrderItem
    {
        public int Id { get; set; }
        public int Quantity { get; set; }

        [Required]
        public Guid ProductId { get; set; }
        public Product Product { get; set; } = null!;
        public int? OrderId { get; set; }
        public Order Order { get; set; } = null!;
    }
}
