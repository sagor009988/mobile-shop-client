import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../lyouts/MainlayOut";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
    },
]);