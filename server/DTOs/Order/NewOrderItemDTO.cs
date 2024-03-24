namespace server.DTOs.Order
{
    public class NewOrderItemDTO
    {
        public int Quantity { get; set; }
        public Guid ProductId { get; set; }
    }
}
