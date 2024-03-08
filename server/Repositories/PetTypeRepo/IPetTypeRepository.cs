using server.Model;

namespace server.Repositories.PetTypeRepo
{
    public interface IPetTypeRepository
    {
        Task<IEnumerable<PetType>> GetPetTypes();
        Task<PetType> GetPetTypeById(int id);
        Task<PetType> AddPetType(PetType petType);
        PetType UpdatePetType(PetType petType);
        PetType DeletePetType(PetType petType);
    }
}
