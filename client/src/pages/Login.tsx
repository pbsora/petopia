import { UserContext } from "@/hooks/Context/UserContext";
import { useLogin } from "@/lib/Queries/UserQueries";
import { AuthContext, AuthData } from "@/utils/Types & Interfaces";
import { AxiosError } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { user } = useContext(UserContext) as AuthContext;
  const { setUserData } = useContext(UserContext) as AuthContext;

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const loginMutation = useLogin(login);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate();
  };

  useEffect(() => {
    if (loginMutation.isError) {
      const res = (loginMutation.failureReason as AxiosError).response
        ?.data as { error: string };
      setError(res.error);
      loginMutation.reset();
    }

    if (loginMutation.isSuccess) {
      localStorage.setItem("token", loginMutation.data.token);
      setUserData({
        userId: loginMutation.data.id,
        username: loginMutation.data.userName,
        email: loginMutation.data.email,
      } as AuthData);

      if (searchParams.get("next")) {
        return navigate(`/${searchParams.get("next")}`);
      } else {
        navigate("/profile");
      }
    }
  }, [loginMutation.isError, loginMutation.isSuccess, navigate, searchParams]);

  if (user.username) return <Navigate to="/" />;

  return (
    <div className="flex flex-col lg:flex-row min-h-[70vh] sm:w-[80%] gap-6 md:w-[65%]  lg:w-3/4 m-auto lg:mt-12">
      <form
        onSubmit={handleLogin}
        className="container flex flex-col gap-6 py-12 mt-6 font-inter lg:w-2/4 lg:border lg:h-3/4 lg:rounded-xl lg:shadow-lg border-zinc-300"
      >
        <h1 className="text-lg font-semibold text-center lg:text-left text-zinc-600 dark:text-zinc-200">
          To continue, please login
        </h1>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="w-full px-3 py-2 border-2 rounded-md shadow-inner border-zinc-400 dark:border-zinc-500 dark:bg-slate-700"
          onChange={handleChange}
          value={login.username}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-full px-3 py-2 border-2 rounded-lg border-zinc-400 dark:border-zinc-500 dark:bg-slate-700"
          onChange={handleChange}
          value={login.password}
        />
        <span
          className={`${
            error !== "" ? "block" : "hidden"
          } text-red-500 text-lg font-semibold text-center`}
        >
          {error}
        </span>
        <button
          type="submit"
          className="w-full py-3 text-lg font-bold duration-200 bg-blue-600 hover:bg-blue-400 lg:mt-8 rounded-xl text-zinc-200"
        >
          Login
        </button>
      </form>
      <hr className="w-3/4 mx-auto mb-4 border-b lg:hidden border-zinc-400" />
      <div className="container flex flex-col gap-8 lg:w-2/4 lg:pt-12">
        <h1 className="text-xl font-semibold text-center text-zinc-600 lg:hidden dark:text-zinc-200">
          Don't have an account?
        </h1>
        <h1 className="hidden mb-2 text-3xl font-semibold text-blue-700 dark:text-blue-400 lg:block">
          Create an account, quick, <br />
          easy and free!
        </h1>
        <p className="hidden text-lg font-[500] lg:block">
          With your account, you have access to exclusive deals, discounts, save
          products on your favorites so you can check them out later and much
          more!
        </p>

        <button
          onClick={() => navigate("/register")}
          className="w-full py-3 text-lg font-bold duration-200 bg-transparent border-2 shadow-inner dark:text-zinc-200 dark:border-zinc-300 hover:bg-slate-100 dark:hover:bg-slate-700 border-zinc-800 rounded-xl text-zinc-700"
        >
          Click here to register
        </button>
      </div>
    </div>
  );
};
export default Login;
