import { IoFilterOutline } from "react-icons/io5";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import CategoryFilterMobile from "./FiltersMobile/CategoryFilterMobile";
import PriceFilterMobile from "./FiltersMobile/PriceFilterMobile";
import PetTypeFilterMobile from "./FiltersMobile/PetTypeFilterMobile";
import { Category, PetType } from "@/utils/Types & Interfaces";

type Props = {
  categories: Category[];
  pets: PetType[];
};

const SearchFiltersMobile = ({ categories, pets }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const categoryParams = searchParams.get("category");
  const priceParams = searchParams.get("price");
  const petParams = searchParams.get("pet");

  const [category, setCategory] = useState(categoryParams || "");
  const [price, setPrice] = useState(priceParams || "");
  const [petType, setPetType] = useState(petParams || "");
  const [, setSearchParams] = useSearchParams();

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value.slice(0, -1));
  };
  const handlePetType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPetType(e.target.value.slice(0, -1));
  };

  const handleSearchQuery = () => {
    setSearchParams((state) => {
      if (category !== "") {
        state.set("category", category);
      }
      if (price !== "") {
        if (price === "200") {
          state.set("price", price);
          state.set("criteria", "gt");
        } else {
          state.set("price", price);
          state.set("criteria", "lt");
        }
      }
      if (petType !== "") {
        state.set("pet", petType);
      }
      return state;
    });
    setIsOpen(false);
  };

  const deleteSearchParams = () => {
    setSearchParams((state) => {
      state.delete("category");
      state.delete("price");
      state.delete("criteria");
      state.delete("pet");
      return state;
    });
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const openSidebar = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSidebar = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="w-full mb-4 font-roboto text-zinc-900 dark:text-zinc-200">
      <div className="border">
        <span
          onClick={openSidebar}
          className="flex items-center justify-center gap-2 py-3 text-lg font-semibold text-center bg-zinc-200 text-zinc-600 dark:bg-slate-800 dark:text-zinc-200"
        >
          <IoFilterOutline />
          Click here to filter products
        </span>
      </div>
      <div
        className={`${
          isOpen ? "fixed" : "hidden"
        }  top-0 z-50 w-screen h-screen pointer-events-none bg-zinc-900/60`}
        style={{ pointerEvents: "auto" }} // Ensure overlay blocks clicks
        onClick={closeSidebar}
      ></div>
      <aside
        className={`fixed z-50 top-0   w-[75vw] h-screen pb-1 dark:bg-background bg-white border rounded-r-3xl border-zinc-400 dark:border-zinc-900 ease-in-out duration-200  overflow-hidden ${
          isOpen ? "translate-x-[0rem]" : "-translate-x-[50rem]"
        }`}
        id="filter-mobile"
      >
        <div className="flex justify-between px-6 py-4 text-2xl">
          <h2 className="flex items-center gap-2 font-madimi">
            Filter categories
          </h2>
          <div className="flex items-center">
            <IoMdClose onClick={closeSidebar} />
          </div>
        </div>
        <div className="max-h-[90%] overflow-y-scroll">
          <button
            onClick={handleSearchQuery}
            className="w-full py-3 font-semibold text-white bg-sky-500 font-inter"
          >
            Apply Filters
          </button>
          <button
            className="w-full py-3 font-semibold text-white bg-red-500 font-inter"
            onClick={deleteSearchParams}
          >
            Delete Filters
          </button>
          <CategoryFilterMobile
            category={category}
            categories={categories}
            handleCategory={handleCategory}
          />
          <PetTypeFilterMobile
            petType={petType}
            pets={pets}
            handlePetType={handlePetType}
          />
          <PriceFilterMobile price={price} handlePrice={handlePrice} />
        </div>
      </aside>
    </div>
  );
};
export default SearchFiltersMobile;
