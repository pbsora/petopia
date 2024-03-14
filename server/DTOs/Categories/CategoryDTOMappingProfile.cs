using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using server.Model;

namespace server.DTOs.Categories
{
    public class CategoryDTOMappingProfile : Profile
    {
        public CategoryDTOMappingProfile()
        {
            CreateMap<Category, NewCategoryDTO>().ReverseMap();
            CreateMap<Category, CategoryProductDTO>().ReverseMap();
        }
    }
}
