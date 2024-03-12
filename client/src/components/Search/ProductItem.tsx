import { Product } from "@/utils/Types & Interfaces";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};
const ProductItem = ({ product }: Props) => {
  return (
    <Link
      to={`/product/${product.slug}`}
      key={product.productsId}
      className="flex flex-col gap-4 px-4 py-8 border cursor-pointer select-none border-zinc-300 rounded-xl font-inter dark:border-zinc-600"
    >
      <img
        src={product.image}
        alt="product thumbnail"
        className="w-3/4 m-auto"
      />
      <p className="line-clamp-2 dark:text-zinc-100">{product.name}</p>
      <span className="font-semibold text-zinc-900 dark:text-zinc-300">
        $ {product.price}
      </span>
    </Link>
  );
};
export default ProductItem;
