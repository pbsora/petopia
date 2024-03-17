import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = (/* props: Props */) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return <div>Auth</div>;
};
export default Auth;
