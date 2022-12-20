import React from "react";
import Image from "next/image";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiHeartLine } from "react-icons/ri";

type Props = {};

function InsidHeader({}: Props) {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between bg-white max-w-screen cursor-pointer p-3'>
        <div className='relative pt-6 hidden lg:inline-grid w-32'>
          <img src='https://links.papareact.com/ocw' alt='' />
        </div>
        <div className='relative w-10 pt-6 lg:hidden inline-grid flex-shrink-0 cursor-pointer'>
          <img src='https://links.papareact.com/jjm' alt='' />
        </div>

        <div className='relative mt-1 p-3 rounded-md'>
          <div className='absolute inset-y-0 pl-3 flex items-center'>
            <BiSearchAlt className='h-10 w-10 text-gray-500' />
          </div>
          <input
            className='bg-gray-50 block h-12 pl-14 border-gray-300 focus:ring-black focus:border-black rounded-md'
            type='text'
            placeholder='Search'></input>
        </div>

        <div className=' flex items-center justify-end space-x-8'>
          <AiFillHome className='navBtn' />
          <div className='relative navBtn'>
            <HiOutlinePaperAirplane className='navBtn' />
            <div className='absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>
              3
            </div>
          </div>
          <AiOutlinePlusCircle className='navBtn' />
          <HiOutlineUserGroup className='navBtn' />
          <RiHeartLine className='navBtn' />
          <img
            src='https://mdbcdn.b-cdn.net/img/new/avatars/1.webp'
            className='rounded-full w-20 shadow-lg'
            alt='Avatar'
          />
        </div>
      </div>
    </div>
  );
}

export default InsidHeader;
