"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoMenuOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { PiScreencastLight } from "react-icons/pi";
interface Props {
    minimize: boolean;
    handleSideBar: (action: boolean) => void;
}

export default function NavBar({ minimize, handleSideBar }: Props) {
    const [inputContainer, setInputContainer] = useState<string>('');

    return (
        <div className="w-full h-[9%] flex border-b border-[#292929] items-center  bg-[#030303]">
            <button onClick={() => handleSideBar(!minimize)} className='mr-3 focus:outline-none hover:bg-white hover:bg-opacity-10 transition dura rounded-full m-5 p-1.5 cursor-pointer'>
                <IoMenuOutline size={28} className='' />
            </button>
            <div className=''>
                <Image quality={100} className={`w-[100px] ${minimize ? 'mr-8' : 'mr-48'} transition-all duration-300 transform  h-full object-cover cursor-pointer text-white`} src='/youTubeMusic-icon.png' alt='youTubeMusic-icon' width={3000} height={912} />
            </div>
            <div className={`w-[30%] h-[65%] rounded-lg border-[#484848] border items-center px-3 ${inputContainer !== '' ? 'bg-[#030303]' : 'bg-[#292929]'} flex`}>
                <IoSearchOutline size={24} className='text-[#949494] mr-3' />
                <input value={inputContainer} onChange={(e) => setInputContainer(e.target.value)} placeholder='Buscar canciones, álbumes, artistas o pódcasts' className='rounded-lg text-white placeholder:text-[#949494] bg-transparent focus:outline-none px-2 w-full h-full' type="text" />
            </div>
            <div className='flex hover:bg-white hover:bg-opacity-10 rounded-full focus:outline-none transition duration-150  p-1.5  ml-auto mr-4 cursor-pointer items-center'>
                <PiScreencastLight size={26} />
            </div>
            <div className='flex mr-28 items-center'>
                <Image quality={100} className='w-8 rounded-full h-8   object-cover cursor-pointer' src='/userImage.jpg' alt='userImage' width={360} height={360} />
            </div>
        </div>
    );
}
