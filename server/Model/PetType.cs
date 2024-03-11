using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Model
{
    public class PetType
    {
        [Key]
        public int PetTypeId { get; set; }

        [Required]
        public string? Name { get; set; }
    }
}
