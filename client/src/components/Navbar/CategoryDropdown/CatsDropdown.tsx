import { Link } from "react-router-dom";
import { FaCat } from "react-icons/fa";

const CatsDropdown = () => {
  return (
    <div className="relative z-10 px-6 py-5 w-fit group">
      <Link
        to={"/dogs"}
        className="flex gap-2 text-lg font-semibold cursor-pointer select-none"
      >
        <span className="text-2xl duration-200 scale-0 group-hover:scale-100">
          <FaCat />
        </span>
        Cats
      </Link>
      <div className="absolute flex flex-col gap-3 px-3 py-3 text-lg duration-200 origin-top scale-0 -translate-x-10 translate-y-1 border dark:border-zinc-300 bg-background group-hover:scale-100 rounded-xl">
        <section className="w-40 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100">
          <Link to={"/dogs"} className="">
            Wet & Dry Food
          </Link>
        </section>
        <section className="w-32 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100">
          <Link to={"/dogs"} className="">
            Bowls & Feeders
          </Link>
        </section>
        <section className="w-32 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100">
          <Link to={"/dogs"} className="">
            Toys
          </Link>
        </section>
        <section className="w-32 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100">
          <Link to={"/dogs"} className="">
            Beds
          </Link>
        </section>
        <section className="w-32 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100">
          <Link to={"/dogs"} className="">
            Accessories
          </Link>
        </section>
        <section className="w-32 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100">
          <Link to={"/dogs"} className="">
            Litter box
          </Link>
        </section>
        <section className="w-32 p-1 pl-2 duration-200 cursor-pointer rounded-xl hover:text-sky-500 hover:bg-sky-100">
          <Link to={"/dogs"} className="">
            Catnip & Grass
          </Link>
        </section>
      </div>
    </div>
  );
};
export default CatsDropdown;
