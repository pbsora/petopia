import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Navbar/Navbar";
import notFound from "@/assets/notFound.png";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="h-[80vh] font-inter flex flex-col items-center justify-center gap-8">
        <img src={notFound} alt="not found" className="w-40" />
        <h1 className="text-2xl text-center lg:text-4xl">
          Something went wrong.
        </h1>
      </div>
      <Footer />
    </>
  );
};
export default ErrorPage;
