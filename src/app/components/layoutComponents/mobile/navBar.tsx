"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoSearchOutline } from "react-icons/io5";
import { PiScreencastLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
    minimize: boolean;
    handleSideBar: (action: boolean) => void;
}

export default function NavBar({ minimize, handleSideBar }: Props) {
    const [inputContainer, setInputContainer] = useState<string>('');

    return (
        <div className={`w-full h-[7.5%] ${minimize ? 'opacity-100' : 'opacity-50'} transition duration-150 flex justify-between border-b border-[#292929] items-center bg-[#030303]`}>
            <div className='flex justify-start'>
                <button onClick={() => handleSideBar(!minimize)} className='mx-6'>
                    <RxHamburgerMenu size={24} className='' />
                </button>
                <Image quality={100} className='w-20 object-cover ' src='/youTubeMusic-icon.png' alt='youTubeMusic-icon' width={3000} height={912} />
            </div>
            <div className='flex justify-end'>
                <button className=' '>
                    <IoSearchOutline size={22} className='text-[#DFDFDF]' />
                </button>
                <Image quality={100} className='w-7 rounded-full h-7 mx-6   object-cover cursor-pointer' src='/userImage.jpg' alt='userImage' width={360} height={360} />
            </div>
        </div>
    );
}
