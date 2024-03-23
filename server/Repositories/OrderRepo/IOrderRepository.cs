using server.DTOs.Order;
using server.Model;

namespace server.Repositories.OrderRepository
{
    public interface IOrderRepository
    {
        public Task<IEnumerable<GetOrderDTO>> GetOrders(string userId);
        public Task<GetOrderDTO> GetOrderById(string id);
        public Task<Order> CreateOrder(List<NewOrderItemDTO> orderItems, string userId);
        public Order DeleteOrder(string id);
    }
}
