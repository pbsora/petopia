import { useSearchParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import { useEffect } from "react";
import { useSearchProducts } from "@/lib/Queries/SearchQueries";
import { ProductResponse } from "@/utils/Types & Interfaces";
import { PropagateLoader } from "react-spinners";
import FetchMore from "./FetchMore";

const SearchBody = () => {
  const [searchParams] = useSearchParams();
  const getProductsQuery = useSearchProducts(searchParams.toString());

  useEffect(() => {
    getProductsQuery.refetch();
  }, [searchParams, getProductsQuery.refetch]);

  const fetchMore = () => {
    if (getProductsQuery.hasNextPage) getProductsQuery.fetchNextPage();
    else console.log("No more pages");
  };

  const products = getProductsQuery.data?.pages as ProductResponse[];

  if (getProductsQuery.isFetching)
    return (
      <div className="h-[60vh] col-span-6 flex justify-center items-center">
        <PropagateLoader color="#15bde1" />
      </div>
    );

  if (getProductsQuery.isError)
    return (
      <div className="h-[60vh] col-span-6 flex justify-center items-center">
        No products found
      </div>
    );

  return (
    <>
      <div className="grid grid-cols-2 col-span-6 gap-1 px-1 mb-16 md:grid-cols-4 md:gap-4">
        {products
          ?.flatMap((data) => data.data)
          .map((product) => (
            <ProductItem product={product} />
          ))}
        <div className="col-span-2 mt-4 text-center md:col-span-4">
          <FetchMore fetchMore={fetchMore} />
        </div>
      </div>
    </>
  );
};
export default SearchBody;
