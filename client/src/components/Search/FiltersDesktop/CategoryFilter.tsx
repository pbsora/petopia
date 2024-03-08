type Props = {
  category: string;
  handleCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CategoryFilter = ({ category, handleCategory }: Props) => {
  return (
    <div className="flex flex-col gap-2 ">
      <p className="font-medium">Categories</p>
      <hr className="border-zinc-300" />
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="food"
          value="food"
          checked={category === "food"}
          onChange={handleCategory}
        />
        <label htmlFor="food">Food</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="bowls"
          value="bowls"
          checked={category === "bowls"}
          onChange={handleCategory}
        />
        <label htmlFor="bowls">Bowls & Feeders</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="toys"
          value="toys"
          checked={category === "toys"}
          onChange={handleCategory}
        />
        <label htmlFor="toys">Toys</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="beds"
          value="beds"
          checked={category === "beds"}
          onChange={handleCategory}
        />
        <label htmlFor="beds">Beds</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="litter"
          value="litter"
          checked={category === "litter"}
          onChange={handleCategory}
        />
        <label htmlFor="litter">Litter</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="feeders"
          value="feeders"
          checked={category === "feeders"}
          onChange={handleCategory}
        />
        <label htmlFor="feeders">Feeders</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="tanks"
          value="tanks"
          checked={category === "tanks"}
          onChange={handleCategory}
        />
        <label htmlFor="tanks">Tanks & Aquariums</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="filters"
          value="filters"
          checked={category === "filters"}
          onChange={handleCategory}
        />
        <label htmlFor="filters">Filters & Pumps</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="grooming"
          value="grooming"
          checked={category === "grooming"}
          onChange={handleCategory}
        />
        <label htmlFor="grooming">Grooming</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="accessories"
          value="accessories"
          checked={category === "accessories"}
          onChange={handleCategory}
        />
        <label htmlFor="accessories">Accessories</label>
      </div>
    </div>
  );
};
export default CategoryFilter;
