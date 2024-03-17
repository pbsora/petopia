import { FaRegUser, FaSun, FaRegMoon } from "react-icons/fa";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import CategoryDropdown from "./CategoryDropdown";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";

const NavbarDesktop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>(searchParams.get("name") || "");

  const { setTheme } = useTheme();
  const currTheme = localStorage.getItem("ui-theme");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (location.pathname !== "/search") {
      navigate(`/search?name=${search}`);
    } else {
      setSearchParams({ name: search || "" });
    }
  };

  return (
    <>
      <div className="justify-between hidden px-24 py-4 text-2xl md:flex text-zinc-600 dark:text-white">
        <Link to={"/"} className="flex items-center">
          PETZ
        </Link>
        <div className="flex items-center justify-center flex-1 gap-3">
          <form className="relative w-[70%] " onSubmit={handleSearch}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 text-2xl  pointer-events-none ">
              <CiSearch />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-400 focus:outline-none text-gray-900 text-base rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-2.5 py-4  dark:bg-gray-700 dark:border-zind-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="What does your pet need?"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </form>
        </div>
        <div className="flex items-center gap-5">
          <div>
            {currTheme === "dark" ? (
              <FaSun onClick={() => setTheme("light")} />
            ) : (
              <FaRegMoon onClick={() => setTheme("dark")} />
            )}
          </div>
          <Link
            to={
              location.pathname === "/"
                ? "/login"
                : `/login?next=${location.pathname.slice(1)}`
            }
            className="duration-200 cursor-pointer hover:scale-125"
          >
            <FaRegUser />
          </Link>
          <span className="duration-200 cursor-pointer hover:scale-125">
            <CiHeart />
          </span>
          <span className="duration-200 cursor-pointer hover:scale-125">
            <IoBagOutline />
          </span>
        </div>
      </div>
      <div className="pl-32 m-auto lg:pl-40 ">
        <CategoryDropdown />
      </div>
    </>
  );
};
export default NavbarDesktop;
