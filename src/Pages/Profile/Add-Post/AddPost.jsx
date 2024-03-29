import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { saveBlog } from "../../../Api/blog";

function AddPost() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const addPostForm = event => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const tag = form.tag.value;
    const date = form.date.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMG_KEY
    }`;

    fetch(url, {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(imgData =>{
      const image = imgData.data.display_url;
      const blogData = {
        authorImg: user?.photoURL,
        authorName: user?.displayName,
        email: user?.email,
        title: title,
        tag: tag,
        date: date,
        description: description,
        image: image
      }
      saveBlog(blogData);
    })
    navigate('/profile/all-post');
  };

  return (
    <div className="p-5 rounded-md shadow-lg bg-white">
      <div>
        <div className="flex items-center justify-between pb-10">
          <h4 className="text-[16px] font-semibold">Add Post</h4>
          <Link
            to="/profile/all-post"
            className="px-4 rounded-md py-2 bg-primary text-white"
          >
            All Post
          </Link>
        </div>
        <div>
          <form onSubmit={addPostForm} action="">
            <div className="pb-3">
              <label htmlFor="" className="block pb-2">
                Post Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="title"
                className="w-full border border-gray-400 py-1 pl-3 outline-0 rounded-md"
              />
            </div>
            <div className="pb-3">
              <label htmlFor="" className="block pb-2">
                Post Tag
              </label>
              <input
                type="text"
                name="tag"
                placeholder="tag"
                className="w-full border border-gray-400 py-1 pl-3 outline-0 rounded-md"
              />
            </div>
            <div className="pb-3">
              <label htmlFor="" className="block pb-2">
                Published Date
              </label>
              <input
                type="date"
                name="date"
                className="w-full border border-gray-400 py-1 pl-3 outline-0 rounded-md"
              />
            </div>
            <div className="pb-3">
              <label htmlFor="" className="block pb-2">
                Post Image
              </label>
              <input
                type="file"
                name="image"
                className="w-full border border-gray-400 py-1 pl-3 outline-0 rounded-md"
              />
            </div>
            <div className="pb-3">
              <label htmlFor="" className="block pb-2">
                Post Description
              </label>
              <textarea
                name="description"
                placeholder="Description...."
                id=""
                cols="30"
                rows="10"
                className="w-full border border-gray-400 py-1 pl-3 outline-0 resize-none rounded-md"
              ></textarea>
            </div>
            <div className="pt-3">
              <button
                type="submit"
                className="px-5 py-2 rounded-md text-white bg-primary"
              >
                Submit Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
