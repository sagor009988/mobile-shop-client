// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className="container mx-auto rounded-lg">
            <div><Navbar></Navbar></div>

            {/* children */}
            <div className='max-h-min container mx-auto border '>
                <Outlet></Outlet>
            </div>


            <div><Footer></Footer></div>
        </div>
     
    );
};

export default MainLayout;