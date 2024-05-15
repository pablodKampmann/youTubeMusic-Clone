"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdOutlineExplore, MdExplore, MdLibraryMusic, MdOutlineLibraryMusic } from "react-icons/md";
import { usePathname } from 'next/navigation'
import { RxPlus } from "react-icons/rx";
import { IoMdPlay } from "react-icons/io";
import Link from 'next/link';
interface Props {
    minimize: boolean;
}

export default function SideBar({ minimize }: Props) {
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
        <div className={` ${minimize ? 'w-[5%]' : 'w-[19%]'} transition-all h-[91%] transform duration-300  bg-[#030303] border-r border-[#292929]`}>

            {!minimize ? (
                <div className='flex flex-col h-full'>
                    <div className='mt-2 h-fit px-2 space-y-2 flex-col'>
                        <Link href='/' className={`${pathname === '/' ? 'bg-white bg-opacity-10' : 'hover:bg-white transition duration-150 hover:bg-opacity-10'} flex text-sm tracking-wide font-medium  text-center rounded-lg  w-full justify-start px-4 items-center`}>
                            {pathname === '/' ? (
                                <GoHomeFill size={50} className='flex py-2.5 items-center justify-start mr-2' />
                            ) : (
                                <GoHome size={50} className='flex py-2.5 items-center justify-start mr-2' />
                            )}
                            Inicio
                        </Link>
                        <Link href='/explorer' className={`${pathname === '/explorer' ? 'bg-white bg-opacity-10' : 'hover:bg-white transition duration-150 hover:bg-opacity-10'} flex text-sm tracking-wide font-medium  text-center rounded-lg bg w-full  justify-start px-4 items-center`}>
                            {pathname === '/explorer' ? (
                                <MdExplore size={50} className='flex  py-2.5 items-center justify-start mr-2' />
                            ) : (
                                <MdOutlineExplore size={50} className='flex  py-2.5 items-center justify-start mr-2' />
                            )}
                            Explorar
                        </Link>
                        <Link href='/library' className={`${pathname === '/library' ? 'bg-white bg-opacity-10' : 'hover:bg-white transition duration-150 hover:bg-opacity-10'} flex whitespace-nowrap text-sm tracking-wide font-medium  text-center rounded-lg  w-full  justify-start px-4 items-center`}>
                            {pathname === '/library' ? (
                                <MdLibraryMusic size={50} className='flex  py-2.5 items-center justify-start mr-2' />
                            ) : (
                                <MdOutlineLibraryMusic size={50} className='flex  py-2.5 items-center justify-start mr-2' />
                            )}
                            Mi biblioteca
                        </Link>
                    </div>
                    <div className='border mx-5 mt-6 mb-1 flex justify-center items-center border-[#292929]'></div>
                    <button className='flex shadow-2xl justify-center whitespace-nowrap items-center mx-5 my-5 bg-[#1D1D1D] hover:bg-[#353535] transition duration-150 font-medium tracking-tight  rounded-full py-1.5 pr-2'>
                        <RxPlus className='mr-2 text-xs' size={26} /> Nueva lista
                    </button>
                    <div className='h-screen overflow-x-hidden transition duration-500 shadow-2xl border-t py-2 border-b border-transparent hover:border-[#292929] w-full mb-2  overflow-y-auto   pl-2 space-y-2 pr-2'>
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
            ) : (
                <div className="flex flex-col h-full">
                    <div className='mt-2 px-2 space-y-2 flex-col h-full'>
                        <Link href='/' className={`${pathname === '/' ? 'bg-white bg-opacity-10' : 'hover:bg-white transition duration-150 hover:bg-opacity-10'} rounded-lg flex flex-col justify-center items-center py-3 text-xs font-medium w-full`}>
                            {pathname === '/' ? (
                                <GoHomeFill size={24} className=' text-white mb-1' />
                            ) : (
                                <GoHome size={24} className=' text-white mb-1' />
                            )}
                            Inicio
                        </Link>
                        <Link href='/explorer' className={`${pathname === '/explorer' ? 'bg-white bg-opacity-10' : 'hover:bg-white transition duration-150 hover:bg-opacity-10'} rounded-lg flex flex-col justify-center items-center py-3 text-xs font-medium w-full`}>
                            {pathname === '/explorer' ? (
                                <MdExplore size={24} className=' text-white mb-1' />
                            ) : (
                                <MdOutlineExplore size={24} className=' text-white mb-1' />
                            )}
                            Explorar
                        </Link>
                        <Link href='/library' className={`${pathname === '/library' ? 'bg-white bg-opacity-10' : 'hover:bg-white transition duration-150 hover:bg-opacity-10'} rounded-lg text-center flex flex-col justify-center items-center py-3 text-xs font-medium w-full`}>
                            {pathname === '/library' ? (
                                <MdLibraryMusic size={24} className=' text-white mb-1' />
                            ) : (
                                <MdOutlineLibraryMusic size={24} className=' text-white mb-1' />
                            )}
                            {minimize ? (
                                "Biblioteca"
                            ) : (
                                "Mi biblioteca"
                            )}
                        </Link>
                    </div>
                </div>
            )}

        </div>
    );
}
