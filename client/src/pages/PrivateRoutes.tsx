import { UserContext } from "@/hooks/Context/UserContext";
import { AuthContext } from "@/utils/Types & Interfaces";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { user } = useContext(UserContext) as AuthContext;

  return user.username ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
