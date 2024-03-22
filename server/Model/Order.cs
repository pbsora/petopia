namespace server.Model
{
    public class Order
    {
        public Guid Id { get; set; } = new Guid();
        public DateTime OrderDate { get; set; }
        public double TotalValue { get; set; }
        public string? UserId { get; set; }
        public ApplicationUser User { get; set; } = null!;
        public List<OrderItem> OrderItems { get; set; } = null!;
    }
}
