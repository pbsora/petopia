import { NewProduct } from "@/utils/Types & Interfaces";
import API from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

export const useAddProduct = (product: NewProduct) => {
  return useMutation({
    mutationKey: ["addProduct"],
    mutationFn: async () => {
      const { data } = await API.post("/products", product);
      return data;
    },
  });
};
