import Home from "@/pages/Home";
import Auth from "@/pages/Auth";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Router = () => {
  const BrowserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/auth", element: <Auth /> },
  ]);

  return <RouterProvider router={BrowserRouter} />;
};

export default Router;
