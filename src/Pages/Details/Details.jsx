import React, { useContext, useEffect, useState } from "react";
import CommonBanner from "../../Components/CommonBanner";
import Data from "../../../public/blogsData.json";
import { Link, useParams } from "react-router-dom";
import Container from "../../Components/Container";
import { FaUserEdit } from "react-icons/fa";
import LatestBlog from "../Home/BlogHome/LatestBlog";
import { BiLike } from "react-icons/bi";
import { AuthContext } from "../../Provider/AuthProvider";

function Details() {
  const [comment, setComment] = useState([]);
  useEffect(()=>{
    fetch(`https://blog-server-90282et18-guljer77.vercel.app/comments`,{
      method:"GET",
      headers:{
        authorization : `Bearer ${localStorage.getItem('car-access-token')}`
      }
    })
    .then(res => res.json())
    .then(data => setComment(data))
  }, [comment]);

  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const blogData = Data.find(item => item?.id == id);
  const { image, title, author, published_date, content, tags, category } =
    blogData;
  const relatedPost = Data.filter(item => item?.category === category);
  const newCData = comment?.filter(item => item.id == id);
  const commentUser = event => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    const messageComment = {
      author: user?.displayName,
      comment: message,
      id: id,
      img: user?.photoURL
    };
    fetch(`https://blog-server-90282et18-guljer77.vercel.app/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(messageComment),
    })
      .then(res => res.json())
      .then(data => console.log(data));
    form.reset("");
  };
  return (
    <div>
      <CommonBanner title={"Blog Details"} />
      <Container>
        <div className="py-10 lg:flex items-start justify-between gap-10">
          <div className="lg:w-3/4 w-full lg:pb-0 pb-5">
            <img src={image} alt="" className="w-full h-auto" />
            <div className="p-5">
              <div className="lg:flex items-center justify-between">
                <p className="flex items-center lg:pb-0 pb-3 gap-2">
                  Author:{" "}
                  <span className="block">
                    <FaUserEdit className="inline-block" /> {author}
                  </span>
                </p>
                <p>Published: {published_date}</p>
              </div>
              <div className="flex items-center gap-2 py-3">
                <p className="border px-3 py-2 rounded-md">{tags[0]}</p>
                <p className="border px-3 py-2 rounded-md">{tags[1]}</p>
              </div>
              <h4 className="text-[22px] font-semibold pb-5">{title}</h4>
              <p className="text-[15px] font-light">{content}</p>
              <div className="py-5">
                <p>30 People Like This Post</p>
                <p className="flex items-center gap-1 cursor-pointer">
                  <BiLike /> Like
                </p>
              </div>
            </div>
            <hr className="border border-gray-200 mb-10" />
            {newCData?.map(item => (
              <div key={item?._id} className="pb-10">
                <p className="flex items-center gap-2 pb-2">
                  <img src={item?.img} alt="" className="w-[40px] h-[40px] rounded-full" /> {item?.author}
                </p>
                <p className="text-[14px] font-light pl-10">{item?.comment}</p>
              </div>
            ))}
            <div>
              <form onSubmit={commentUser} action="">
                <div>
                  <label htmlFor="" className="block pb-2 text-[15px]">
                    Write Your Comment
                  </label>
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="5"
                    className="w-full border outline-0 p-5 resize-none"
                  ></textarea>
                </div>
                <div className="pt-5">
                  {user ? (
                    <>
                      <input
                        type="submit"
                        value="Message"
                        className={`px-5 py-2 bg-primary text-white cursor-pointer`}
                      />
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="px-5 py-2 bg-primary text-white"
                      >
                        Please Login With Comment
                      </Link>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="lg:w-1/4 w-full lg:pb-0 pb-5">
            <h4 className="text-[20px] font-semibold pb-5">Related Post</h4>
            <div>
              {relatedPost.slice(0, 5).map((item, i) => (
                <LatestBlog key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Details;
