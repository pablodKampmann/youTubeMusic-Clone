"use client"

import { MdExplicit } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function AlbumsAndSingles() {

    interface Album {
        name: string;
        artist: string;
        type: string;
        explicit: boolean;
        imgSrc: string;
    }

    const albums: Album[] = [
        {
            name: "THE ROOF IS ON FIRE",
            artist: "Trueno",
            type: "Single",
            explicit: true,
            imgSrc: "/newAlbumsAndSingles/the_roof_is_on_fire.jpg"
        },
        {
            name: "Radical Optimism",
            artist: "Dua Lipa",
            type: "Álbum",
            explicit: true,
            imgSrc: "/newAlbumsAndSingles/radical_optimism.jpg"
        },
        {
            name: "Not Like Us",
            artist: "Kendrick Lamar",
            type: "Single",
            explicit: true,
            imgSrc: "/newAlbumsAndSingles/not_like_us.jpg"
        },
        {
            name: "meet the grahams",
            artist: "Kendrick Lamar",
            type: "Single",
            explicit: true,
            imgSrc: "/newAlbumsAndSingles/meet_the_grahams.jpg"
        },
        {
            name: "euphoria",
            artist: "Kendrick Lamar",
            type: "Single",
            explicit: true,
            imgSrc: "/newAlbumsAndSingles/euphoria.jpg"
        },
        {
            name: "Number 2 / Never Last",
            artist: "Lil Tecca",
            type: "Single",
            explicit: true,
            imgSrc: "/newAlbumsAndSingles/number_2_never_last.jpg"
        },
        {
            name: "I Had Some Help (con Morgan Wallen)",
            artist: "Post Malone",
            type: "Single",
            explicit: true,
            imgSrc: "/newAlbumsAndSingles/i_had_some_help.jpg"
        },
        {
            name: "Porque Puedo",
            artist: "Eladio Carrión",
            type: "EP",
            explicit: true,
            imgSrc: "/newAlbumsAndSingles/porque_puedo.jpg"
        },
        {
            name: "You weren't special",
            artist: "KazetX5 y Shiloh Dynasty",
            type: "Single",
            explicit: true,
            imgSrc: "/newAlbumsAndSingles/you_werent_special.jpg"
        },
        {
            name: "Band-aid for the Soul",
            artist: "Shiloh Dynasty y Lit Cosmo",
            type: "Single",
            explicit: false,
            imgSrc: "/newAlbumsAndSingles/band_aid_for_the_soul.jpg"
        },
        {
            name: "Sorrow 2",
            artist: "IluvUso y Shiloh Dynasty",
            type: "Single",
            explicit: true,
            imgSrc: "/newAlbumsAndSingles/sorrow.jpg"
        },
        {
            name: "Trapped and Confused",
            artist: "IluvUso y Shiloh Dynasty",
            type: "Single",
            explicit: false,
            imgSrc: "/newAlbumsAndSingles/trapped_and_confused.jpg"
        },
        {
            name: "Is ThiS tOo Much",
            artist: "PARKMOUM y Shiloh Dynasty",
            type: "Single",
            explicit: true,
            imgSrc: "/newAlbumsAndSingles/is_this_too_much.jpg"
        },
        {
            name: "Father Forgive Me - Sped Up",
            artist: "gsounds99 y Shiloh Dynasty",
            type: "Single",
            explicit: true,
            imgSrc: "/newAlbumsAndSingles/father_forgive_me.jpg"
        },
        {
            name: "life bonds",
            artist: "Kurochuu y Shiloh Dynasty",
            type: "Álbum",
            explicit: false,
            imgSrc: "/newAlbumsAndSingles/life_bonds.jpg"
        },
        {
            name: "Voicemail",
            artist: "M Row y Shiloh Dynasty",
            type: "Single",
            explicit: true,
            imgSrc: "/newAlbumsAndSingles/voicemail.jpg"
        },
        {
            name: "Sad Vibes",
            artist: "IluvUso y Shiloh Dynasty",
            type: "Single",
            explicit: false,
            imgSrc: "/newAlbumsAndSingles/sad_vibes.jpg"
        },
        {
            name: "Pain Makes You Human",
            artist: "Shiloh Dynasty y poofi.",
            type: "Single",
            explicit: false,
            imgSrc: "/newAlbumsAndSingles/pain_makes_you_human.jpg"
        },
        {
            name: "Sin ti no se que hacer",
            artist: "Axleh, Alexx Bau y Shiloh Dynasty",
            type: "Single",
            explicit: false,
            imgSrc: "/newAlbumsAndSingles/sin_ti_no_se_que_hacer.jpg"
        },
        {
            name: "Sad (Slowed + Reverb)",
            artist: "Shiloh Dynasty y violini5t",
            type: "Single",
            explicit: false,
            imgSrc: "/newAlbumsAndSingles/sad.jpg"
        },
        {
            name: "One more time",
            artist: "Kurochuu y Shiloh Dynasty",
            type: "Single",
            explicit: false,
            imgSrc: "/newAlbumsAndSingles/one_more_time.jpg"
        },
        {
            name: "Cry to at 3am",
            artist: "Kidd Flyp y Shiloh Dynasty",
            type: "Single",
            explicit: false,
            imgSrc: "/newAlbumsAndSingles/cry_to_at_3am.jpg"
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
            <div className="w-full flex justify-between h-fit mt-20">
                <h1 className="text-3xl hover:underline cursor-pointer font-bold">Álbumes y singles nuevos</h1>
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
                {albums.map((album, index) => (
                    <div key={index} className="relative">
                        <div className="relative w-[170px] group cursor-pointer border-2 border-transparent transition duration-300 hover:border-[#AAAAAA] rounded-lg flex justify-center items-center">
                            <div className="group-hover:opacity-70 opacity-0 transition duration-150">
                                <div className="absolute inset-0  bg-gradient-to-b from-black from-0% to-transparent to-60% rounded"></div>
                            </div>
                            <Image quality={100} className='  rounded-md select-none  object-cover ' src={album.imgSrc} alt={`album${index}`} width={544} height={544} />
                            <div className="absolute hover:bg-opacity-100 hover:scale-125  transition duration-150  bg-black rounded-full bg-opacity-60 p-2 right-5 bottom-5 group-hover:opacity-100  opacity-0">
                                <IoMdPlay className="pl-1" size={24} />
                            </div>
                            <div className="absolute hover:bg-opacity-30 hover:bg-white transition duration-150 rounded-full p-2 right-2 top-2 group-hover:opacity-100  opacity-0">
                                <HiOutlineDotsVertical size={20} />
                            </div>
                        </div>
                        <h1 className="mt-2.5 font-semibold hover:underline cursor-pointer whitespace-pre-line leading-5">{album.name}</h1>
                        {album.explicit === true ? (
                            <div className="flex text-[#B4B4B4]  whitespace-break-spaces relative">
                                <MdExplicit className=" absolute top-0" size={19} />
                                <h2 className="relative leading-5 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{album.type} • <span className="cursor-pointer hover:underline">{album.artist}</span> </h2>
                            </div>
                        ) : (
                            <div className="flex relative  text-[#B2B2B2] whitespace-break-spaces">
                                <h2 className="relative leading-5  ">{album.type} • <span className="cursor-pointer hover:underline">{album.artist}</span> </h2>
                            </div>
                        )}
                    </div>
                ))}
            </div >
        </div>
    );
}
