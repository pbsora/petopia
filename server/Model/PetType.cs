using System.ComponentModel.DataAnnotations;

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
