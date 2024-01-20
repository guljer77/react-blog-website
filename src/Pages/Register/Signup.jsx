import React, { useContext, useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFaceGrinStars } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { TbFidgetSpinner } from "react-icons/tb";
import { saveUser } from "../../Api/user";

function Signup() {
  const [error, setError] = useState("");
  const { loading, setLoading, userRegister, updateUser, googleAuth } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userLoginHandle = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError("Good Strength Password");
    } else {
      setError("Minimum eight characters, at least one letter and one number");
      return;
    }

    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMG_KEY
    }`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(imgData => {
        const imgUrl = imgData.data.display_url;
        userRegister(email, password)
          .then(result => {
            const user = result.user;
            const loggedUser = {
              email: user?.email,
            };
            updateUser(name, imgUrl)
              .then(() => {
                fetch(`https://blog-server-548gkte3g-guljer77.vercel.app/jwt`, {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(loggedUser),
                })
                  .then(res => res.json())
                  .then(data => {
                    console.log(data);
                    localStorage.setItem("car-access-token", data.token);
                  });
                saveUser(result?.user);
                navigate(from, { replace: true });
              })
              .catch(error => {
                setLoading(false);
                console.log(error.message);
              });
          })
          .catch(error => {
            setLoading(false);
            console.log(error.message);
          });
      });
  };

  const googleHandle = () => {
    googleAuth()
      .then(result => {
        const user = result.user;
        const loggedUser = {
          email: user?.email,
        };
        fetch('https://blog-server-548gkte3g-guljer77.vercel.app/jwt', {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            localStorage.setItem("car-access-token", data.token);
          });
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch(error => {
        setLoading(false);
        console.log(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center bg-black/75 w-full h-auto py-10">
      <div className="p-10 bg-white w-[420px] rounded-md shadow-lg">
        <div>
          <FaFaceGrinStars className="text-[36px] mx-auto text-primary" />
          <h4 className="text-center text-[22px] font-semibold py-5">
            Welcome
          </h4>
          <form onSubmit={userLoginHandle} action="">
            <div className="pb-3">
              <label
                htmlFor=""
                className="block pb-2 text-[16px] font-light text-black"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="w-full py-[6px] pl-3 border border-gray-200 outline-0"
              />
            </div>
            <div className="pb-3">
              <label
                htmlFor=""
                className="block pb-2 text-[16px] font-light text-black"
              >
                Profile Image
              </label>
              <input
                type="file"
                name="image"
                className="w-full py-[6px] pl-3 border border-gray-200 outline-0"
              />
            </div>
            <div className="pb-3">
              <label
                htmlFor=""
                className="block pb-2 text-[16px] font-light text-black"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full py-[6px] pl-3 border border-gray-200 outline-0"
              />
            </div>
            <div className="pb-3">
              <label
                htmlFor=""
                className="block pb-2 text-[16px] font-light text-black"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="w-full py-[6px] pl-3 border border-gray-200 outline-0"
              />
              <p className="text-rose-600 font-light text-sm mt-2">{error}</p>
            </div>
            <div className="pb-3">
              <button
                type="submit"
                className="w-full bg-primary py-[6px] text-white uppercase text-[16px] font-semibold"
              >
                {loading ? (
                  <TbFidgetSpinner size={24} className="mx-auto animate-spin" />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>
          <p>
            You have an account?
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
          <div className="py-3">
            <button
              onClick={googleHandle}
              className="flex items-center gap-2 py-[6px] px-5 w-full border"
            >
              <AiFillGoogleCircle className="text-[26px] text-primary" />
              Continue With google?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
