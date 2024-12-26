// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Overview from "../Pages/Dashboard/Overview";
import SellerRoute from "./PrivateRoute/SellerRoute";
import MyProducts from "../Pages/Dashboard/Seller-pages/MyProducts";
import AddProducts from "../Pages/Dashboard/Seller-pages/AddProducts";
import MainLayout from "../layouts/MainLayout";
import BuyerRoute from "./PrivateRoute/BuyerRoute";
import MyWishlist from "../Pages/buyer/MyWishlist";
import SeeDetails from "../Components/Products/SeeDetails";
import Cart from "../Pages/buyer/Cart";
import AdminRoute from "./PrivateRoute/AdminRoute";
import AllUsers from "../Pages/admin/AllUsers";
import ControlSeller from "../Pages/admin/ControlSeller";

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
            {
                path: "/details",
                element: <SeeDetails></SeeDetails>
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

             // Admin Route

             {
                path:"/dashboard/all-users",
                element:(
                    <AdminRoute>
                        <AllUsers></AllUsers>
                    </AdminRoute>
                )
            },
             {
                path:"/dashboard/control-seller",
                element:(
                    <AdminRoute>
                       <ControlSeller></ControlSeller>
                    </AdminRoute>
                )
            },

            // Buyer Route

            {
                path:"/dashboard/wishlist",
                element:(
                    <BuyerRoute>
                        <MyWishlist></MyWishlist>
                    </BuyerRoute>
                )
            },
            {
                path:"/dashboard/cart",
                element:(
                    <BuyerRoute>
                        <Cart></Cart>
                    </BuyerRoute>
                )
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