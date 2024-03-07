import ToTopButton from "@/components/Global/ToTopButton";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ToTopButton />
    </div>
  );
};
export default App;
