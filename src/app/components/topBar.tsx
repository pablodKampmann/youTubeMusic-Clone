import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { FaRegWindowMinimize, FaRegWindowRestore } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BiExtension } from "react-icons/bi";

export default function TopBar() {

    return (
        <div className="h-screen">
            <div className="w-full h-[4%] flex justify-between bg-[#181414]">
                <div className='pl-8 flex justify-center items-center'>
                    <AiOutlineArrowLeft className='w-[90%] h-[90%]' />
                    <TfiReload className='w-[90%] h-[70%] ml-2' />
                    <h1 className='w-full whitespace-nowrap text-xs ml-2'>YouTube Music</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <BiExtension className=' ml-2' />
                    <HiOutlineDotsVertical className=' ml-2' />
                    <div className='flex justify-center hover:bg-white  hover:bg-opacity-5 transition duration-150 items-center w-[50px] h-full '>
                        <FaRegWindowMinimize className='' />
                    </div>
                    <div className='flex justify-center hover:bg-white  hover:bg-opacity-5 transition duration-150 items-center w-[50px] h-full '>
                        <FaRegWindowRestore className='' />
                    </div>
                    <div className='flex justify-center  hover:bg-red-800 hover:bg-opacity-90 transition duration-150 items-center w-[60px] h-full '>
                        <FaRegWindowClose className='' />
                    </div>
                </div>
            </div>
        </div>
    );
}
