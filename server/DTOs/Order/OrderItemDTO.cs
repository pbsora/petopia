namespace server.DTOs.Order
{
    public class OrderItemDTO
    {
        public Guid Id { get; set; } = new Guid();
        public int Quantity { get; set; }

        public Guid ProductId { get; set; }

        public Guid? OrderId { get; set; }
    }
}
