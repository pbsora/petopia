using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using server.Model;

namespace server.DTOs.PetTypes
{
    public class PetDTOMappingProfile : Profile
    {
        public PetDTOMappingProfile()
        {
            CreateMap<PetType, PetTypeDTO>().ReverseMap();
        }
    }
}
