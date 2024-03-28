import { Product } from "@/utils/Types & Interfaces";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";

type Props = {
  product: Product;
};

enum Color {
  Dogs = "bg-pink-500",
  Cats = "bg-blue-500",
  Birds = "bg-yellow-500",
  Fish = "bg-green-500",
}
const ProductItem = ({ product }: Props) => {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="container flex flex-col gap-4 px-4 py-4 border shadow-md cursor-pointer select-none border-zinc-300 rounded-xl font-inter dark:border-zinc-700"
    >
      <div className="flex items-center h-36">
        <img
          src={product.image}
          alt="product thumbnail"
          className="w-[65%] max-h-full m-auto 2xl:w-auto rounded-xl object-scale-down "
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
        >{`${product.pet.name}`}</Badge>
      </div>
      <span className="font-semibold text-zinc-700 dark:text-zinc-300">
        $ {product.price}
      </span>
    </Link>
  );
};
export default ProductItem;
