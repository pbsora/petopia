using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.DTOs.Order
{
    public class NewOrderItemDTO
    {
        public int Quantity { get; set; }
        public Guid ProductId { get; set; }
    }
}
