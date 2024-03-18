import { Link } from "react-router-dom";
import { LuDog } from "react-icons/lu";

const DogsDropdown = () => {
  return (
    <div className="relative z-10 px-6 py-5 w-fit group">
      <span className="flex items-center gap-2 text-lg font-semibold cursor-pointer select-none">
        <span className="text-2xl duration-200 scale-0 group-hover:scale-100">
          <LuDog />
        </span>
        Dogs
      </span>
      <div className="absolute flex flex-col gap-3 px-3 py-3 text-lg duration-200 origin-top scale-0 -translate-x-8 translate-y-5 border dark:border-zinc-300 bg-background group-hover:scale-100 rounded-xl">
        <Link
          to={"/search?&category=food&pet=dogs"}
          className="w-40 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Dry & Wet Food
        </Link>
        <Link
          to={"/search?&category=bowls&pet=dogs"}
          className="w-40 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Bowls & Feeders
        </Link>
        <Link
          to={"/search?&category=toys&pet=dogs"}
          className="w-40 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Toys
        </Link>
        <Link
          to={"/search?&category=beds&pet=dogs"}
          className="w-40 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Beds
        </Link>
        <Link
          to={"/search?&category=accessories&pet=dogs"}
          className="w-40 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Accessories
        </Link>
      </div>
    </div>
  );
};
export default DogsDropdown;
