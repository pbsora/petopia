namespace server.Model
{
    public class Favorite
    {
        public Guid FavoriteId { get; set; }
        public Guid ProductId { get; set; }
        public Guid UserId { get; set; }
    }
}
