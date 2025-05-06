import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../pages/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import ContactUS from "../pages/ContactUS";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
            {
                path: "/",
                element: <ProductCard></ProductCard>,
                loader: () => fetch("../productsData.json"),
            },
            {
                path: "/category/:category",
                element: <ProductCard></ProductCard>,
                loader: () => fetch("../productsData.json"),
            }
        ]
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../productsData.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("../productsData.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("../productsData.json"),
      },
      {
        path: "/contact",
        element: <ContactUS></ContactUS>,
      },
    ],
  },
]);

export default routes;
