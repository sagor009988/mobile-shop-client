import React from "react";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineInventory } from "react-icons/md";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaUsersCog } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";

// Define routes
const sellerRoutes = [
  {
    id: 1,
    route: "/dashboard/my-products",
    title: "My Products",
    icon: <FaChalkboardUser />,
  },
  {
    id: 2,
    route: "/dashboard/add-products",
    title: "Add Products",
    icon: <MdOutlineInventory />,
  },
];

const adminRoutes = [
  {
    id: 1,
    route: "/dashboard/all-users",
    title: "All Users",
    icon: <FaUsersCog />,
  },
  {
    id: 2,
    route: "/dashboard/control-seller",
    title: "Control Seller",
    icon: <IoIosAddCircleOutline />,
  },
];

const buyerRoutes = [
  {
    id: 1,
    route: "/dashboard/wishlist",
    title: "My Wishlist",
    icon: <FaRegHeart size={20} />,
  },
  {
    id: 2,
    route: "/dashboard/cart",
    title: "Cart",
    icon: <BsCart4 size={20} />,
  },
];

const Sidebar = () => {
  const { LogOut } = useAuth();
  const navigate = useNavigate();
  const userData = useUserData();
  const { user } = useAuth();

  const handleLogOut = () => {
    LogOut();
    navigate("/login");
  };

  const activeClass = "bg-gray-700 btn btn-outline text-white";
  const defaultClass = "btn btn-outline w-full";

  return (
    <div className="bg-gray-300 border-r-2 min-h-screen">
      <ul className="flex pt-5 flex-col gap-4 justify-center items-center px-4">
        <h1 className="text-3xl text-orange-400 font-extrabold border-b-2">
          Mobile Shop
        </h1>

        {/* Overview Button */}
        <NavLink
          to="/dashboard/overview"
          className={({ isActive }) =>
            `${isActive ? activeClass : defaultClass} flex w-full gap-2 font-bold`
          }
        >
          <li className="flex items-center gap-2">
            <GrOverview className="size-4 font-extrabold" /> Overview
          </li>
        </NavLink>

        {/* Conditional Rendering for Roles */}
        {/* Seller Routes */}
        {userData?.role === "Seller" &&
          sellerRoutes.map((route) => (
            <NavLink
              key={route.id}
              to={route.route}
              className={({ isActive }) =>
                `${isActive ? activeClass : defaultClass} flex w-full gap-2 font-bold`
              }
            >
              <li className="flex items-center gap-2">
                {route.icon} {route.title}
              </li>
            </NavLink>
          ))}

        {/* Buyer Routes */}
        {userData?.role === "Buyer" &&
          buyerRoutes.map((route) => (
            <NavLink
              key={route.id}
              to={route.route}
              className={({ isActive }) =>
                `${isActive ? activeClass : defaultClass} flex w-full gap-2 font-bold`
              }
            >
              <li className="flex items-center gap-2">
                {route.icon} {route.title}
              </li>
            </NavLink>
          ))}

        {/* Admin Routes */}
        {userData?.role === "Admin" &&
          adminRoutes.map((route) => (
            <NavLink
              key={route.id}
              to={route.route}
              className={({ isActive }) =>
                `${isActive ? activeClass : defaultClass} flex w-full gap-2 font-bold`
              }
            >
              <li className="flex items-center gap-2">
                {route.icon} {route.title}
              </li>
            </NavLink>
          ))}

        {/* Home Route */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? activeClass : defaultClass} flex w-full gap-2 font-bold`
          }
        >
          <li className="flex items-center gap-2">
            <IoHomeOutline className="size-4 font-extrabold" /> Home
          </li>
        </NavLink>

        {/* Logout Button */}
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `${isActive ? activeClass : defaultClass} flex w-full gap-2 font-bold`
          }
        >
          <li onClick={handleLogOut} className="flex items-center gap-2">
            <RiLogoutBoxLine className="size-4 font-extrabold" /> Logout
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
