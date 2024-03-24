using AutoMapper;

namespace server.DTOs.Favorites
{
    public class FavoriteDTOMappingProfile : Profile
    {
        public FavoriteDTOMappingProfile()
        {
            CreateMap<Model.Favorite, NewFavoriteDTO>().ReverseMap();
            CreateMap<Model.Favorite, GetFavoriteDTO>().ReverseMap();
        }
    }
}
