using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.Model;

namespace server.DTOs.Favorites
{
    public class GetFavoriteDTO
    {
        public Guid FavoriteId { get; set; }
        public FavoriteProductDTO Product { get; set; } = null!;
    }
}
