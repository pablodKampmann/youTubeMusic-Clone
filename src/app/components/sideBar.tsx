"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoMenuOutline } from "react-icons/io5";
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdOutlineExplore, MdExplore, MdLibraryMusic, MdOutlineLibraryMusic } from "react-icons/md";
import { usePathname } from 'next/navigation'
import { RxPlus } from "react-icons/rx";
import { IoMdPlay } from "react-icons/io";

export default function TopBar() {
    const pathname = usePathname();

    return (
        <div className="w-[15%] h-full flex flex-col bg-[#030303] border-r border-[#292929]">
            <div className='mt-2 h-fit px-2 space-y-2 flex-col'>
                <button className={`${pathname === '/' ? 'bg-white bg-opacity-10' : 'hover:bg-white transition duration-150 hover:bg-opacity-10'} flex text-sm tracking-wide font-medium  text-center rounded-lg  w-full justify-start px-4 items-center`}>
                    <GoHomeFill className='flex w-[15%] h-[60%] py-2.5 items-center justify-start mr-2' />Inicio
                </button>
                <button className={`${pathname === '/daww' ? 'bg-white bg-opacity-10' : 'hover:bg-white transition duration-150 hover:bg-opacity-10'} flex text-sm tracking-wide font-medium  text-center rounded-lg bg w-full  justify-start px-4 items-center`}>
                    <MdOutlineExplore className='flex w-[15%] h-[60%] py-2.5 items-center justify-start mr-2' />Explorar
                </button>
                <button className={`${pathname === '/bilito' ? 'bg-white bg-opacity-10' : 'hover:bg-white transition duration-150 hover:bg-opacity-10'} flex hover: text-sm tracking-wide font-medium  text-center rounded-lg  w-full  justify-start px-4 items-center`}>
                    <MdOutlineLibraryMusic className='flex w-[15%] h-[60%] py-2.5 items-center justify-start mr-2' />Mi biblioteca
                </button>
            </div>
            <div className='border mx-5 mt-6 mb-1 flex justify-center items-center border-[#292929]'></div>
            <button className='flex justify-center items-center mx-5 my-5 bg-[#1D1D1D] hover:bg-[#353535] transition duration-150 font-medium tracking-tight  rounded-full py-1.5 pr-2'>
                <RxPlus className='mr-2 text-xs' size={26} /> Nueva lista
            </button>
            <div className=' w-full overflow-y-auto  h-full pl-2 space-y-2 pr-4'>
                <button className='group w-full relative hover:bg-[#353535] transition duration-150 px-4 py-2 text-left rounded-lg'>
                    <h1 className='text-base font-medium'>Miusic Definitive</h1>
                    <p className='text-xs text-[#B4B4B4]'>Pablo Kampmann</p>
                    <div className=' absolute group-hover:opacity-100 opacity-0 transition-opacity duration-150 top-4 right-4 bg-white rounded-full p-1 '>
                        <IoMdPlay size={18} className='text-black pl-0.5' />
                    </div>
                </button>
                <button className='group w-full relative hover:bg-[#353535] transition duration-150 px-4 py-2 text-left rounded-lg'>
                    <h1 className='text-base font-medium'>Miusic Definitive</h1>
                    <p className='text-xs text-[#B4B4B4]'>Pablo Kampmann</p>
                    <div className=' absolute group-hover:opacity-100 opacity-0 transition-opacity duration-150 top-4 right-4 bg-white rounded-full p-1 '>
                        <IoMdPlay size={18} className='text-black pl-0.5' />
                    </div>
                </button>
                <button className='group w-full relative hover:bg-[#353535] transition duration-150 px-4 py-2 text-left rounded-lg'>
                    <h1 className='text-base font-medium'>Miusic Definitive</h1>
                    <p className='text-xs text-[#B4B4B4]'>Pablo Kampmann</p>
                    <div className=' absolute group-hover:opacity-100 opacity-0 transition-opacity duration-150 top-4 right-4 bg-white rounded-full p-1 '>
                        <IoMdPlay size={18} className='text-black pl-0.5' />
                    </div>
                </button>
                <button className='group w-full relative hover:bg-[#353535] transition duration-150 px-4 py-2 text-left rounded-lg'>
                    <h1 className='text-base font-medium'>Miusic Definitive</h1>
                    <p className='text-xs text-[#B4B4B4]'>Pablo Kampmann</p>
                    <div className=' absolute group-hover:opacity-100 opacity-0 transition-opacity duration-150 top-4 right-4 bg-white rounded-full p-1 '>
                        <IoMdPlay size={18} className='text-black pl-0.5' />
                    </div>
                </button>
                <button className='group w-full relative hover:bg-[#353535] transition duration-150 px-4 py-2 text-left rounded-lg'>
                    <h1 className='text-base font-medium'>Miusic Definitive</h1>
                    <p className='text-xs text-[#B4B4B4]'>Pablo Kampmann</p>
                    <div className=' absolute group-hover:opacity-100 opacity-0 transition-opacity duration-150 top-4 right-4 bg-white rounded-full p-1 '>
                        <IoMdPlay size={18} className='text-black pl-0.5' />
                    </div>
                </button>
                <button className='group w-full relative hover:bg-[#353535] transition duration-150 px-4 py-2 text-left rounded-lg'>
                    <h1 className='text-base font-medium'>Miusic Definitive</h1>
                    <p className='text-xs text-[#B4B4B4]'>Pablo Kampmann</p>
                    <div className=' absolute group-hover:opacity-100 opacity-0 transition-opacity duration-150 top-4 right-4 bg-white rounded-full p-1 '>
                        <IoMdPlay size={18} className='text-black pl-0.5' />
                    </div>
                </button>
                <button className='group w-full relative hover:bg-[#353535] transition duration-150 px-4 py-2 text-left rounded-lg'>
                    <h1 className='text-base font-medium'>Miusic Definitive</h1>
                    <p className='text-xs text-[#B4B4B4]'>Pablo Kampmann</p>
                    <div className=' absolute group-hover:opacity-100 opacity-0 transition-opacity duration-150 top-4 right-4 bg-white rounded-full p-1 '>
                        <IoMdPlay size={18} className='text-black pl-0.5' />
                    </div>
                </button>
                <button className='group w-full relative hover:bg-[#353535] transition duration-150 px-4 py-2 text-left rounded-lg'>
                    <h1 className='text-base font-medium'>Miusic Definitive</h1>
                    <p className='text-xs text-[#B4B4B4]'>Pablo Kampmann</p>
                    <div className=' absolute group-hover:opacity-100 opacity-0 transition-opacity duration-150 top-4 right-4 bg-white rounded-full p-1 '>
                        <IoMdPlay size={18} className='text-black pl-0.5' />
                    </div>
                </button>
            </div>

        </div>
    );
}
