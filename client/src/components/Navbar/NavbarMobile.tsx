import { IoMdMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "@/utils/Types & Interfaces";
import { UserContext } from "@/hooks/Context/UserContext";

type Props = {
  setIsOpen: () => void;
  cartCount: number;
};

const NavbarMobile = ({ setIsOpen, cartCount }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>(searchParams.get("name") || "");

  const { user } = useContext(UserContext) as AuthContext;

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
      <div className="flex justify-between px-4 py-4 text-3xl text-zinc-600 dark:text-zinc-200">
        <div className="flex items-center gap-5">
          <span>
            <IoMdMenu onClick={setIsOpen} />
          </span>
          <Link
            to={
              user.username
                ? "/profile/orders"
                : location.pathname === "/"
                ? "/login"
                : `/login?next=${location.pathname.slice(1)}`
            }
            className="text-2xl"
          >
            <FaRegUser />
          </Link>
        </div>
        <Link to={"/"}>PETZ</Link>
        <div className="flex items-center gap-3">
          <Link to={"/profile/favorites"}>
            <CiHeart />
          </Link>
          <Link to={"/cart"}>
            <IoBagOutline />
            <span
              className={`${
                cartCount == 0 ? "hidden" : "flex"
              }  absolute items-center justify-center w-1 h-1 p-3 text-base translate-x-3 -translate-y-3 rounded-full h- bg-sky-600 text-zinc-200`}
            >
              {cartCount}
            </span>
          </Link>
        </div>
      </div>

      <form className="relative mb-6 w-[85%] m-auto" onSubmit={handleSearch}>
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 text-xl pointer-events-none">
          <CiSearch />
        </div>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="What does your pet need?"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </>
  );
};
export default NavbarMobile;
