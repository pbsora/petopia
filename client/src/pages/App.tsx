import Footer from "@/components/Global/Footer";
import ToTopButton from "@/components/Global/ToTopButton";
import Navbar from "@/components/Navbar/Navbar";
import { UserContext } from "@/hooks/Context/UserContext";
import { AuthContext, AuthData } from "@/utils/Types & Interfaces";
import { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

const App = () => {
  const auth = useLoaderData() as AuthData | null;
  const [user, setUser] = useState<AuthData | null>(auth);

  const context: AuthContext = {
    user: user || { userId: "", username: "", email: "" },
    setUserData: (user: AuthData) => {
      setUser(user);
    },
  };

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
