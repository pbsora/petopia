import API from "@/utils/api";
import { useEffect } from "react";

const Auth = (/* props: Props */) => {
  useEffect(() => {
    const getToken = async () => {
      const { data } = await API.post("auth/login", {
        username: "sora",
        password: "asdasd",
      });
      localStorage.setItem("token", data.token);
      console.log(data);
    };
    getToken();
  }, []);

  const getProducts = async () => {
    const { data } = await API.get("products");
    console.log(data);
  };

  return (
    <div>
      <button onClick={getProducts}>Click me</button>
    </div>
  );
};
export default Auth;
