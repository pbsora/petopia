import { Product } from "@/utils/Types & Interfaces";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};
const ProductItem = ({ product }: Props) => {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="container flex flex-col gap-4 px-4 py-8 border shadow-md cursor-pointer select-none border-zinc-300 rounded-xl font-inter dark:border-zinc-700"
    >
      <img
        src={product.image}
        alt="product thumbnail"
        className="w-3/4 2xl:w-[60%] m-auto dark:rounded-xl "
      />
      <div className="h-12">
        <p className="text-sm line-clamp-2 dark:text-zinc-100 text-zinc-600">
          {product.name}
        </p>
      </div>
      <span className="font-semibold text-zinc-700 dark:text-zinc-300">
        $ {product.price}
      </span>
    </Link>
  );
};
export default ProductItem;
