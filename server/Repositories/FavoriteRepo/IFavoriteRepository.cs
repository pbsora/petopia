using server.DTOs.Favorites;
using server.Model;

namespace server.Repositories.FavoriteRepo
{
    public interface IFavoriteRepository
    {
        public Task<IEnumerable<GetFavoriteDTO>> GetFavoritesAsync(string userId);
        public Task<Favorite> GetFavoriteById(string favoriteId);
        public Task<Boolean> CreateFavoriteAsync(NewFavoriteDTO favorite);
        public Task<Boolean> DeleteFavoriteAsync(Favorite favorite);
    }
}
