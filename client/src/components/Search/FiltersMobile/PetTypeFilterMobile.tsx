type Props = {
  petType: string;
  handlePetType: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PetTypeFilterMobile = ({ petType, handlePetType }: Props) => {
  return (
    <div className="flex flex-col gap-2 py-2">
      <h1 className="flex items-center w-full gap-2 p-2 text-2xl bg-zinc-200 dark:bg-zinc-600 dark:text-zinc-200 text-zinc-800 font-madimi">
        Pet
      </h1>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="dogsm"
          value="dogs"
          checked={petType === "dogs"}
          onChange={handlePetType}
        />
        <label htmlFor="dogsm">Dogs</label>
      </div>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="catsm"
          value="cats"
          checked={petType === "cats"}
          onChange={handlePetType}
        />
        <label htmlFor="catsm">Cats</label>
      </div>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="fishm"
          value="fish"
          checked={petType === "fish"}
          onChange={handlePetType}
        />
        <label htmlFor="fishm">Fish</label>
      </div>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="birdsm"
          value="birds"
          checked={petType === "birds"}
          onChange={handlePetType}
        />
        <label htmlFor="birdsm">Birds</label>
      </div>
    </div>
  );
};
export default PetTypeFilterMobile;
