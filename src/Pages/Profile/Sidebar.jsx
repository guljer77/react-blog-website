import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";

function Sidebar() {
  const { user, userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const signOut = () => {
    userSignOut()
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  return (
    <div className="p-5 rounded-md shadow-lg bg-gray-100 lg:block flex items-center justify-between">
      <Link to="/profile" className="text-center block">
        <img
          src={user?.photoURL}
          alt=""
          className="lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] inline-block rounded-full mb-3"
        />
        <h4 className="text-[20px] lg:block hidden font-semibold uppercase">
          {user?.displayName}
        </h4>
      </Link>
      <hr className="border border-gray-500 my-5" />
      <div className="py-10">
        <ul className="lg:space-y-5 space-y-0 lg:space-x-0 space-x-3 lg:block flex">
          <li className="text-[16px] font-medium">
            <NavLink
              to="/profile/all-post"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              All Post
            </NavLink>
          </li>
          <li className="text-[16px] font-medium">
            <NavLink
              to="/profile/add-post"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Add Post
            </NavLink>
          </li>
        </ul>
      </div>
      <hr className="border border-gray-500 my-5" />
      <div className="lg:pt-10">
        <h4
          onClick={signOut}
          className="flex cursor-pointer items-center gap-5"
        >
          <FaArrowRightFromBracket />
          Logout
        </h4>
      </div>
    </div>
  );
}

export default Sidebar;
