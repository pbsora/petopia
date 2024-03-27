import { useIsAdmin } from "@/lib/Queries/UserQueries";
import { Navigate, Outlet } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const AdminRoutes = () => {
  const isAdmin = useIsAdmin();

  if (isAdmin.isLoading)
    return (
      <div className="h-[40vh] w-[80%] m-auto flex justify-center items-center">
        <PropagateLoader color="#15bde1" />
      </div>
    );

  return isAdmin.isFetched && isAdmin.data ? <Outlet /> : <Navigate to="/" />;
};
export default AdminRoutes;
