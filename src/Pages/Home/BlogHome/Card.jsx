import React from 'react';
import { FaUserEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Card({item}) {
  const {title, image, author, published_date, authorPic, id} = item;
  return (
    <div className='bg-white p-5 shadow-lg'>
      <img src={image} alt="" className='w-full' />
      <Link to={`/details/${id}`} className='py-3 block text-[18px] font-semibold'>{title}</Link>
      <div className='flex items-center gap-2 text-[16px] font-light'>
        <span><FaUserEdit /></span>
        <span>{author}</span>
      </div>
      <p className='text-[16px] font-light py-2'>Published: {published_date}</p>
    </div>
  )
}

export default Card