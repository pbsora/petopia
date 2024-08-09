import { useAuthenticated } from "@/lib/Queries/UserQueries";
import { Navigate, Outlet } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const PrivateRoutes = () => {
  const {
    data: isAuthenticated,
    isLoading,
    isFetched,
  } = useAuthenticated();

  console.log(isAuthenticated + ` PrivateRoutes.tsx`);

  if (isLoading)
    return (
      <div className="h-[80vh] w-[80%] m-auto flex justify-center items-center">
        <PropagateLoader color="#15bde1" />
      </div>
    );

  return isFetched && isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoutes;
