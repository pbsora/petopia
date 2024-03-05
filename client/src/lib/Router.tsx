import App from "@/pages/App";
import Auth from "@/pages/Auth";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Router = () => {
  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/search", element: <Search /> },
        { path: "/auth", element: <Auth /> },
      ],
    },
  ]);

  return <RouterProvider router={BrowserRouter} />;
};

export default Router;
