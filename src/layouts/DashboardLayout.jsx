import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Sidebar */}
            <div className="order-1 md:order-none md:col-span-2">
                <Sidebar></Sidebar>
            </div>

            {/* Outlet */}
            <div className="order-2 md:order-none md:col-span-10 p-12">
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default DashboardLayout;