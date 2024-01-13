import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaRegEye, FaPen, FaTrash } from "react-icons/fa";

function AllPost() {
  const { user } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/blogs`)
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, [blogs]);

  const newBlogs = blogs.filter(item => item?.email == user?.email);

  return (
    <div className="p-5 rounded-md shadow-lg bg-white">
      <div className="flex items-center justify-between pb-10">
        <h4 className="text-[16px] font-semibold">All Post</h4>
        <Link
          to="/profile/add-post"
          className="px-4 py-2 rounded-md bg-primary text-white"
        >
          Add Post
        </Link>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="w-1/4 border text-center py-2">Image</h4>
          <h4 className="w-1/4 border text-center py-2">Blog Title</h4>
          <h4 className="w-2/4 border text-center py-2">Action</h4>
        </div>
        {newBlogs.map(item => (
          <div
            key={item?._id}
            className="flex items-center justify-between border-t-0 mb-5 bg-white shadow-lg"
          >
            <h4 className="w-1/4 text-center py-2">
              <img src={item?.image} className="w-[80px] h-auto" alt="" />
            </h4>
            <h4 className="w-1/4 text-center py-2">
              {item?.title.slice(0,15)}...
            </h4>
            <h4 className="w-2/4 text-center py-2 flex items-center justify-center lg:space-x-5 space-x-2">
              <Link className="block lg:p-3 p-2 bg-primary text-white"><FaRegEye /></Link>
              <Link className="block lg:p-3 p-2 bg-primary text-white"><FaPen /></Link>
              <button className="block lg:p-3 p-2 bg-primary text-white"><FaTrash /></button>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPost;
