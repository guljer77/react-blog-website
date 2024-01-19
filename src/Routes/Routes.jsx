import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Register/Signup";
import ProfileLayouts from "../Pages/Profile/ProfileLayouts";
import Info from "../Pages/Profile/Info/Info";
import AddPost from "../Pages/Profile/Add-Post/AddPost";
import AllPost from "../Pages/Profile/All-Post/AllPost";
import PrivateRoutes from "./PrivateRoutes";
import Edit from "../Pages/Profile/Edit-Post/Edit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <ProfileLayouts />
          </PrivateRoutes>
        ),
        children: [
          {
            path: "/profile",
            element: <Info />,
          },
          {
            path: "/profile/all-post",
            element: <AllPost />,
          },
          {
            path: "/profile/add-post",
            element: <AddPost />,
          },
          {
            path: '/profile/post-edit/:id',
            element: <Edit />
          }
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <Signup />,
  },
]);
