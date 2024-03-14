import App from "@/pages/App";
import Auth from "@/pages/Auth";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import Search from "@/pages/Search";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { productLoader } from "@/lib/Loaders/ProductPageLoader";

const Router = () => {
  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/search", element: <Search /> },
        { path: "/auth", element: <Auth /> },
        {
          path: "/product/:slug",
          element: <ProductDetails />,
          loader: productLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={BrowserRouter} />;
};

export default Router;
