import { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import Sidebar from "./Sidebar";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart] = useLocalStorage("cart", []);
  const [cartCount, setCartCount] = useState([...cart].length);
  const location = useLocation();

  useEffect(() => {
    //Set cart count on location change
    setCartCount((prevCount) => {
      const cartLength = localStorage.getItem("cart");
      if (cartLength && +cartLength !== prevCount) {
        return cartLength ? [...JSON.parse(cartLength)].length : 0;
      }
      return prevCount;
    });
  }, [cart, location.pathname]);

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
