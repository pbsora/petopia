import FavoriteItem from "@/components/Favorites/FavoriteItem";
import { useGetFavorites } from "@/lib/Queries/FavoriteQueries";
import { FavoriteResponse } from "@/utils/Types & Interfaces";
import { Fragment } from "react/jsx-runtime";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { PropagateLoader } from "react-spinners";
import pug from "@/assets/pug.png";

const Favorites = () => {
  const favoriteQuery = useGetFavorites();
  const favorites = favoriteQuery.data as FavoriteResponse[];

  const [parent] = useAutoAnimate();

  if (favoriteQuery.isError)
    return (
      <div className="h-[60vh] col-span-4  w-[95%] lg:w-full justify-center items-center flex flex-col gap-5 font-inter select-none">
        <img src={pug} alt="pug icon" className="h-36" />
        <h2 className="text-2xl font-semibold">No Favorites found!</h2>
      </div>
    );

  if (!favoriteQuery.data)
    return (
      <div className="flex items-center justify-center col-span-4 h-[60vh] w-[95%] lg:w-full">
        <PropagateLoader color="#15bde1" />
      </div>
    );

  return (
    <div className="w-[95%] lg:w-full grid grid-cols-2 lg:flex flex-col">
      <h1 className="col-span-2 mb-3 ml-3 text-2xl font-bold lg:col-span-4 text-zinc-600 dark:text-zinc-200">
        Your favorites
      </h1>
      <div
        className="grid grid-cols-2 col-span-4 px-1 mb-16 gap-x-2 gap-y-3 md:grid-cols-4 md:gap-4"
        ref={parent}
      >
        {favorites?.map((favorite) => (
          <Fragment key={favorite.favoriteId}>
            <FavoriteItem
              favorite={favorite}
              refetch={() => favoriteQuery.refetch()}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
