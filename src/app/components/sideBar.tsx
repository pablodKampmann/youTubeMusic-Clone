"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoMenuOutline } from "react-icons/io5";
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdOutlineExplore, MdExplore, MdLibraryMusic, MdOutlineLibraryMusic  } from "react-icons/md";
import { usePathname } from 'next/navigation'

export default function TopBar() {
    const pathname = usePathname();

    return (
        <div className="h-screen w-[15%]">
            <div className="w-full h-full flex flex-col bg-[#030303]">
                <div className='flex justify-center items-start p-4 '>
                    <div className='flex justify-start w-[25%] h-[100%]'>
                        <IoMenuOutline  />
                    </div>
                    <div className='flex justify-center items-center'>
                        <Image quality={100} className='w-[40%] h-fit object-cover cursor-pointer text-white' src='/youTubeMusic-icon.png' alt='youTubeMusic-icon' width={3000} height={912} />
                    </div>
                </div>
                <div className='mt-4 h-full px-2 space-y-2 flex-col'>
                    <button className={`${pathname === '/' ? 'bg-white bg-opacity-10' : 'hover:bg-white transition duration-150 hover:bg-opacity-10'} flex text-sm tracking-wide font-medium  text-center rounded-lg  w-full h-[6%] justify-start px-4 items-center`}>
                        <GoHomeFill className='flex w-[15%] h-[60%] items-center justify-start mr-2' />Inicio
                    </button>
                    <button className={`${pathname === '/daww' ? 'bg-white bg-opacity-10' : 'hover:bg-white transition duration-150 hover:bg-opacity-10'} flex text-sm tracking-wide font-medium  text-center rounded-lg bg w-full h-[6%] justify-start px-4 items-center`}>
                        <MdOutlineExplore className='flex w-[15%] h-[60%] items-center justify-start mr-2' />Explorar
                    </button>
                    <button className={`${pathname === '/bilito' ? 'bg-white bg-opacity-10' : 'hover:bg-white transition duration-150 hover:bg-opacity-10'} flex hover: text-sm tracking-wide font-medium  text-center rounded-lg  w-full h-[6%] justify-start px-4 items-center`}>
                        <MdOutlineLibraryMusic className='flex w-[15%] h-[60%] items-center justify-start mr-2' />Mi biblioteca
                    </button>
                </div>
            </div>
        </div>
    );
}
