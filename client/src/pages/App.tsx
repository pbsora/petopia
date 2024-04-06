import Footer from "@/components/Global/Footer";
import ToTopButton from "@/components/Global/ToTopButton";
import Navbar from "@/components/Navbar/Navbar";
import useUserContext from "@/hooks/Context/useUserContext";
import API from "@/utils/api";
import { useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const App = () => {
  const { setUserData } = useUserContext();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await API.get("/auth/current");
      return data;
    };

    getUser().then((data) => {
      setUserData(data);
    });
  }, [setUserData]);

  return (
    <>
      <Navbar />
      <Outlet />
      <ToTopButton />
      <Footer />
      <ScrollRestoration />
    </>
  );
};
export default App;
