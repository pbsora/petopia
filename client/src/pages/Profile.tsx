import useUserContext from "@/hooks/Context/useUserContext";
import { useLogout } from "@/lib/Queries/UserQueries";
import { Capitalize } from "@/utils/Capitalize";
import { Heart, PackageOpen, CircleUserRound } from "lucide-react";
import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, setUserData } = useUserContext();
  const location = useLocation();
  const navigate = useNavigate();

  const logoutMutation = useLogout();

  const handleLogout = async () => {
    logoutMutation.mutate();
    setUserData({
      userId: "",
      username: "",
      email: "",
    });
  };

  useEffect(() => {
    if (logoutMutation.isSuccess) {
      navigate("/");
    }
  }, [logoutMutation.isSuccess, navigate]);

  return (
    <div className="w-full lg:w-[80%] m-auto min-h-[70vh] mt-6 mb-10 flex gap-5 flex-col lg:flex-row ">
      <div className=" py-6 w-[25%]  border-zinc-200 dark:border-zinc-600 rounded-lg min-h-[40rem] h-auto hidden gap-5 font-roboto container bg-background lg:flex flex-col">
        <h1 className="mb-6 text-2xl font-bold text-zinc-700 dark:text-zinc-200">
          Hello, {Capitalize(user.username!)}
        </h1>
        <Link
          to={"/profile"}
          className="flex gap-3 duration-200 text-zinc-600 dark:text-zinc-200 hover:text-sky-400 dark:hover:text-sky-400"
        >
          <CircleUserRound size={25} />
          <span className="text-base font-semibold ">User info</span>
        </Link>
        <Link
          to={"/profile/orders"}
          className="flex gap-3 duration-200 text-zinc-600 dark:text-zinc-200 hover:text-sky-400 dark:hover:text-sky-400"
        >
          <PackageOpen size={25} />
          <span className="text-base font-semibold ">Orders</span>
        </Link>
        <Link
          to={"/profile/favorites"}
          className="flex gap-3 duration-200 text-zinc-600 dark:text-zinc-200 hover:text-sky-400 dark:hover:text-sky-400"
        >
          <Heart size={25} />
          <span className="text-base font-semibold ">Favorites</span>
        </Link>
      </div>
      <div className="lg:w-[75%] w-full  lg:px-10 py-0">
        {location.pathname === "/profile" ? (
          <div className="container">
            <h1 className="text-2xl font-bold text-zinc-700 dark:text-zinc-200">
              Personal data
            </h1>
            <div className="flex flex-col gap-4 mt-6">
              <div>
                <h1 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">
                  Username
                </h1>
                <p className="text-base font-semibold text-zinc-600 dark:text-zinc-300">
                  {user.username}
                </p>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">
                  Email
                </h1>
                <p className="text-base font-semibold text-zinc-600 dark:text-zinc-300">
                  {user.email}
                </p>
              </div>
              <button
                className="px-4 py-2 mt-6 bg-red-600 rounded-xl lg:w-[35%] text-white hover:bg-red-500 duration-200"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};
export default Profile;
