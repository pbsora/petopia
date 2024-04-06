import { Capitalize } from "@/utils/Capitalize";
import { PetType } from "@/utils/Types & Interfaces";

type Props = {
  petType: string;
  handlePetType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pets: PetType[];
};

const PetTypeFilterMobile = ({ petType, pets, handlePetType }: Props) => {
  return (
    <div className="flex flex-col gap-2 py-2">
      <h1 className="flex items-center w-full gap-2 p-2 text-2xl bg-zinc-200 dark:bg-slate-700 dark:text-zinc-200 text-zinc-800 font-madimi">
        Pet
      </h1>
      {pets?.map((pet) => (
        <div
          className="flex items-center ml-2 space-x-2 text-lg"
          key={pet.name + "m"}
        >
          <input
            type="radio"
            id={pet.name + "m"}
            value={pet.name + "m"}
            checked={petType === pet.name}
            onChange={handlePetType}
          />
          <label htmlFor={pet.name + "m"}>{Capitalize(pet.name)}</label>
        </div>
      ))}
    </div>
  );
};
export default PetTypeFilterMobile;
