import { useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSidebar = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className="border-b shadow-md max-w-screen border-zinc-200 dark:border-zinc-500">
      <div className="hidden lg:block">
        <NavbarDesktop />
      </div>
      <div className="lg:hidden">
        <NavbarMobile setIsOpen={openSidebar} />
        <Sidebar isOpen={isOpen} setIsOpen={closeSidebar} />
      </div>
    </nav>
  );
};
export default Navbar;
