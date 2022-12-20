import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsChatDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

type Props = {};

function Post({
  name,
  userImg,
  img,
  caption,
}: {
  name: string;
  userImg: string;
  img: string;
  caption: string;
}) {
  return (
    <div className='bg-white my-7 border rounded-sm'>
      <div className='flex items-center p-5 '>
        <img
          className='rounded-full h-12 w-12 object-contain border p-1 mr-3'
          src={userImg}
          alt=''
        />
        <p className='flex-1 font-bold'>{name}</p>
        <HiDotsHorizontal className='h-5' />
      </div>

      <img src={img} className='object-cover w-full' alt='' />

      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4'>
          <FaRegHeart />
          <BsChatDots />
          <FiSend />
        </div>
      </div>
    </div>
  );
}

export default Post;
