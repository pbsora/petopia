import { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import Sidebar from "./Sidebar";
import useLocalStorage from "@/hooks/useLocalStorage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart] = useLocalStorage("cart", []);
  const [cartCount, setCartCount] = useState([...cart].length);

  useEffect(() => {
    //Set cart count
    setCartCount(() => {
      const cartLenght = localStorage.getItem("cart");
      return cartLenght ? [...JSON.parse(cartLenght)].length : 0;
    });
  }, [cart]);

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
        <NavbarDesktop cartCount={cartCount} />
      </div>
      <div className="lg:hidden">
        <NavbarMobile setIsOpen={openSidebar} cartCount={cartCount} />
        <Sidebar isOpen={isOpen} setIsOpen={closeSidebar} />
      </div>
    </nav>
  );
};
export default Navbar;
