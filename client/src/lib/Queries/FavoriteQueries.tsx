import API from "@/utils/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useNewFavorite = (productId: string, userId: string) => {
  return useMutation({
    mutationKey: ["newFavorite", productId],
    mutationFn: async () => {
      const { data } = await API.post(`favorite`, { productId, userId });
      return data;
    },
  });
};

export const useGetFavorites = () => {
  return useQuery({
    queryKey: ["favorites"],
    queryFn: async () => {
      const { data } = await API.get(`favorite`);
      return data;
    },
  });
};

export const useDeleteFavorite = () => {
  return useMutation({
    mutationKey: ["deleteFavorite"],
    mutationFn: async (favoriteId: string) => {
      const { data } = await API.delete(`favorite/${favoriteId}`);
      return data;
    },
  });
};
