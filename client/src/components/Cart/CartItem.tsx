import { OrderItem } from "@/utils/Types & Interfaces";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  product: OrderItem;
};
const CartItem = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-6 py-8 border xl:shadow-sm lg:flex-row lg:justify-between lg:py-2 border-zinc-300 rounded-xl ">
      <div className="flex justify-between flex-1 gap-2 px-4 lg:justify-start lg:pt-3 lg:items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-20 ml-3 dark:rounded-xl lg:w-28 rounded-xl"
        />
        <Link
          to={`/product/${product.slug}`}
          className="w-2/4 lg:w-[60%] text-sm font-semibold line-clamp-3 text-zinc-800 dark:text-zinc-200"
        >
          {product.name}
        </Link>
        <div className="text-zinc-700 dark:text-zinc-200 lg:hidden">
          <Trash2 size={25} />
        </div>
      </div>
      <div className="flex items-center px-3 lg:gap-4">
        <span className="flex-1 mr-4 text-sm font-semibold text-right lg:m-0">
          $ {product.price}
        </span>
        <div className="flex border rounded-lg w-fit border-zinc-300">
          <button className="flex items-center p-1 text-blue-600 border">
            <Minus size={25} />
          </button>
          <span className="w-12 px-4 py-1 text-base text-center border">
            {product.quantity}
          </span>
          <button className="flex items-center p-1 text-blue-600 border">
            <Plus size={25} />
          </button>
        </div>
        <div>
          <span className="hidden text-sm font-semibold text-zinc-700 dark:text-zinc-200 lg:block">
            $ {+product.price * product.quantity}
          </span>
        </div>
        <button className="hidden mr-2 text-sm text-zinc-700 dark:text-zinc-200 lg:block">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
