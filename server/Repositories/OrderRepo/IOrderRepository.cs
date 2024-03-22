using server.DTOs.Order;
using server.Model;

namespace server.Repositories.OrderRepository
{
    public interface IOrderRepository
    {
        public Task<IEnumerable<GetOrderDTO>> GetOrders(string userId);
        public Task<Order> GetOrderById(string id);
        public Task<Order> CreateOrder(List<OrderItemDTO> orderItems, string userId);
        public Order DeleteOrder(string id);
    }
}
