using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.DTOs.Categories;
using server.DTOs.Favorites;
using server.Model;

namespace server.Repositories.FavoriteRepo
{
    public class FavoriteRepository : IFavoriteRepository
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public FavoriteRepository(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<GetFavoriteDTO>> GetFavoritesAsync(string userId)
        {
            var order = await _context
                .Favorites.Where(f => f.UserId == userId)
                .Select(f => new GetFavoriteDTO
                {
                    FavoriteId = f.FavoriteId,
                    Product = new FavoriteProductDTO
                    {
                        ProductsId = f.Product.ProductsId,
                        Name = f.Product.Name,
                        Price = f.Product.Price,
                        Image = f.Product.Image,
                        Slug = f.Product.Slug,
                        Category = new CategoryProductDTO
                        {
                            CategoryId = f.Product.Category.CategoryId,
                            Name = f.Product.Category.Name
                        }
                    }
                })
                .ToListAsync();

            if (order.Count == 0)
            {
                throw new Exception("No favorites found");
            }

            return _mapper.Map<IEnumerable<GetFavoriteDTO>>(order);
        }

        public async Task<Boolean> CreateFavoriteAsync(NewFavoriteDTO favorite)
        {
            var favoriteExists = _context.Favorites.Any(f =>
                f.UserId == favorite.UserId && f.ProductId == favorite.ProductId
            );

            if (favoriteExists)
                return false;

            var favoriteToAdd = _mapper.Map<Favorite>(favorite);

            await _context.Favorites.AddAsync(favoriteToAdd);
            await _context.SaveChangesAsync();

            return true;
        }

        public Task<Favorite> DeleteFavoriteAsync(string userId, string productId)
        {
            throw new NotImplementedException();
        }
    }
}
