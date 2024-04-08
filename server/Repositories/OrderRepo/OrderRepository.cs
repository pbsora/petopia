using AutoMapper;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.DTOs.Order;
using server.DTOs.Products;
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

        public async Task<IEnumerable<GetOrderDTO>> GetOrders(string userId)
        {
            if (string.IsNullOrEmpty(userId))
                throw new ArgumentNullException(nameof(userId));

            var orders = await _context
                .Orders.Where(o => o.UserId == userId)
                .OrderByDescending(o => o.OrderDate)
                .Select(o => new GetOrderDTO
                {
                    Id = o.Id,
                    OrderDate = o.OrderDate,
                    TotalValue = o.TotalValue,
                    OrderItems = o
                        .OrderItems.Select(oi => new OrderItemDTO
                        {
                            Quantity = oi.Quantity,
                            Product = new OrderProductDTO
                            {
                                Name = oi.Product.Name,
                                Image = oi.Product.Image,
                                Price = oi.Product.Price,
                                Slug = oi.Product.Slug
                            }
                        })
                        .ToList()
                })
                .ToListAsync();

            return orders;
        }

        public async Task<GetOrderDTO> GetOrderById(string id)
        {
            var order = await _context
                .Orders.Where(o => o.Id == Guid.Parse(id))
                .Select(o => new GetOrderDTO
                {
                    Id = o.Id,
                    OrderDate = o.OrderDate,
                    TotalValue = o.TotalValue,
                    OrderItems = new List<OrderItemDTO>()
                })
                .FirstOrDefaultAsync();

            if (order == null)
                throw new ArgumentNullException(nameof(order));

            order.OrderItems = await _context
                .OrderItems.Where(oi => oi.OrderId == order.Id)
                .Select(oi => new OrderItemDTO
                {
                    Quantity = oi.Quantity,
                    Product = new OrderProductDTO
                    {
                        Name = oi.Product.Name,
                        Image = oi.Product.Image,
                        Price = oi.Product.Price,
                        Slug = oi.Product.Slug
                    }
                })
                .ToListAsync();

            return order;
        }

        public async Task<Order> CreateOrder(List<NewOrderItemDTO> orderItems, string userId)
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

            foreach (var item in itemsToAdd)
            {
                item.Product = await _context.Products.FirstOrDefaultAsync(p =>
                    p.ProductsId == item.ProductId
                );
            }

            var order = new Order
            {
                TotalValue = itemsToAdd.Sum(i => i.Product.Price * i.Quantity),
                OrderDate = DateTime.Now,
                UserId = userId,
                OrderItems = itemsToAdd
            };

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
