using Microsoft.AspNetCore.Mvc;
using server.DTOs.Favorites;
using server.Model;
using server.Repositories.FavoriteRepo;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FavoriteController : ControllerBase
    {
        private readonly IFavoriteRepository _repository;

        public FavoriteController(IFavoriteRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<GetFavoriteDTO>>> GetAsync(string id)
        {
            try
            {
                var favorites = await _repository.GetFavoritesAsync(id);

                if (favorites.Count() == 0)
                    return NotFound("No favorites found");

                return Ok(favorites);
            }
            catch (System.Exception)
            {
                throw;
            }
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync(NewFavoriteDTO favorite)
        {
            try
            {
                var newFavorite = await _repository.CreateFavoriteAsync(favorite);

                if (!newFavorite)
                {
                    return BadRequest("Product already favorited");
                }

                return Ok("Favorite added");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
