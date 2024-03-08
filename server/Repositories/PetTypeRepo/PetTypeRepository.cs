using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Model;

namespace server.Repositories.PetTypeRepo
{
    public class PetTypeRepository : IPetTypeRepository
    {
        private readonly AppDbContext _context;

        public PetTypeRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<PetType>> GetPetTypes()
        {
            var petTypes = await _context.PetTypes.ToListAsync();
            return petTypes;
        }

        public async Task<PetType> GetPetTypeById(int id)
        {
            var petType = await _context.PetTypes.FirstOrDefaultAsync(p => p.PetTypeId == id);
            if (petType == null)
            {
                return null!;
            }
            return petType;
        }

        public async Task<PetType> AddPetType(PetType petType)
        {
            var createdPetType = await _context.PetTypes.AddAsync(petType);
            await _context.SaveChangesAsync();
            return createdPetType.Entity;
        }

        public PetType UpdatePetType(PetType petType)
        {
            _context.Entry(petType).State = EntityState.Modified;
            _context.SaveChanges();
            return petType;
        }

        public PetType DeletePetType(PetType petType)
        {
            _context.Remove(petType);
            _context.SaveChanges();
            return petType;
        }
    }
}
