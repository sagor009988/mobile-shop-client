// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, NavLink } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import useAuth from "../Hooks/useAuth";
import { BsCart4 } from "react-icons/bs";
import useUserData from "../Hooks/useUserData";

const Navbar = () => {
    const { user } = useAuth()
    const userData=useUserData();
    return (
        <div>
            <div className="navbar bg-base-300 font-style font-bold text-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className="font-serif">
                                <NavLink to='/'>HOME</NavLink>

                            </li>
                            <li>
                                <NavLink to="/products">Products</NavLink>

                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>

                            </li>
                            <li>
                                <NavLink to="/contact-us">Contact Us</NavLink>

                            </li>

                        </ul>
                    </div>
                    <img src="./img/A.png" alt="" className="w-20 rounded-full" />
                </div>
                <div className="navbar-center hidden lg:flex gap-5">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to='/'>HOME</NavLink>

                        </li>
                        <li>
                            <NavLink to="/products">Products</NavLink>

                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>

                        </li>
                        <li>
                            <NavLink to="/contact-us">Contact Us</NavLink>

                        </li>

                    </ul>
                   
                </div>
                <div  className="md:ml-20 font-serif flex relative cursor-pointer" ><p><BsCart4 size={40}  /></p><h1 className="absolute -top-5 left-5">{userData?.cart?.length}</h1></div>
                {/* nav end */}
                <div className="navbar-end mr-4">
                    
                    {
                        user ? <UserDropdown /> :
                            // if user not login
                            <div className='flex  gap-3'>
                                <Link to='/login'>
                                    <button className='btn btn-outline btn-primary btn-sm  '>Login</button>
                                </Link>
                                <Link to='/register'>
                                    <button className='btn btn-sm btn-primary '>Register</button>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;