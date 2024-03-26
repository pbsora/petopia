import { UserContext } from "@/hooks/Context/UserContext";
import { Capitalize } from "@/utils/Capitalize";
import { AuthContext } from "@/utils/Types & Interfaces";
import { Heart, PackageOpen, CircleUserRound } from "lucide-react";
import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(UserContext) as AuthContext;
  const location = useLocation();

  return (
    <div className="w-full lg:w-[80%] m-auto min-h-[70vh] mt-6 mb-10 flex gap-5 flex-col lg:flex-row ">
      <div className="py-6 w-[25%] border border-zinc-200 dark:border-zinc-600 shadow-md rounded-lg max-h-[30rem] hidden gap-5 font-roboto container bg-background lg:flex flex-col">
        <h1 className="mb-6 text-xl font-bold text-zinc-700 dark:text-zinc-200">
          Hello, {Capitalize(user.username!)}
        </h1>
        <Link
          to={"/profile"}
          className="flex gap-3 duration-200 text-zinc-600 dark:text-zinc-200 hover:scale-x-105 hover:scale-y-110"
        >
          <CircleUserRound size={25} />
          <span className="text-base font-semibold ">User info</span>
        </Link>
        <Link
          to={"/profile/orders"}
          className="flex gap-3 duration-200 text-zinc-600 dark:text-zinc-200 hover:scale-x-105 hover:scale-y-110"
        >
          <PackageOpen size={25} />
          <span className="text-base font-semibold ">Orders</span>
        </Link>
        <Link
          to={"/profile/favorites"}
          className="flex gap-3 duration-200 text-zinc-600 dark:text-zinc-200 hover:scale-x-105 hover:scale-y-110"
        >
          <Heart size={25} />
          <span className="text-base font-semibold ">Favorites</span>
        </Link>
      </div>
      <div className="lg:w-[75%] w-full">
        {location.pathname === "/profile" ? (
          <div>
            <h1 className="text-2xl font-bold text-zinc-700 dark:text-zinc-200">
              My Profile
            </h1>
            <hr className="border border-zinc-200 dark:border-zinc-600" />
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
