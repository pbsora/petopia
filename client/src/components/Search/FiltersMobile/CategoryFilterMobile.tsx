type Props = {
  category: string;
  handleCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CategoryFilterMobile = ({ category, handleCategory }: Props) => {
  return (
    <div className="flex flex-col gap-2 py-2">
      <h1 className="flex items-center w-full gap-2 p-2 text-2xl bg-zinc-200 dark:bg-zinc-600 dark:text-zinc-200 text-zinc-800 font-madimi">
        Categories
      </h1>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="foodm"
          value="food"
          checked={category === "food"}
          onChange={handleCategory}
        />
        <label htmlFor="foodm">Food</label>
      </div>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="bowlsm"
          value="bowls"
          checked={category === "bowls"}
          onChange={handleCategory}
        />
        <label htmlFor="bowlsm">Bowls & Feeders</label>
      </div>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="toysm"
          value="toys"
          checked={category === "toys"}
          onChange={handleCategory}
        />
        <label htmlFor="toysm">Toys</label>
      </div>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="bedsm"
          value="beds"
          checked={category === "beds"}
          onChange={handleCategory}
        />
        <label htmlFor="bedsm">Beds</label>
      </div>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="litterm"
          value="litter"
          checked={category === "litter"}
          onChange={handleCategory}
        />
        <label htmlFor="litterm">Litter</label>
      </div>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="feedersm"
          value="feeders"
          checked={category === "feeders"}
          onChange={handleCategory}
        />
        <label htmlFor="feedersm">Feeders</label>
      </div>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="tanksm"
          value="tanks"
          checked={category === "tanks"}
          onChange={handleCategory}
        />
        <label htmlFor="tanksm">Tanks & Aquariums</label>
      </div>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="filtersm"
          value="filters"
          checked={category === "filters"}
          onChange={handleCategory}
        />
        <label htmlFor="filtersm">Filters & Pumps</label>
      </div>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="groomingm"
          value="grooming"
          checked={category === "grooming"}
          onChange={handleCategory}
        />
        <label htmlFor="groomingm">Grooming</label>
      </div>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="accessoriesm"
          value="accessories"
          checked={category === "accessories"}
          onChange={handleCategory}
        />
        <label htmlFor="accessoriesm">Accessories</label>
      </div>
    </div>
  );
};
export default CategoryFilterMobile;
