/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import LoadingPage from "../../Pages/LoadingPage";
import useUserData from "../../Hooks/useUserData";

const SellerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const userData = useUserData();
    const location = useLocation();
    if (loading || !userData.role) {
        return <LoadingPage></LoadingPage>
    }
    if (user && userData?.role == "Seller") {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default SellerRoute;