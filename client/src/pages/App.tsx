import Footer from "@/components/Global/Footer";
import ToTopButton from "@/components/Global/ToTopButton";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ToTopButton />
      <Footer />
    </div>
  );
};
export default App;
