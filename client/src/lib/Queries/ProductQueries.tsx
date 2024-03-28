import { NewProduct } from "@/utils/Types & Interfaces";
import API from "@/utils/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useAddProduct = () => {
  return useMutation({
    mutationKey: ["addProduct"],
    mutationFn: async (product: NewProduct) => {
      const { data } = await API.post("/products", product);
      return data;
    },
  });
};

export const useRelatedProducts = (pet: string | number) => {
  return useQuery({
    queryKey: ["relatedProducts"],
    queryFn: async () => {
      const { data } = await API.get(`products?pet=${pet}&PageSize=15`);
      return data;
    },
  });
};
