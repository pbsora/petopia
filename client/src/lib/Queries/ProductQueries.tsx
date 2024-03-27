import { NewProduct } from "@/utils/Types & Interfaces";
import API from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

export const useAddProduct = () => {
  return useMutation({
    mutationKey: ["addProduct"],
    mutationFn: async (product: NewProduct) => {
      const { data } = await API.post("/products", product);
      return data;
    },
  });
};
