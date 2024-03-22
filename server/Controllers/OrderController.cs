using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using server.DTOs.Order;
using server.Model;
using server.Repositories.OrderRepository;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;

        public OrderController(IOrderRepository orderRepository, IMapper mapper)
        {
            _orderRepository = orderRepository;
            _mapper = mapper;
        }

        [HttpPost("{userId}")]
        public async Task<ActionResult<Order>> PostAsync(
            [FromBody] List<OrderItemDTO> orderItems,
            string userId
        )
        {
            var newOrder = await _orderRepository.CreateOrder(orderItems, userId);

            return Ok(newOrder);
        }
    }
}
