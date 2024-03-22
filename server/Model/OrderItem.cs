using System.ComponentModel.DataAnnotations;

namespace server.Model
{
    public class OrderItem
    {
        public Guid Id { get; set; } = new Guid();
        public int Quantity { get; set; }

        [Required]
        public Guid ProductId { get; set; }
        public Product Product { get; set; } = null!;
        public Guid? OrderId { get; set; }
        public Order Order { get; set; } = null!;
    }
}
