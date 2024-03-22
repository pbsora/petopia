using server.DTOs.Products;
using server.Model;

namespace server.DTOs.Order
{
    public class GetOrderDTO
    {
        public Guid Id { get; set; } = new Guid();
        public DateTime OrderDate { get; set; }
        public double TotalValue { get; set; }
        public string? UserId { get; set; }
        public List<OrderItemDTO> OrderItems { get; set; } = null!;
    }
}
