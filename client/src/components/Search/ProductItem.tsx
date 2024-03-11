import { Product } from "@/utils/Types & Interfaces";

type Props = {
  product: Product;
};
const ProductItem = (/* props: Props */) => {
  return (
    <div className="flex flex-col gap-2 px-2 py-4 border cursor-pointer select-none border-zinc-300 rounded-xl font-inter dark:border-zinc-600">
      <img
        src="https://images.petz.com.br/fotos/1658419164771_mini.jpg"
        alt="product thumbnail"
        className="w-3/4 m-auto"
      />
      <p className="line-clamp-2 dark:text-zinc-100">
        Dr. Elsey's Precious Cat Ultra Clumping Multi-Cat Clay Cat Litter -
        Unscented, Low Tracking
      </p>
      <span className="font-semibold text-zinc-900 dark:text-zinc-300">
        $ 149,69
      </span>
    </div>
  );
};
export default ProductItem;
