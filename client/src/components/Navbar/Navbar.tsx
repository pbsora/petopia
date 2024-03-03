import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <nav className="w-full border-b shadow-md border-zinc-200">
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>
      <div className="md:hidden">
        <NavbarMobile />
        <Sidebar />
      </div>
    </nav>
  );
};
export default Navbar;
