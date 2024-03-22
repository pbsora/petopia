using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

namespace server.DTOs.Order
{
    public class OrderItemDTOMappingProfile : Profile
    {
        public OrderItemDTOMappingProfile()
        {
            CreateMap<Model.OrderItem, OrderItemDTO>().ReverseMap();
        }
    }
}
