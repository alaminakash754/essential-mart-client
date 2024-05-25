import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import ShowAllProducts from "../pages/allProducts/ShowAllProducts";
import EachProductDetails from "../pages/allProducts/EachProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/products",
        element: <ShowAllProducts></ShowAllProducts>,
      },
      {
        path: "/productDetails/:id",
        element: <EachProductDetails></EachProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://essential-mart-server.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);
