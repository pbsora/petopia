import { PropagateLoader } from "react-spinners";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Product } from "@/utils/Types & Interfaces";
import ProductItem from "../Search/ProductItem";
import { useRelatedProducts } from "@/lib/Queries/ProductQueries";

type Props = {
  pet: string;
};
const RecommendedProducts = ({ pet }: Props) => {
  const products = useRelatedProducts(pet);

  if (products.isLoading)
    return (
      <div className="h-[30vh] col-span-6 flex justify-center items-center">
        <PropagateLoader color="#15bde1" />
      </div>
    );

  return (
    <div className="pl-4 mt-6 mb-10 ">
      <h1 className="mb-4 text-xl font-bold font-inter text-zinc-800 dark:text-zinc-200">
        Related Products
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
              className="basis-[50%] sm:basis-3/12 md:basis-4/12 lg:basis-3/12 xl:basis-[16%] 2xl:basis-[13.5%]"
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
export default RecommendedProducts;
