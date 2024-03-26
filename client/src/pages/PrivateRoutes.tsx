import { useAuthenticated } from "@/lib/Queries/UserQueries";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isAuthenticated = useAuthenticated();

  if (isAuthenticated.isLoading) return null;

  return isAuthenticated.isFetched && isAuthenticated.data ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoutes;
