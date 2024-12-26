/* eslint-disable react/prop-types */
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useUserData from '../../Hooks/useUserData';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../../Pages/LoadingPage';

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
        const userData = useUserData();
        const location = useLocation();
        if (loading || !userData.role) {
            return <LoadingPage></LoadingPage>
        }
        if (user && userData?.role == "Admin") {
            return children;
        }
    
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;