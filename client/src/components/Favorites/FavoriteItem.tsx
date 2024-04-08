import { useDeleteFavorite } from "@/lib/Queries/FavoriteQueries";
import { FavoriteResponse } from "@/utils/Types & Interfaces";
import { Trash } from "lucide-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useToast } from "../ui/use-toast";
import { AxiosError } from "axios";

type Props = {
  favorite: FavoriteResponse;
  refetch: () => void;
};
const FavoriteItem = ({ favorite, refetch }: Props) => {
  const deleteMutation = useDeleteFavorite();
  const { toast } = useToast();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    deleteMutation.mutate(favorite.favoriteId);
  };

  useEffect(() => {
    if (deleteMutation.isSuccess) {
      deleteMutation.reset();
      toast({
        title: "Favorite deleted",
        description: "The favorite has been deleted successfully",
      });
      refetch();
    }
    if (deleteMutation.isError) {
      const error = (deleteMutation.failureReason as AxiosError).response
        ?.data as { error: string };

      toast({
        title: "Error",
        description: error.error,
      });

      deleteMutation.reset();
    }
  }, [deleteMutation.isSuccess, refetch, toast, deleteMutation.isError]);

  return (
    <Link
      to={`/product/${favorite.product.slug}`}
      className="container flex flex-col gap-5 px-4 py-8 border shadow-md cursor-pointer select-none lg:gap-0 border-zinc-300 rounded-xl font-inter dark:border-zinc-700"
    >
      <div className="flex items-center h-36">
        <img
          src={favorite.product.image}
          alt="product thumbnail"
          className="w-[80%] lg:w-[65%] max-h-full m-auto 2xl:w-[60%] rounded-xl object-scale-down "
        />
      </div>
      <div>
        <p className="mt-2 mb-2 text-sm line-clamp-2 dark:text-zinc-100 text-zinc-600">
          {favorite.product.name}
        </p>
      </div>
      <div className="flex items-center justify-between ">
        <span className="font-semibold text-zinc-700 dark:text-zinc-300">
          $ {favorite.product.price}
        </span>
        <button
          className="font-normal duration-200 hover:scale-125 text-zinc-400"
          onClick={handleDelete}
        >
          <Trash size={20} />
        </button>
      </div>
    </Link>
  );
};
export default FavoriteItem;
