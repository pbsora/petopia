import API from "@/utils/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ProductResponse } from "@/utils/Types & Interfaces";

export const useSearchProducts = (searchParams: string) => {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["searchProducts", searchParams],
    getNextPageParam: (lastPage: {
      pagination: { PageCount: number; PageNumber: number };
    }) => {
      return lastPage.pagination.PageNumber < lastPage.pagination.PageCount
        ? lastPage.pagination.PageNumber + 1
        : undefined;
    },
    queryFn: async ({ pageParam = 1 }) => {
      const { data, headers } = await API.get(
        `products?${searchParams}&PageNumber=${pageParam}&PageSize=4`
      );

      return {
        data,
        pagination: JSON.parse(headers["x-pagination"]),
      } as ProductResponse;
    },
  });
};
