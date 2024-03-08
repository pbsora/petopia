import { IoMdClose } from "react-icons/io";
import { FaRegUser, FaCat, FaSun, FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuDog, LuFish, LuBird } from "react-icons/lu";
import { useTheme } from "@/components/theme-provider";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  const { setTheme } = useTheme();
  const currTheme = localStorage.getItem("ui-theme");
  return (
    <div
      className={`absolute z-50 top-0 w-3/4 h-screen bg-background border rounded-r-3xl border-zinc-400 ease-in-out duration-200 overflow-hidden ${
        isOpen ? "-translate-x-[0rem]" : "-translate-x-[50rem]"
      }`}
    >
      <div className="flex justify-between px-6 py-6 text-2xl ">
        <h2 className="flex items-center gap-2 font-madimi">
          <FaRegUser />
          Hello, Sora
        </h2>
        <div className="flex items-center">
          <IoMdClose onClick={() => setIsOpen(false)} />
        </div>
      </div>
      <button className="flex items-center gap-3 py-3 pl-3 text-xl">
        {currTheme === "dark" ? (
          <FaSun onClick={() => setTheme("light")} />
        ) : (
          <FaRegMoon onClick={() => setTheme("dark")} />
        )}
        {currTheme === "dark" ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>
      <div className="max-h-[90%] overflow-y-scroll">
        <section className="flex flex-col gap-1">
          <h1 className="flex items-center w-full gap-2 p-2 text-2xl bg-zinc-200 text-zinc-800 font-madimi">
            <LuDog /> Dogs
          </h1>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Dry & Wet Food
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Bowls & Feeders
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Toys
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Beds
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Accessories
          </Link>
        </section>
        <section className="flex flex-col gap-1">
          <h1 className="flex items-center w-full gap-2 p-2 text-2xl bg-zinc-200 text-zinc-800 font-madimi">
            <FaCat /> Cats
          </h1>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Dry & Wet Food
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Bowls & Feeders
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Toys
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Beds
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Accessories
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Litter box
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Catnip & Grass
          </Link>
        </section>
        <section className="flex flex-col gap-1">
          <h1 className="flex items-center w-full gap-2 p-2 text-2xl bg-zinc-200 text-zinc-800 font-madimi">
            <LuFish />
            Fish
          </h1>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Food
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Feeders
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Tanks & Aquariums
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Filters & Pumps
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Other
          </Link>
        </section>
        <section className="flex flex-col gap-1">
          <h1 className="flex items-center w-full gap-2 p-2 text-2xl bg-zinc-200 text-zinc-800 font-madimi">
            <LuBird />
            Birds
          </h1>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Food
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Litter & Nesting
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Grooming
          </Link>
          <Link to={"/dogs"} className="px-2 py-2 text-xl hover:text-sky-300">
            Cages
          </Link>
        </section>
      </div>
    </div>
  );
};
export default Sidebar;
