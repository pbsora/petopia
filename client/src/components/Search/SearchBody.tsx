import { useSearchParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import { Fragment, useEffect } from "react";
import { useSearchProducts } from "@/lib/Queries/SearchQueries";
import { ProductResponse } from "@/utils/Types & Interfaces";
import { PropagateLoader } from "react-spinners";
import FetchMore from "./FetchMore";
import pug from "@/assets/pug.png";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const SearchBody = () => {
  const [searchParams] = useSearchParams();
  const getProductsQuery = useSearchProducts(searchParams.toString());
  const [animate] = useAutoAnimate();

  useEffect(() => {
    getProductsQuery.refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, getProductsQuery.refetch]);

  const nextPage = {
    fetchMore: () => {
      if (getProductsQuery.hasNextPage) getProductsQuery.fetchNextPage();
      else console.log("No more pages");
    },
    hasNextPage: getProductsQuery.hasNextPage,
  };

  const products = getProductsQuery.data?.pages as ProductResponse[];

  if (getProductsQuery.isError)
    return (
      <div className="h-[60vh] col-span-6  justify-center items-center flex flex-col gap-5 font-inter select-none">
        <img src={pug} alt="pug icon" className="h-36" />
        <h2 className="text-2xl font-semibold">
          No products match this search!
        </h2>
        <h3 className="text-xl">Please try changing the product name.</h3>
      </div>
    );

  if (!getProductsQuery.data)
    return (
      <div className="h-[30vh] col-span-6 flex justify-center items-center">
        <PropagateLoader color="#15bde1" />
      </div>
    );

  return (
    <>
      <div
        className="grid grid-cols-2 col-span-6 px-1 gap-x-2 gap-y-3 md:grid-cols-4 md:gap-4"
        ref={animate}
      >
        <h1 className="col-span-2 pl-2 mb-6 text-2xl font-semibold text-zinc-500 dark:text-zinc-300 lg:col-span-4">
          {products[0].pagination.TotalItemCount === 1
            ? `1 product found for this search`
            : `${products[0].pagination.TotalItemCount} products found for this search`}
        </h1>
        {products
          ?.flatMap((data) => data.data)
          .map((product) => (
            <Fragment key={product.productsId}>
              <ProductItem product={product} />
            </Fragment>
          ))}
        <div className={`col-span-2 mt-2 text-center md:col-span-4 `}>
          <FetchMore nextPage={nextPage} />
        </div>
      </div>
    </>
  );
};
export default SearchBody;
