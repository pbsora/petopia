using System.Security.Claims;
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

        [HttpGet]
        public async Task<ActionResult<IEnumerable<GetFavoriteDTO>>> GetAsync()
        {
            try
            {
                var user_id = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                if (string.IsNullOrEmpty(user_id))
                    return StatusCode(401, "Not logged in!");

                var favorites = await _repository.GetFavoritesAsync(user_id);

                if (favorites.Count() == 0)
                    return NotFound("No favorites found");

                return Ok(favorites);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
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

        [HttpDelete("{favorite_id}")]
        public async Task<IActionResult> DeleteAsync(string favorite_id)
        {
            try
            {
                var user_id = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                if (string.IsNullOrEmpty(user_id))
                    return StatusCode(401, "Not logged in!");

                var favorite = await _repository.GetFavoriteById(favorite_id);

                if (favorite == null)
                    return BadRequest("Favorite not found!");

                var res = await _repository.DeleteFavoriteAsync(favorite);

                if (!res)
                    return StatusCode(500, "Something went wrong!");

                return Ok("Favorite deleted");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
