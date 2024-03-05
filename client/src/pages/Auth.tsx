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
    const { data } = await API.get(
      "products?Category=cats&Price=60&criteria=lt"
    );
    console.log(data);
  };

  return (
    <div>
      <button onClick={getProducts}>Click me</button>
      <img
        src="https://res.cloudinary.com/dhkaqwnyz/image/upload/v1709572775/ewtkq6xwmasni3ihc8jo.jpg"
        alt=""
      />
    </div>
  );
};
export default Auth;
