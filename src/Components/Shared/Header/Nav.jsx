import React, { useContext, useEffect, useState } from "react";
import Container from "../../Container";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import User from "../../../assets/user.png";
import { AuthContext } from "../../../Provider/AuthProvider";
import { IoMdArrowDropdown } from "react-icons/io";

function Nav() {
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const { user, userSignOut } = useContext(AuthContext);

  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    fetch(`https://blog-server-90282et18-guljer77.vercel.app/users`)
      .then(res => res.json())
      .then(data => setAdmin(data));
  }, [admin]);

  const adminPage = admin?.find(
    item => item?.role && item?.email === user?.email
  );

  const logoutHandle = () => {
    userSignOut()
      .then(() => {
        localStorage.removeItem('car-access-token');
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="py-5 bg-black">
        <Container>
          <div className="flex items-center justify-between text-white">
            <div>
              <Link to="/" className="lg:text-[24px] text-[20px] font-semibold">
                Web<span className="uppercase text-primary">Blog</span>
              </Link>
            </div>
            <div className="lg:block hidden">
              <ul className="flex items-center space-x-7">
                <li className="text-[16px] font-medium">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-[16px] font-medium">
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    Service
                  </NavLink>
                </li>
                <li className="text-[16px] font-medium">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="text-[16px] font-medium">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="text-[16px] font-medium">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <div
                onClick={() => setMenu(!menu)}
                className="lg:hidden block transition-all duration-300"
              >
                {menu ? (
                  <IoMdClose className="text-[22px]" />
                ) : (
                  <FaBarsStaggered className="text-[22px]" />
                )}
              </div>
              <div className="">
                <div
                  onClick={() => setProfile(!profile)}
                  className="flex items-center gap-2 border cursor-pointer border-primary p-[4px]"
                >
                  <img
                    src={user && user?.photoURL ? user?.photoURL : User}
                    alt=""
                    className="w-8 h-8 block rounded-full"
                  />
                  <IoMdArrowDropdown />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {profile && (
        <div className="absolute w-[140px] h-auto p-5 bg-gray-300 top-16 lg:right-[78px] right-5 rounded-md">
          <ul className="space-y-2">
            {user ? (
              <>
                {adminPage ? (
                  <>
                    <li className="text-[16px] font-semibold cursor-pointer">
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="text-[16px] font-semibold cursor-pointer">
                      <Link to="/profile">Profile</Link>
                    </li>
                  </>
                )}
                <li
                  onClick={logoutHandle}
                  className="text-[16px] font-semibold cursor-pointer"
                >
                  Logout
                </li>
              </>
            ) : (
              <>
                <li className="text-[16px] font-semibold cursor-pointer">
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
      {menu && (
        <div className="absolute w-full h-[260px] top-[70px] pl-5 pt-5 bg-gray-300">
          <ul className="space-y-3">
            <li className="text-[16px] font-medium">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="text-[16px] font-medium">
              <NavLink
                to="/service"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Service
              </NavLink>
            </li>
            <li className="text-[16px] font-medium">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                About
              </NavLink>
            </li>
            <li className="text-[16px] font-medium">
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Blogs
              </NavLink>
            </li>
            <li className="text-[16px] font-medium">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
