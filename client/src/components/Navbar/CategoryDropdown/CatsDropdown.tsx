import { Link } from "react-router-dom";
import { FaCat } from "react-icons/fa";

const CatsDropdown = () => {
  return (
    <div className="relative z-10 px-6 py-5 w-fit group">
      <span className="flex gap-2 text-lg font-semibold cursor-pointer select-none">
        <span className="text-2xl duration-200 scale-0 group-hover:scale-100">
          <FaCat />
        </span>
        Cats
      </span>
      <div className="absolute flex flex-col gap-3 px-3 py-3 text-lg duration-200 origin-top scale-0 -translate-x-10 translate-y-5 border dark:border-zinc-300 bg-background group-hover:scale-100 rounded-xl">
        <Link
          to={"/search?category=food&pet=cats"}
          className="w-32 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Wet & Dry Food
        </Link>
        <Link
          to={"/search?category=bowls&pet=cats"}
          className="w-32 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Bowls & Feeders
        </Link>
        <Link
          to={"/search?category=toys&pet=cats"}
          className="w-32 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Toys
        </Link>
        <Link
          to={"/search?category=beds&pet=cats"}
          className="w-32 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Beds
        </Link>
        <Link
          to={"/search?category=accessories&pet=cats"}
          className="w-32 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Accessories
        </Link>
        <Link
          to={"/search?&category=litter&pet=cats"}
          className="w-32 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Litter box
        </Link>
        <Link
          to={"/search?name=catnip&category=food&pet=cats"}
          className="w-32 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100"
        >
          Catnip & Grass
        </Link>
      </div>
    </div>
  );
};
export default CatsDropdown;
