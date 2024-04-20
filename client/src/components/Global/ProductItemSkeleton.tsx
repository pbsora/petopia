import { useLocation } from "react-router-dom";

const ProductItemSkeleton = () => {
  const path = useLocation().pathname;

  return (
    <div
      className={`container flex flex-col gap-2 px-4 ${
        path === "/search" ? "h-64" : "h-60"
      } py-2 border shadow-md cursor-pointer  select-none border-zinc-300 rounded-xl font-inter dark:border-zinc-700`}
    >
      <div className="flex items-center h-4/6 bg-slate-200 rounded-lg animate-pulse"></div>
      <div className="flex flex-col h-1/6 bg-slate-200 rounded-lg animate-pulse"></div>
      <div className="font-semibold h-1/6 text-zinc-700 dark:text-zinc-200 bg-slate-300 rounded-lg animate-pulse w-2/4"></div>
    </div>
  );
};
export default ProductItemSkeleton;
