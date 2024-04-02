import { IoMdClose } from "react-icons/io";
import { FaRegUser, FaCat, FaSun, FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuDog, LuFish, LuBird } from "react-icons/lu";
import { useTheme } from "@/components/theme-provider";
import { useContext } from "react";
import { UserContext } from "@/hooks/Context/UserContext";
import { AuthContext } from "@/utils/Types & Interfaces";
import { Capitalize } from "@/utils/Capitalize";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  const { user } = (useContext(UserContext) as AuthContext) || {};
  const { setTheme } = useTheme();
  const currTheme = localStorage.getItem("ui-theme");
  return (
    <>
      <div
        className={`${
          isOpen ? "fixed" : "hidden"
        }  top-0 z-50 w-screen h-screen pointer-events-none bg-zinc-900/60`}
        style={{ pointerEvents: "auto" }}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`absolute z-50 top-0 w-3/4 h-screen bg-background border rounded-r-3xl border-zinc-400 dark:border-zinc-700 ease-in-out duration-200 overflow-hidden ${
          isOpen ? "-translate-x-[0rem]" : "-translate-x-[50rem]"
        }`}
      >
        <div className="flex justify-between px-6 py-6 text-2xl ">
          <h2 className="flex items-center gap-2 font-madimi">
            <FaRegUser />
            {user && user.username
              ? `Hello, ${Capitalize(user.username)}`
              : "Hello, Guest"}
          </h2>
          <div className="flex items-center">
            <IoMdClose onClick={() => setIsOpen(false)} />
          </div>
        </div>
        <button
          className="flex items-center gap-3 py-3 pl-3 text-xl"
          onClick={
            currTheme === "dark"
              ? () => setTheme("light")
              : () => setTheme("dark")
          }
        >
          {currTheme === "dark" ? (
            <FaSun onClick={() => setTheme("light")} />
          ) : (
            <FaRegMoon onClick={() => setTheme("dark")} />
          )}
          {currTheme === "dark" ? "Toggle Light Mode" : "Toggle Dark Mode"}
        </button>
        <div className="max-h-[90%] overflow-y-scroll ">
          <section className="flex flex-col gap-1">
            <h1 className="flex items-center w-full gap-2 p-2 text-2xl bg-zinc-200 text-zinc-800 font-madimi dark:text-zinc-200 dark:bg-slate-700">
              <LuDog /> Dogs
            </h1>
            <Link
              to={"/search?&category=food&pet=dogs"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Dry & Wet Food
            </Link>
            <Link
              to={"/search?&category=bowls&pet=dogs"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Bowls & Feeders
            </Link>
            <Link
              to={"/search?&category=toys&pet=dogs"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Toys
            </Link>
            <Link
              to={"/search?&category=beds&pet=dogs"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Beds
            </Link>
            <Link
              to={"/search?&category=accessories&pet=dogs"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Accessories
            </Link>
          </section>
          <section className="flex flex-col gap-1">
            <h1 className="flex items-center w-full gap-2 p-2 text-2xl bg-zinc-200 text-zinc-800 font-madimi dark:text-zinc-200 dark:bg-slate-700">
              <FaCat /> Cats
            </h1>
            <Link
              to={"/search?category=food&pet=cats"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Dry & Wet Food
            </Link>
            <Link
              to={"/search?category=bowls&pet=cats"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Bowls & Feeders
            </Link>
            <Link
              to={"/search?category=toys&pet=cats"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Toys
            </Link>
            <Link
              to={"/search?category=beds&pet=cats"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Beds
            </Link>
            <Link
              to={"/search?category=accessories&pet=cats"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Accessories
            </Link>
            <Link
              to={"/search?&category=litter&pet=cats"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Litter box
            </Link>
            <Link
              to={"/search?name=catnip&category=food&pet=cats"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Catnip & Grass
            </Link>
          </section>
          <section className="flex flex-col gap-1">
            <h1 className="flex items-center w-full gap-2 p-2 text-2xl bg-zinc-200 text-zinc-800 font-madimi dark:text-zinc-200 dark:bg-slate-700">
              <LuFish />
              Fish
            </h1>
            <Link
              to={"/search?category=food&pet=fish"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Food
            </Link>
            <Link
              to={"/search?category=feeder&pet=fish"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Feeders
            </Link>
            <Link
              to={"/search?category=tanks&pet=fish"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Tanks & Aquariums
            </Link>
            <Link
              to={"/search?category=filters&pet=fish"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Filters & Pumps
            </Link>
            <Link
              to={"/search?category=accessories&pet=fish"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Other
            </Link>
          </section>
          <section className="flex flex-col gap-1">
            <h1 className="flex items-center w-full gap-2 p-2 text-2xl bg-zinc-200 text-zinc-800 font-madimi dark:text-zinc-200 dark:bg-slate-700">
              <LuBird />
              Birds
            </h1>
            <Link
              to={"/search?category=food&pet=birds"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Food
            </Link>
            <Link
              to={"/search?category=litter&pet=birds"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Litter & Nesting
            </Link>
            <Link
              to={"/search?category=grooming&pet=birds"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Grooming
            </Link>
            <Link
              to={"/search?name=cage&category=accessories&pet=birds"}
              className="px-2 py-2 text-xl hover:text-sky-300"
              onClick={() => setIsOpen(false)}
            >
              Cages
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
