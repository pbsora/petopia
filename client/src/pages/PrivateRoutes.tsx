import { useAuthenticated } from "@/lib/Queries/UserQueries";
import { Navigate, Outlet } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const PrivateRoutes = () => {
  const isAuthenticated = useAuthenticated();

  if (isAuthenticated.isLoading)
    return (
      <div className="h-[40vh] w-[80%] m-auto flex justify-center items-center">
        <PropagateLoader color="#15bde1" />
      </div>
    );

  return isAuthenticated.isFetched && isAuthenticated.data ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoutes;
