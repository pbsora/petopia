import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { useState } from "react";
import CategoryFilter from "./FiltersDesktop/CategoryFilter";
import PriceFilter from "./FiltersDesktop/PriceFilter";
import PetTypeFilter from "./FiltersDesktop/PetTypeFilter";

const SearchFiltersDesktop = () => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [petType, setPetType] = useState("");

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };
  const handlePetType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPetType(e.target.value);
  };

  //Forms the query params depending if a filter is selected or not
  const query = `${category !== "" ? `category=${category}` : ""}${
    price !== "" ? `&price=${price}&criteria=lt` : ""
  }${petType !== "" ? `&pet=${petType}` : ""}`;

  console.log(query);

  return (
    <div className="w-3/4 h-48 mb-4 font-inter text-zinc-900 dark:text-zinc-200">
      <aside className="flex flex-col gap-10 select-none">
        <div className="flex flex-col gap-2 ">
          <p className="font-medium">Filter Products</p>
          <hr className="border-zinc-300" />
          <button className="flex items-center gap-3 text-sm">
            Remove filters <FaRegTrashAlt />
          </button>
        </div>
        <div>
          <Button className="bg-sky-500 dark:text-white">Apply Filters</Button>
        </div>
        <CategoryFilter category={category} handleCategory={handleCategory} />
        <PriceFilter price={price} handlePrice={handlePrice} />
        <PetTypeFilter petType={petType} handlePetType={handlePetType} />
      </aside>
    </div>
  );
};
export default SearchFiltersDesktop;
