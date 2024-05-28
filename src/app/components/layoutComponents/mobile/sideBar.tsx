"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdOutlineExplore, MdExplore, MdLibraryMusic, MdOutlineLibraryMusic } from "react-icons/md";
import { usePathname } from 'next/navigation'
import { RxPlus } from "react-icons/rx";
import { IoMdPlay } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";

import Link from 'next/link';
interface Props {
    minimize: boolean;
    handleSideBar: (action: boolean) => void;
}

export default function SideBar({ minimize, handleSideBar }: Props) {
    const pathname = usePathname();

    interface Playlist {
        name: string;
        info: string;
    }

    const playlists: Playlist[] = [
        {
            name: "Miusic Definitive",
            info: "Pablo Kampmann",
        },
        {
            name: "THE.GOATEST.PLAYLIST",
            info: "Pablo Kampmann",
        },
        {
            name: "You knoww :d",
            info: "Pablo Kampmann",
        },
        {
            name: "🎧💊🎧",
            info: "Pablo Kampmann",
        },
        {
            name: "Música que me gusta",
            info: "Generada automáticamente",
        },
        {
            name: "Clasic",
            info: "Pablo Kampmann",
        },
        {
            name: "Rock🎸",
            info: "Pablo Kampmann",
        },
        {
            name: "RECLRPQTP",
            info: "Pablo Kampmann",
        },
        {
            name: "Sadd",
            info: "Pablo Kampmann",
        },
        {
            name: "Episodios para más tarde",
            info: "Generada automáticamente",
        },
    ]

    return (
        <div className={`${minimize ? 'w-[0%]' : 'w-[60%] border-r border-[#292929]'}   absolute overflow-y-hidden  top-0 bg-[#030303]  transition-all transform duration-300 h-full`}>
            {!minimize && (
                <div className='flex-col flex h-full'>
                    <div className='flex justify-start items-center p-6'>
                        <TfiClose onClick={() => handleSideBar(!minimize)} className='text-[#DFDFDF] mr-6' size={20} />
                        <Image priority={true} quality={100} className='w-20 object-cover ' src='/youTubeMusic-icon.png' alt='youTubeMusic-icon' width={3000} height={912} />
                    </div>
                    <div className='flex-col flex items-center px-2 space-y-2'>
                        <Link onClick={() => handleSideBar(!minimize)} href='/' className={`${pathname === '/' ? 'bg-white bg-opacity-10' : ' transition duration-150 '} flex text-base tracking-wide whitespace-nowrap font-semibold  text-center rounded-lg  w-full justify-start px-4 items-center`}>
                            {pathname === '/' ? (
                                <GoHomeFill size={44} className='flex py-2.5 items-center justify-start mr-2' />
                            ) : (
                                <GoHome size={44} className='flex py-2.5 items-center justify-start mr-2' />
                            )}
                            Inicio
                        </Link>
                        <Link onClick={() => handleSideBar(!minimize)} href='/explorer' className={`${pathname === '/explorer' ? 'bg-white bg-opacity-10' : ' transition duration-150 '} flex text-base whitespace-nowrap tracking-wide font-semibold  text-center rounded-lg  w-full justify-start px-4 items-center`}>
                            {pathname === '/explorer' ? (
                                <MdExplore size={44} className='flex py-2.5 items-center justify-start mr-2' />
                            ) : (
                                <MdOutlineExplore size={44} className='flex py-2.5 items-center justify-start mr-2' />
                            )}
                            Explorar
                        </Link>
                        <Link onClick={() => handleSideBar(!minimize)} href='/library' className={`${pathname === '/library' ? 'bg-white bg-opacity-10' : ' transition duration-150 '} flex text-base whitespace-nowrap tracking-wide font-semibold  text-center rounded-lg  w-full justify-start px-4 items-center`}>
                            {pathname === '/library' ? (
                                <MdLibraryMusic size={44} className='flex py-2.5 items-center justify-start mr-2' />
                            ) : (
                                <MdOutlineLibraryMusic size={44} className='flex py-2.5 items-center justify-start mr-2' />
                            )}
                            Mi biblioteca
                        </Link>
                    </div>
                    <div className='border mx-5 mt-6 mb-1 flex justify-center items-center border-[#292929]'></div>
                    <div className='flex shadow-2xl justify-center whitespace-nowrap items-center mx-5 my-5 bg-[#1D1D1D] transition duration-150 font-medium tracking-tight rounded-full py-1.5'>
                        <RxPlus className='mr-2' size={22} /> Nueva lista
                    </div>
                    <div className='h-full overflow-x-hidden transition duration-500 shadow-2xl p-2 w-full mb-2 overflow-y-auto space-y-2 '>
                        {playlists.map((playlist, index) => (
                            <button key={index} className='group whitespace-nowrap focus:outline-none w-full relative hover:bg-[#353535] transition duration-150 px-4 py-2 text-left rounded-lg'>
                                <h1 className='text-base group-hover:w-[80%] truncate text-start  font-medium'>{playlist.name}</h1>
                                <p className='text-xs text-[#B4B4B4]'>{playlist.info}</p>
                                <div className=' absolute group-hover:opacity-100 opacity-0 transition-opacity duration-150 top-4 right-4 bg-white rounded-full p-1 '>
                                    <IoMdPlay size={18} className='text-black pl-0.5' />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
