using AutoMapper;
using Microsoft.AspNetCore.Http.Features;
using server.Data;
using server.DTOs.Order;
using server.Model;
using server.Repositories.OrderRepository;

namespace server.Repositories.OrderRepo
{
    public class OrderRepository : IOrderRepository
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public OrderRepository(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<IEnumerable<Order>> GetOrders(string userId)
        {
            throw new NotImplementedException();
        }

        public Task<Order> GetOrderById(string id)
        {
            throw new NotImplementedException();
        }

        public async Task<Order> CreateOrder(List<OrderItemDTO> orderItems, string userId)
        {
            var items = _mapper.Map<List<OrderItem>>(orderItems);
            var itemsToAdd = new List<OrderItem>();

            foreach (var item in items)
            {
                var orderItem = new OrderItem
                {
                    ProductId = item.ProductId,
                    Quantity = item.Quantity
                };

                itemsToAdd.Add(orderItem);
            }

            await _context.OrderItems.AddRangeAsync(itemsToAdd);

            var order = new Order
            {
                TotalValue = itemsToAdd.Sum(i => i.Product.Price * i.Quantity),
                OrderDate = DateTime.Now,
                UserId = userId,
                OrderItems = itemsToAdd
            };
            System.Console.WriteLine(order);
            await _context.Orders.AddAsync(order);

            foreach (var item in items)
            {
                item.OrderId = order.Id;
            }

            await _context.SaveChangesAsync();

            return order;
        }

        public Order DeleteOrder(string id)
        {
            throw new NotImplementedException();
        }
    }
}
