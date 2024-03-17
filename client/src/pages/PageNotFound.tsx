import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Navbar/Navbar";
import notFound from "@/assets/notFound.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <div className="h-[80vh] font-inter flex flex-col items-center justify-center gap-8">
        <img src={notFound} alt="not found" className="w-40" />
        <h1 className="text-4xl">
          They ate this page while you weren't looking
        </h1>
        <Link to="/" className="text-3xl border-b border-b-purple-500">
          Click here to go back to the home page
        </Link>
      </div>
      <Footer />
    </>
  );
};
export default PageNotFound;
