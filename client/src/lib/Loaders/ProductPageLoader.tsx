import API from "@/utils/api";
import { LoaderFunction } from "react-router-dom";

export const productLoader: LoaderFunction = async ({ params }) => {
  const { data } = await API.get(`products/slug/${params.slug}`);
  return data;
};
