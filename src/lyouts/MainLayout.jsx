import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <div >
            <div><Navbar></Navbar></div>

            {/* children */}
            <div className='max-h-min container mx-auto border border-black'>
                <Outlet></Outlet>
            </div>


            <div><Footer></Footer></div>
        </div>
    );
};

export default MainLayout;