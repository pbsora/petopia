using server.DTOs.Products;

namespace server.DTOs.Order
{
    public class OrderItemDTO
    {
        public int Quantity { get; set; }
        public OrderProductDTO Product { get; set; } = null!;
    }
}
