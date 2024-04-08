import { Product } from "@/utils/Types & Interfaces";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Capitalize } from "@/utils/Capitalize";

type Props = {
  product: Product;
};

enum Color {
  dogs = "bg-pink-600",
  cats = "bg-blue-500",
  birds = "bg-yellow-600",
  fish = "bg-green-600",
}
const ProductItem = ({ product }: Props) => {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="container flex flex-col gap-2 px-4 py-2 border shadow-md cursor-pointer select-none border-zinc-300 rounded-xl font-inter dark:border-zinc-700"
    >
      <div className="flex items-center h-36">
        <img
          src={product.image}
          alt="product thumbnail"
          className="w-[80%] lg:w-[65%] max-h-full m-auto 2xl:w-[60%] rounded-xl object-scale-down "
        />
      </div>
      <div className="flex flex-col h-20">
        <p className="mb-2 text-sm line-clamp-2 dark:text-zinc-100 text-zinc-600">
          {product.name}
        </p>
        <Badge
          className={`${
            Color[product.pet.name as keyof typeof Color]
          } text-zinc-200 w-fit px-4`}
        >{`${Capitalize(product.pet.name)}`}</Badge>
      </div>
      <span className="font-semibold text-zinc-700 dark:text-zinc-300">
        $ {product.price}
      </span>
    </Link>
  );
};
export default ProductItem;
