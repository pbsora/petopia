import { Capitalize } from "@/utils/Capitalize";
import { PetType } from "@/utils/Types & Interfaces";

type Props = {
  petType: string;
  handlePetType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pets: PetType[];
};

const PetTypeFilter = ({ petType, handlePetType, pets }: Props) => {
  return (
    <div className="flex flex-col gap-2 ">
      <p className="font-medium">Pet</p>
      <hr className="border-zinc-300" />
      {pets?.map((pet) => (
        <div className="flex items-center space-x-2" key={pet.petTypeId}>
          <input
            type="radio"
            id={pet.name}
            value={pet.name}
            checked={petType === pet.name}
            onChange={handlePetType}
          />
          <label htmlFor={pet.name}>{Capitalize(pet.name)}</label>
        </div>
      ))}
    </div>
  );
};
export default PetTypeFilter;
