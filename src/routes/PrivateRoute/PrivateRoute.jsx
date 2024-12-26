/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import LoadingPage from "../../Pages/LoadingPage";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <LoadingPage></LoadingPage>
    }
    if (user) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;