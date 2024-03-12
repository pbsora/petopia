using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.Model;
using server.Repositories.PetTypeRepo;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PetTypeController : ControllerBase
    {
        private readonly IPetTypeRepository _petTypeRepository;

        public PetTypeController(IPetTypeRepository petTypeRepository)
        {
            _petTypeRepository = petTypeRepository;
        }

        [HttpGet]
        public async Task<ActionResult<PetType>> GetAllAsync()
        {
            var petTypes = await _petTypeRepository.GetPetTypes();
            if (petTypes == null)
            {
                return NotFound("No pet types found");
            }
            return Ok(petTypes);
        }

        [HttpGet("{id}", Name = "GetPetTypeById")]
        public async Task<ActionResult<PetType>> GetByIdAsync(int id)
        {
            var petType = await _petTypeRepository.GetPetTypeById(id);
            if (petType == null)
            {
                return NotFound("Pet type not found");
            }
            return Ok(petType);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] PetType petType)
        {
            var createdPetType = await _petTypeRepository.AddPetType(petType);
            if (createdPetType == null)
            {
                return BadRequest("Failed to create pet type");
            }
            return CreatedAtRoute(
                "GetPetTypeById",
                new { id = createdPetType.PetTypeId },
                createdPetType
            );
        }

        [HttpPut("{id}")]
        public ActionResult<PetType> PutAsync(int id, PetType petType)
        {
            if (id != petType.PetTypeId)
            {
                return BadRequest("Pet type ID mismatch");
            }
            var updatedPetType = _petTypeRepository.UpdatePetType(petType);
            if (updatedPetType == null)
            {
                return BadRequest("Failed to update pet type");
            }
            return Ok(updatedPetType);
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var petType = await _petTypeRepository.GetPetTypeById(id);
            if (petType == null)
            {
                return NotFound("Pet type not found");
            }
            _petTypeRepository.DeletePetType(petType);
            return Ok(petType);
        }
    }
}
