namespace server.DTOs.Favorites
{
    public class NewFavoriteDTO
    {
        public Guid ProductId { get; set; }

        public string? UserId { get; set; }
    }
}
