import Footer from "@/components/Global/Footer";
import ToTopButton from "@/components/Global/ToTopButton";
import Navbar from "@/components/Navbar/Navbar";
import { UserContext } from "@/hooks/Context/UserContext";
import { AuthContext, AuthData } from "@/utils/Types & Interfaces";
import API from "@/utils/api";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState<AuthData | null>(null);

  const context: AuthContext = {
    user: user || { userId: "", username: "", email: "" },
    setUserData: (user: AuthData) => {
      setUser(user);
    },
  };

  useEffect(() => {
    const getUser = async () => {
      const { data } = await API.get("/auth/current");
      return data;
    };

    getUser().then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <UserContext.Provider value={context}>
      <Navbar />
      <Outlet />
      <ToTopButton />
      <Footer />
    </UserContext.Provider>
  );
};
export default App;
