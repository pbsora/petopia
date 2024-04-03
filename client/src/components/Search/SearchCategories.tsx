import SearchFiltersMobile from "./SearchFiltersMobile";
import SearchFiltersDesktop from "./SearchFiltersDesktop";
import { useGetCategories, useGetPets } from "@/lib/Queries/SearchQueries";
const SearchCategories = () => {
  const categories = useGetCategories();
  const pets = useGetPets();

  console.log(categories.data);

  return (
    <>
      <div className="hidden w-full col-span-2 md:block">
        <SearchFiltersDesktop categories={categories.data} pets={pets.data} />
      </div>
      <div className="w-full md:hidden">
        <SearchFiltersMobile />
      </div>
    </>
  );
};
export default SearchCategories;
