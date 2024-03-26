import { UserContext } from "@/hooks/Context/UserContext";
import { useRegister } from "@/lib/Queries/UserQueries";
import { AuthContext } from "@/utils/Types & Interfaces";
import { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";

const Register = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext) as AuthContext;
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const registerMutation = useRegister(register);

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({
      ...register,
      [e.target.id]: e.target.value,
    });
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (register.password !== register.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    registerMutation.mutate();
  };

  useEffect(() => {
    if (registerMutation.error) {
      const res = (registerMutation.error as AxiosError)?.response?.data as {
        error: string;
      };
      setError(res.error);
      registerMutation.reset();
    }

    if (registerMutation.isSuccess) {
      alert("User registered successfully");
      registerMutation.reset();
      navigate("/login");
    }
  }, [
    registerMutation.data,
    registerMutation.failureReason,
    registerMutation.error,
    registerMutation.isSuccess,
    registerMutation.reset,
  ]);

  if (user.username) return <Navigate to="/" />;

  return (
    <div className="flex font-inter w min-h-[70vh] sm:w-[80%] gap-6 md:w-[65%]  lg:w-[85%] m-auto">
      <form
        className="h-[80vh] container py-10 flex flex-col gap-6 lg:w-2/4"
        onSubmit={handleRegister}
      >
        <h1 className="text-2xl font-madimi text-zinc-600 dark:text-zinc-200">
          Create an account
        </h1>
        <hr className="border border-zinc-200" />
        <div>
          <label htmlFor="username" className="block mb-2 text-lg">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 border rounded-lg border-zinc-500 dark:bg-slate-700"
            placeholder="Username"
            onChange={handleChange}
            value={register.username}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg border-zinc-500 dark:bg-slate-700"
            placeholder="Email"
            onChange={handleChange}
            value={register.email}
          />
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="w-full lg:w-2/4">
            <label htmlFor="password" className="block mb-2 text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg border-zinc-500 dark:bg-slate-700"
              placeholder="Password"
              onChange={handleChange}
              value={register.password}
            />
          </div>
          <div className="w-full lg:w-2/4">
            <label htmlFor="confirmPassword" className="block mb-2 text-lg">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg border-zinc-500 dark:bg-slate-700"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={register.confirmPassword}
            />
          </div>
        </div>
        <span
          className={`${
            error !== "" ? "block" : "hidden"
          } text-red-500 text-lg font-semibold text-center`}
        >
          {error}
        </span>
        <button className="flex items-center justify-center w-full py-3 mt-8 text-xl text-white bg-sky-600 rounded-xl">
          {registerMutation.isPending ? <MoonLoader size={30} /> : "Register"}
        </button>
      </form>
      <div className="container flex-col hidden gap-8 lg:w-2/4 lg:pt-12 lg:flex">
        <h1 className="text-xl font-semibold text-center text-zinc-600 lg:hidden">
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
      </div>
    </div>
  );
};
export default Register;
