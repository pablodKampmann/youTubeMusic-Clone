"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoMenuOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation'
import { IoSearchOutline } from "react-icons/io5";
import { PiScreencastLight } from "react-icons/pi";

export default function NavBar() {
    const pathname = usePathname();

    return (
        <div className="w-full h-[9%] flex border-b border-[#292929] items-center  bg-[#030303]">
            <button className='mr-3 hover:bg-white hover:bg-opacity-10 rounded-full m-5 p-1.5 cursor-pointer'>
                <IoMenuOutline size={28} className='' />
            </button>
            <div className=''>
                <Image quality={100} className='w-[90px] mr-48 h-full object-cover cursor-pointer text-white' src='/youTubeMusic-icon.png' alt='youTubeMusic-icon' width={3000} height={912} />
            </div>
            <div className='w-[35%] h-[65%] rounded-lg border-[#484848] border items-center px-3 bg-[#292929] flex'>
                <IoSearchOutline size={24} className='text-[#949494] mr-3' />
                <input placeholder='Buscar canciones, álbumes, artistas o pódcasts' className='rounded-lg text-white placeholder:text-[#949494] bg-transparent focus:outline-none px-2 w-full h-full' type="text" />
            </div>
            <div className='flex ml-auto mr-6 cursor-pointer items-center'>
                <PiScreencastLight size={26} />
            </div>
            <div className='flex mr-28 items-center'>
                <Image quality={100} className='w-8 rounded-full h-8   object-cover cursor-pointer' src='/userImage.jpg' alt='userImage' width={360} height={360} />
            </div>
        </div>
    );
}
