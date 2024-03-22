using AutoMapper;

namespace server.DTOs.Order
{
    public class OrderItemDTOMappingProfile : Profile
    {
        public OrderItemDTOMappingProfile()
        {
            CreateMap<Model.OrderItem, OrderItemDTO>().ReverseMap();
            CreateMap<Model.OrderItem, GetOrderDTO>().ReverseMap();
            CreateMap<Model.OrderItem, NewOrderItemDTO>().ReverseMap();
        }
    }
}
