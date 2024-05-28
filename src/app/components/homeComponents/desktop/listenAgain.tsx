"use client"

import { MdExplicit } from "react-icons/md";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward, IoMdPlay } from "react-icons/io";
import { useEffect, useState } from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function ListenAgain() {

    interface Song {
        name: string;
        artist: string;
        type: string;
        explicit: boolean;
        imgSrc: string;
    }


    const songs: Song[] = [
        {
            name: "Flashing Lights",
            artist: "Kanye West",
            type: "Canción",
            explicit: false,
            imgSrc: "/listenAgain/flashing_lights.jpg"
        },
        {
            name: "MY EYES",
            artist: "Travis Scott",
            type: "Canción",
            explicit: true,
            imgSrc: "/listenAgain/my_eyes.jpg"
        },
        {
            name: "MOJABI GHOST",
            artist: "Tainy y Bad Bunny",
            type: "Canción",
            explicit: true,
            imgSrc: "/listenAgain/mojabi_ghost.jpg"
        },
        {
            name: "High Fashion (con Mustard)",
            artist: "Roddy Ricch",
            type: "Canción",
            explicit: true,
            imgSrc: "/listenAgain/high_fashion.jpg"
        },
        {
            name: "Drip Too Hard",
            artist: "Lil Baby y Gunna",
            type: "Canción",
            explicit: true,
            imgSrc: "/listenAgain/drip_too_hard.jpg"
        },
        {
            name: "Father Stretch My Hands Pt. 1",
            artist: "Kanye West",
            type: "Canción",
            explicit: true,
            imgSrc: "/listenAgain/father_stretch.jpg"
        },
        {
            name: "Toosie Slide",
            artist: "Drake",
            type: "Canción",
            explicit: true,
            imgSrc: "/listenAgain/toosie_slide.jpg"
        },
        {
            name: "Cigarette Daydreams",
            artist: "Cage The Elephant",
            type: "Canción",
            explicit: false,
            imgSrc: "/listenAgain/cigarette_daydreams.jpg"
        },
        {
            name: "Passionfruit",
            artist: "Drake",
            type: "Canción",
            explicit: true,
            imgSrc: "/listenAgain/passion_fruit.jpg"
        },
        {
            name: "Fair Trade (con Travis Scott)",
            artist: "Drake",
            type: "Canción",
            explicit: true,
            imgSrc: "/listenAgain/fair_trade.jpg"
        },
        {
            name: "Objects in the Mirror",
            artist: "Mac Miller",
            type: "Canción",
            explicit: false,
            imgSrc: "/listenAgain/objects_in_the_mirror.jpg"
        },
        {
            name: "Out Of Love (con Internet Money)",
            artist: "Lil Tecca",
            type: "Canción",
            explicit: true,
            imgSrc: "/listenAgain/out_of_love.jpg"
        },
        {
            name: "LADO A LADO",
            artist: "Bhavie",
            type: "Canción",
            explicit: false,
            imgSrc: "/listenAgain/lado_a_lado.jpg"
        },
        {
            name: "Food for the Soul",
            artist: "it's murph",
            type: "Canción",
            explicit: false,
            imgSrc: "/listenAgain/food_for_the_soul.jpg"
        },
        {
            name: "Dark Red",
            artist: "Steve Lacy",
            type: "Canción",
            explicit: false,
            imgSrc: "/listenAgain/dark_red.jpg"
        },
        {
            name: "Sex, Drugs, Etc. (Sped Up Version)",
            artist: "Beach Weather",
            type: "Canción",
            explicit: false,
            imgSrc: "/listenAgain/sex_drugs,_etc.jpg"
        },
        {
            name: "Unstoppable",
            artist: "Sia",
            type: "Canción",
            explicit: false,
            imgSrc: "/listenAgain/the_greatest.jpg"
        },
        {
            name: "You Broke My Heart",
            artist: "Drake",
            type: "Canción",
            explicit: true,
            imgSrc: "/listenAgain/you_broke_mi_heart.jpg"
        },
    ];


    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    useEffect(() => {
        const scrollLeftHandler = () => {
            if (scrollContainer && typeof scrollContainer.scrollLeft !== 'undefined') {
                scrollContainer.scrollLeft -= 1000;
            }
        };

        const scrollRightHandler = () => {
            if (scrollContainer && typeof scrollContainer.scrollLeft !== 'undefined') {
                scrollContainer.scrollLeft += 1000;
            }
        };

        const scrollContainer = document.getElementById('scrollContainer');
        const scrollLeftButton = document.getElementById('scrollLeftButton');
        const scrollRightButton = document.getElementById('scrollRightButton');

        scrollLeftButton?.addEventListener('click', scrollLeftHandler);
        scrollRightButton?.addEventListener('click', scrollRightHandler);

        const checkCanScrollLeft = () => {
            if (scrollContainer) {
                setCanScrollLeft(scrollContainer.scrollLeft > 0);
            }
        };

        const checkCanScrollRight = () => {
            if (scrollContainer) {
                setCanScrollRight(scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth);
            }
        };

        checkCanScrollLeft();
        checkCanScrollRight();

        scrollContainer?.addEventListener('scroll', checkCanScrollLeft);

        scrollContainer?.addEventListener('scroll', checkCanScrollRight);

        return () => {
            scrollLeftButton?.removeEventListener('click', scrollLeftHandler);
            scrollRightButton?.removeEventListener('click', scrollRightHandler);
            scrollContainer?.removeEventListener('scroll', checkCanScrollLeft);
            scrollContainer?.removeEventListener('scroll', checkCanScrollRight);
        };
    }, []);


    return (
        <div className="h-[60%]">
            <div className="w-full flex justify-between h-fit mt-12">
                <div className="flex justify-start items-center">
                    <Image quality={100} className='w-16 rounded-full h-16 object-cover cursor-pointer' src='/userImage.jpg' alt='userImage' width={360} height={360} />
                    <div className="flex-col space-y-1 ml-4">
                        <h2 className="text-[#AAAAAA]  uppercase">Pablo Kampmann</h2>
                        <h1 className="text-3xl hover:underline cursor-pointer font-bold">Vuelve a escucharlo</h1>
                    </div>
                </div>
                <div className="flex justify-end items-end">
                    <button className="bg-transparent  border border-[#343434] hover:bg-white hover:bg-opacity-20 transition duration-150 rounded-full px-4 py-1.5 ">
                        Más
                    </button>
                    <button id="scrollLeftButton" className={`bg-transparent ${canScrollLeft ? 'opacity-100' : 'opacity-30'} ml-5 border border-[#343434] hover:bg-white hover:bg-opacity-5 transition duration-150 rounded-full p-2 `}>
                        <IoIosArrowBack size={19} />
                    </button>
                    <button id="scrollRightButton" className={`bg-transparent ${canScrollRight ? 'opacity-100' : 'opacity-30'} ml-3 border border-[#343434] hover:bg-white hover:bg-opacity-5 transition duration-150 rounded-full p-2 `}>
                        <IoIosArrowForward size={19} />
                    </button>
                </div>
            </div>

            <div id="scrollContainer" className="w-full container whitespace-nowrap pb-4 flex  h-fit mt-5 space-x-6">
                {songs.map((song, index) => (
                    <div key={index} className="relative">
                        <div className="relative w-[180px] cursor-pointer border-2 border-transparent group hover:border-[#AAAAAA] rounded-lg flex justify-center items-center">
                            <Image quality={100} className=' rounded-md group-hover:opacity-50 transition duration-150 select-none  object-cover ' src={song.imgSrc} alt={`song${index}`} width={544} height={544} />
                            <IoMdPlay className="absolute  opacity-100" size={40} />
                            <div className="absolute top-2 transition duration-150 right-2 group-hover:opacity-100 opacity-0 p-2 hover:bg-white hover:bg-opacity-30 rounded-full">
                                <HiOutlineDotsVertical size={20} className="" />
                            </div>
                        </div>
                        <h1 className="mt-2.5 font-semibold whitespace-pre-line leading-5">{song.name}</h1>
                        {song.explicit === true ? (
                            <div className="flex whitespace-break-spaces relative">
                                <MdExplicit className="text-[#B4B4B4] absolute top-0" size={19} />
                                <h2 className="relative leading-5  text-[#B2B2B2]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{song.type} • <span className="cursor-pointer hover:underline">{song.artist}</span> </h2>
                            </div>
                        ) : (
                            <div className="flex relative  whitespace-break-spaces">
                                <h2 className="relative leading-5 text-[#B2B2B2] ">{song.type} • <span className="cursor-pointer hover:underline">{song.artist}</span> </h2>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
