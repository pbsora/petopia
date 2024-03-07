import SearchBody from "@/components/Search/SearchBody";
import SearchCategories from "@/components/Search/SearchCategories";
import { useSearchProducts } from "@/lib/Queries/SearchQueries";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  const getProductsQuery = useSearchProducts(name || "");

  useEffect(() => {
    getProductsQuery.refetch();
  }, [name, getProductsQuery]);

  const fetchMore = () => {
    if (getProductsQuery.hasNextPage) {
      getProductsQuery.fetchNextPage();
    } else console.log("No more pages");
  };

  /* return (
    <div>
      {searchParams.get("name")}
      <button onClick={fetchMore}>Next</button>
    </div>
  ); */

  return (
    <div className="flex flex-col md:flex-row w-[8] md:w-[85vw] xl:w-[75vw] m-auto md:gap-4 md:mt-6 ">
      <SearchCategories />
      <SearchBody />
    </div>
  );
};
export default Search;
