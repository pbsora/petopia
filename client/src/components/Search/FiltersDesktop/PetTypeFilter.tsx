type Props = {
  petType: string;
  handlePetType: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PetTypeFilter = ({ petType, handlePetType }: Props) => {
  return (
    <div className="flex flex-col gap-2 ">
      <p className="font-medium">Pet</p>
      <hr className="border-zinc-300" />
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="dogs"
          value="dogs"
          checked={petType === "dogs"}
          onChange={handlePetType}
        />
        <label htmlFor="dogs">Dogs</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="cats"
          value="cats"
          checked={petType === "cats"}
          onChange={handlePetType}
        />
        <label htmlFor="cats">Cats</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="fish"
          value="fish"
          checked={petType === "fish"}
          onChange={handlePetType}
        />
        <label htmlFor="fish">Fish</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="birds"
          value="birds"
          checked={petType === "birds"}
          onChange={handlePetType}
        />
        <label htmlFor="birds">Birds</label>
      </div>
    </div>
  );
};
export default PetTypeFilter;
