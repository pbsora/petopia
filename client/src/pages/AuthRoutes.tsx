import { useAuthenticated } from "@/lib/Queries/UserQueries";
import { Navigate, Outlet } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const AuthRoutes = () => {
  const isAuthenticated = useAuthenticated();

  if (isAuthenticated.isLoading)
    return (
      <div className="h-[80vh] w-[80%] m-auto flex justify-center items-center">
        <PropagateLoader color="#15bde1" />
      </div>
    );

  return isAuthenticated.isFetched && isAuthenticated.data ? (
    <Navigate to="/profile" />
  ) : (
    <Outlet />
  );
};
export default AuthRoutes;
