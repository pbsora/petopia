import { Link } from "react-router-dom";
import { LuFish } from "react-icons/lu";

const FishDropdown = () => {
  return (
    <div className="relative z-10 px-6 py-5 w-fit group">
      <span className="flex gap-2 text-lg font-semibold cursor-pointer select-none">
        <span className="text-2xl duration-200 scale-0 group-hover:scale-100">
          <LuFish />
        </span>
        Fish
      </span>
      <div className="absolute flex flex-col gap-3 px-3 py-3 text-lg duration-200 origin-top scale-0 -translate-x-10 translate-y-5 border dark:border-zinc-300 bg-background group-hover:scale-100 rounded-xl">
        <Link
          to={"/search?category=food&pet=fish"}
          className="w-40 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Food
        </Link>
        <Link
          to={"/search?category=feeder&pet=fish"}
          className="w-40 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Feeders
        </Link>
        <Link
          to={"/search?category=tanks&pet=fish"}
          className="w-40 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Tanks & Aquariums
        </Link>
        <Link
          to={"/search?category=filters&pet=fish"}
          className="w-40 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Filters & Pumps
        </Link>
        <Link
          to={"/search?category=accessories&pet=fish"}
          className="w-40 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Other
        </Link>
      </div>
    </div>
  );
};
export default FishDropdown;
