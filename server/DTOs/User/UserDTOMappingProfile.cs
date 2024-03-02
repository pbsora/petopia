using AutoMapper;
using server.Model;

namespace server.DTOs.User
{
    public class UserDTOMappingProfile : Profile
    {
        public UserDTOMappingProfile()
        {
            CreateMap<ApplicationUser, UserInfoDTO>().ReverseMap();
        }
    }
}
