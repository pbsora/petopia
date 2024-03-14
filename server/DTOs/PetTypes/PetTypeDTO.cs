using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace server.DTOs.PetTypes
{
    public class PetTypeDTO
    {
        [Key]
        public int PetId { get; set; }

        [Required]
        public string? Name { get; set; }
    }
}
