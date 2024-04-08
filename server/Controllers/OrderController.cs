using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
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

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetAsync()
        {
            var user_id = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (string.IsNullOrEmpty(user_id))
                return Unauthorized();

            var orders = await _orderRepository.GetOrders(user_id);

            if (orders == null || orders.Count() == 0)
                return NotFound();

            return Ok(orders);
        }

        [HttpGet("single/{id}")]
        public async Task<ActionResult<GetOrderDTO>> GetOrderAsync(string id)
        {
            var order = await _orderRepository.GetOrderById(id);
            if (order == null)
                return NotFound();

            return Ok(order);
        }

        [Authorize]
        [HttpPost("{id}")]
        public async Task<ActionResult<Order>> PostAsync(
            [FromBody] List<NewOrderItemDTO> orderItems,
            [FromRoute] string id
        )
        {
            try
            {
                var newOrder = await _orderRepository.CreateOrder(orderItems, id);

                return Ok(newOrder);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
