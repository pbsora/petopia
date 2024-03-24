namespace server.Model
{
    public class Favorite
    {
        public Guid FavoriteId { get; set; } = new Guid();
        public Guid ProductId { get; set; }
        public Product Product { get; set; } = null!;
        public string? UserId { get; set; }
        public ApplicationUser User { get; set; } = null!;
    }
}
