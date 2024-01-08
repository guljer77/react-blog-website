import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function LatestBlog({item}) {
  return (
    <div className='pb-5'>
      <h4 className='text-[18px] font-semibold pb-2'>{item?.title}</h4>
      <Link to={`/details/${item?.id}`} className='flex items-center gap-3'>Read More <FaArrowRight /></Link>
      <hr className='border border-gray-300 mt-3' />
    </div>
  )
}

export default LatestBlog