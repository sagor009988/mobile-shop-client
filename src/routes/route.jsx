import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../lyouts/MainlayOut";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../lyouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Overview from "../Pages/Dashboard/Overview";
import SellerRoute from "./PrivateRoute/SellerRoute";
import MyProducts from "../Pages/Seller-pages/MyProducts";
import AddProducts from "../Pages/Seller-pages/AddProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact-us",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                path: "/dashboard/overview",
                element: <Overview></Overview>
            },
            // seller route

            {
                path: "/dashboard/my-products",
                element: <SellerRoute>
                    <MyProducts></MyProducts>
                </SellerRoute>
            },
            {
                path: "/dashboard/add-products",
                element: <SellerRoute>
                    <AddProducts></AddProducts>
                </SellerRoute>
            },

        ]
    }
]);