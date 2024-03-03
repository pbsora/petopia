import { FaRegUser } from "react-icons/fa";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import CategoryDropdown from "./CategoryDropdown";

const NavbarDesktop = () => {
  return (
    <>
      <div className="justify-between hidden px-24 py-4 text-2xl md:flex text-zinc-600">
        <div className="flex items-center">PETZ</div>
        <div className="flex items-center justify-center flex-1 gap-3">
          <div className="relative w-[70%]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 text-xl pointer-events-none">
              <CiSearch />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 focus:outline-none text-gray-900 text-base rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 py-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="What does your pet need?"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="duration-200 cursor-pointer hover:scale-125">
            <FaRegUser />
          </span>
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
