import React, { useState } from "react";
import Banner from "./Banner/Banner";
import Container from "../../Components/Container";
import Data from "../../../public/blogsData.json";
import Card from "./BlogHome/Card";
import Pagination from "../../Components/Pagination";
import LatestBlog from "./BlogHome/LatestBlog";

function Home() {
  const [blog, setBlog] = useState(Data);
  //TODO:filter by Category
  const categoryToggle = id => {
    const newBlog = Data.filter(item => item?.category === id);
    setBlog(newBlog);
  };
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const blogPerPage = 9;
  const blogLastIndexOf = currentPage * blogPerPage;
  const blogFirstIndexOf = blogLastIndexOf - blogPerPage;
  const newBlogPost = blog?.slice(blogFirstIndexOf, blogLastIndexOf);

  //paginate function
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };
  //end

  return (
    <div>
      <Banner title={"Welcome to Our Blog"} />
      <Container>
        <div className="pt-10 pb-5">
          <ul className="flex items-center lg:space-x-10 overflow-scroll space-x-5">
            <li onClick={() => setBlog(Data)} className="cursor-pointer">
              All
            </li>
            <li
              onClick={() => categoryToggle("Health")}
              className="cursor-pointer"
            >
              Health
            </li>
            <li
              onClick={() => categoryToggle("Security")}
              className="cursor-pointer"
            >
              Fintech
            </li>
            <li
              onClick={() => categoryToggle("Startups")}
              className="cursor-pointer"
            >
              Startups
            </li>
            <li onClick={() => categoryToggle("AI")} className="cursor-pointer">
              AI
            </li>
            <li
              onClick={() => categoryToggle("Apps")}
              className="cursor-pointer"
            >
              Apps
            </li>
            <li
              onClick={() => categoryToggle("Tech")}
              className="cursor-pointer"
            >
              Tech
            </li>
            <li
              onClick={() => categoryToggle("Gadgets")}
              className="cursor-pointer"
            >
              Gadgets
            </li>
          </ul>
        </div>
        <hr className="border border-gray-300" />
        <div className="lg:flex items-start justify-between gap-10 py-10">
          <div className="lg:w-[75%] w-full">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
              {newBlogPost.map((item, i) => (
                <Card key={i} item={item} />
              ))}
            </div>
            <div className="py-10">
              <Pagination
                paginate={paginate}
                blogPerPage={blogPerPage}
                currentPage={currentPage}
                allBlogPage={blog.length}
              />
            </div>
          </div>
          <div className="lg:w-[25%] w-full">
            <h4 className="text-[20px] font-semibold pb-5">Latest Blog</h4>
            <div>
              {blog?.slice(0, 7).map((item, i) => (
                <LatestBlog key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
