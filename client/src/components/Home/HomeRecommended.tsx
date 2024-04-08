import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetHomeProducts } from "@/lib/Queries/SearchQueries";
import { Product } from "@/utils/Types & Interfaces";
import { PropagateLoader } from "react-spinners";
import ProductItem from "../Search/ProductItem";

const HomeRecommended = () => {
  const products = useGetHomeProducts();

  if (products.isLoading)
    return (
      <div className="h-[30vh] col-span-6 flex justify-center items-center">
        <PropagateLoader color="#15bde1" />
      </div>
    );

  return (
    <div className="pl-4 mt-6 mb-20 md:w-[80vw] m-auto">
      <h1 className="mb-4 text-xl font-bold font-inter text-zinc-800 dark:text-zinc-200">
        Latest Products
      </h1>
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
      >
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
        <CarouselContent>
          {products.data?.map((product: Product) => (
            <CarouselItem
              className="basis-[41%] sm:basis-3/12 md:basis-4/12 lg:basis-3/12 xl:basis-[16%] 2xl:basis-[13.5%]"
              key={product.productsId}
            >
              <ProductItem product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default HomeRecommended;
