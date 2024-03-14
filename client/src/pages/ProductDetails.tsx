import { Product } from "@/utils/Types & Interfaces";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData() as Product;

  console.log(product);

  return <div>ProductPage</div>;
};
export default ProductDetails;
