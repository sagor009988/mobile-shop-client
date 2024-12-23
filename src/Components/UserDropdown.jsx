import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const UserDropdown = () => {
    const { user, LogOut } = useAuth();




    const handleLogOut = () => {
        LogOut()
    }
    return (
        <div>
            <div className="dropdown dropdown-end">

                <div tabIndex={0} role="button" className="flex">
                    <div className="avatar online">
                        <div className="w-12 rounded-full">
                            <img src={`${user?.
                                photoURL
                                || '../../images.png'}`} className='rounded-full' />
                        </div>



                    </div>
                </div>

                <ul tabIndex={0} className="dropdown-content flex gap-4  menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li>
                        <Link to='/dashboard/overview' >
                            Dashboard
                        </Link >
                    </li>
                    <li>
                        <Link >
                            <button onClick={handleLogOut}>Logout</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserDropdown;