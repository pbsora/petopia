import SearchFiltersMobile from "./SearchFiltersMobile";
import SearchFiltersDesktop from "./SearchFiltersDesktop";
const SearchCategories = () => {
  return (
    <>
      <div className="hidden w-full col-span-2 md:block">
        <SearchFiltersDesktop />
      </div>
      <div className="w-full md:hidden">
        <SearchFiltersMobile />
      </div>
    </>
  );
};
export default SearchCategories;
