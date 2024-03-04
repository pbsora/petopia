import { IoMdMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarMobile = ({ setIsOpen }: Props) => {
  return (
    <>
      <div className="flex justify-between px-4 py-4 text-3xl text-zinc-600">
        <div className="flex items-center gap-3">
          <IoMdMenu onClick={() => setIsOpen(true)} />
          <FaRegUser />
        </div>
        <div>PETZ</div>
        <div className="flex items-center gap-3">
          <CiHeart />
          <IoBagOutline />
        </div>
      </div>
      <div className=" w-[85%] m-auto">
        <div className="relative mb-6 ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 text-xl pointer-events-none">
            <CiSearch />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="What does your pet need?"
          />
        </div>
      </div>
    </>
  );
};
export default NavbarMobile;
