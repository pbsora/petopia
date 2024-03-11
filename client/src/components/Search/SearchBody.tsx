import { useSearchParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import { useEffect } from "react";
import { useSearchProducts } from "@/lib/Queries/SearchQueries";

const SearchBody = () => {
  const [searchParams] = useSearchParams();
  const getProductsQuery = useSearchProducts(searchParams.toString());

  useEffect(() => {
    getProductsQuery.refetch();
  }, [searchParams, getProductsQuery.refetch]);

  console.log(getProductsQuery.data?.pages[0]);

  return (
    <div className="grid grid-cols-2 col-span-6 gap-1 px-1 mb-16 md:grid-cols-4 md:gap-4">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};
export default SearchBody;
