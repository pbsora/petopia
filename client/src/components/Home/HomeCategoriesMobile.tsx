import { Cat, Fish, Bird, Dog, Rabbit, TreeDeciduous } from "lucide-react";
import { Link } from "react-router-dom";

const HomeCategoriesMobile = () => {
  return (
    <section className="w-[95%]  grid grid-cols-3 m-auto my-6 gap-x-2 gap-y-3 dark:text-zinc-300 lg:hidden">
      <Link
        to={"/search?pet=dogs"}
        className="relative flex py-4 pl-5 overflow-hidden shadow-sm bg-slate-100 rounded-xl border-zinc-400 dark:bg-slate-700"
      >
        <span className="text-xl font-madimi text-zinc-900 dark:text-zinc-300">
          Dogs
        </span>
        <Dog className="absolute text-6xl -bottom-2 -right-2" size={50} />
      </Link>
      <Link
        to={"/search?pet=cats"}
        className="relative flex py-4 pl-5 overflow-hidden shadow-sm bg-slate-100 rounded-xl border-zinc-400 dark:bg-slate-700"
      >
        <span className="text-xl font-madimi text-zinc-900 dark:text-zinc-300">
          Cats
        </span>
        <Cat className="absolute text-6xl -bottom-2 -right-2" size={50} />
      </Link>
      <Link
        to={"/search?pet=fish"}
        className="relative flex py-4 pl-5 overflow-hidden shadow-sm bg-slate-100 rounded-xl border-zinc-400 dark:bg-slate-700"
      >
        <span className="text-xl font-madimi text-zinc-900 dark:text-zinc-300">
          Fish
        </span>
        <Fish className="absolute text-6xl -bottom-2 -right-2" size={50} />
      </Link>
      <Link
        to={"/search?pet=birds"}
        className="relative flex py-4 pl-5 overflow-hidden shadow-sm bg-slate-100 rounded-xl border-zinc-400 dark:bg-slate-700"
      >
        <span className="text-xl font-madimi text-zinc-900 dark:text-zinc-300">
          Birds
        </span>
        <Bird className="absolute text-6xl -bottom-2 -right-2" size={50} />
      </Link>
      <Link
        to={"/search"}
        className="relative flex py-4 pl-5 overflow-hidden shadow-sm bg-slate-100 rounded-xl border-zinc-400 dark:bg-slate-700"
      >
        <span className="text-xl font-madimi text-zinc-900 dark:text-zinc-300">
          Other
        </span>
        <Rabbit className="absolute text-6xl -bottom-2 -right-2" size={50} />
      </Link>
      <Link
        to={"/search"}
        className="relative flex py-4 pl-5 overflow-hidden shadow-sm bg-slate-100 rounded-xl border-zinc-400 dark:bg-slate-700"
      >
        <span className="text-xl font-madimi text-zinc-900 dark:text-zinc-300">
          Garden
        </span>
        <TreeDeciduous
          className="absolute text-6xl -bottom-0 -right-2"
          size={50}
        />
      </Link>
    </section>
  );
};
export default HomeCategoriesMobile;
