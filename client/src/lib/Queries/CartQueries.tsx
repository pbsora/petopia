import { CheckoutItem } from "@/utils/Types & Interfaces";
import API from "@/utils/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCheckout = (items: CheckoutItem[], userId: string) => {
  return useMutation({
    mutationKey: ["checkout", items],
    mutationFn: async () => {
      console.log(userId);
      return await API.post(`/order/${userId}`, items);
    },
  });
};

export const useGetOrders = (userId: string) => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return await API.get(`/order/${userId}`);
    },
  });
};
