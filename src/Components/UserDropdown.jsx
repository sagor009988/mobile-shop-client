// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useUserData from "../Hooks/useUserData";

const UserDropdown = () => {
  const { user, LogOut } = useAuth();
  const userData = useUserData();

  const handleLogOut = () => {
    LogOut();
  };
  return (
    <div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="flex">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img
                src={`${user?.photoURL || "/img/userDrop.png"}`}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="badge badge-secondary font-serif">{userData?.wishlist?.length || 0}</div>
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content flex gap-4  menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <Link to="/dashboard/overview">Dashboard</Link>
          </li>
          <li>
            <Link>
              <button onClick={handleLogOut}>Logout</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDropdown;
