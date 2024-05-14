"use client"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from 'react';

export default function MoodAndGenres() {

    interface Genre {
        name: string;
        color: string;
    }

    const genres: Genre[] = [
        {
            name: "Hip-Hop",
            color: "bg-[#00A513]",
        },
        {
            name: "Calma",
            color: "bg-[#A4C5FF]",
        },
        {
            name: "Hiphop en español",
            color: "bg-[#E24B00]",
        },
        {
            name: "Transporte",
            color: "bg-[#FFC200]",
        },
        {
            name: "Dosis de energía",
            color: "bg-[#FFE780]",
        },
        {
            name: "Fiesta",
            color: "bg-[#E24B00]",
        },
        {
            name: "R&B y soul",
            color: "bg-[#7B3EDB]",
        },
        {
            name: "Dance y electrónica",
            color: "bg-[#0092BF]",
        },

        {
            name: "Latina",
            color: "bg-[#FFC200]",
        },
        {
            name: "Concentración",
            color: "bg-[#CCCCCC]",
        },
        {
            name: "Ejercicio",
            color: "bg-[#FF8D40]",
        },
        {
            name: "Romance",
            color: "bg-[#CC0000]",
        },
        {
            name: "Los 2010",
            color: "bg-[#A4FFA4]",
        },
        {
            name: "Sentirse bien",
            color: "bg-[#0092BF]",
        },
        {
            name: "Lucha afroestadounidense",
            color: "bg-[#1D1D1D]",
        },
        {
            name: "Triste",
            color: "bg-[#8C8C8C]",
        },
        {
            name: "Indie y alternativa",
            color: "bg-[#CCCCCC]",
        },
        {
            name: "Pop latino",
            color: "bg-[#FF78FF]",
        },
        {
            name: "Los 2000",
            color: "bg-[#A4FFA4]",
        },
        {
            name: "Pop",
            color: "bg-[#FF78FF]",
        },
        {
            name: "Música Mexicana",
            color: "bg-[#00A513]",
        },
        {
            name: "Los 90",
            color: "bg-[#A4FFA4]",
        },
        {
            name: "Rock argentino",
            color: "bg-[#CC0000]",
        },
        {
            name: "Rock",
            color: "bg-[#FF8D40]",
        },
        {
            name: "Los 90",
            color: "bg-[#00A513]",
        },
        {
            name: "Rock argentino",
            color: "bg-[#A4C5FF]",
        },
        {
            name: "Rock",
            color: "bg-[#E24B00]",
        },
        {
            name: "De temporada",
            color: "bg-[#FFC200]",
        },
        {
            name: "Tropical",
            color: "bg-[#FFE780]",
        },
        {
            name: "Dormir",
            color: "bg-[#E24B00]",
        },
        {
            name: "Rap de Reino Unido",
            color: "bg-[#7B3EDB]",
        },
        {
            name: "Orgullo LGBTQ+",
            color: "bg-[#0092BF]",
        },
        {
            name: "Familia",
            color: "bg-[#CCCCCC]",
        },
        {
            name: "Rock en español",
            color: "bg-[#FF8D40]",
        },
        {
            name: "Reggae y caribeña",
            color: "bg-[#CC0000]",
        },
        {
            name: "Cumbia",
            color: "bg-[#A4FFA4]",
        },
        {
            name: "Africana",
            color: "bg-[#0092BF]",
        },
        {
            name: "Folk y tradicional",
            color: "bg-[#1D1D1D]",
        },
        {
            name: "Brasileña",
            color: "bg-[#8C8C8C]",
        },
        {
            name: "Musicales y bandas sonoras",
            color: "bg-[#CCCCCC]",
        },
        {
            name: "Los 70",
            color: "bg-[#FF78FF]",
        },
        {
            name: "Los 80",
            color: "bg-[#A4FFA4]",
        },
        {
            name: "Jazz",
            color: "bg-[#CC0000]",
        },
        {
            name: "Década de 1960",
            color: "bg-[#FF8D40]",
        },
        {
            name: "Country",
            color: "bg-[#00A513]",
        },
        {
            name: "Metal",
            color: "bg-[#A4FFA4]",
        },
        {
            name: "Blues",
            color: "bg-[#FF78FF]",
        },
        {
            name: "Hiphop francés",
            color: "bg-[#00A513]",
        },
        {
            name: "Cristiana y góspel",
            color: "bg-[#A4C5FF]",
        },
        {
            name: "Los 50",
            color: "bg-[#E24B00]",
        },
        {
            name: "Clásica",
            color: "bg-[#FFC200]",
        },
        {
            name: "Navidad",
            color: "bg-[#FFE780]",
        },
        {
            name: "K-Pop",
            color: "bg-[#E24B00]",
        },
        {
            name: "Hiphop coreano",
            color: "bg-[#7B3EDB]",
        },
        {
            name: "Navidad",
            color: "bg-[#00A513]",
        },
        {
            name: "K-Pop",
            color: "bg-[#A4C5FF]",
        },
        {
            name: "Hiphop coreano",
            color: "bg-[#E24B00]",
        },
        {
            name: "Árabe",
            color: "bg-[#FFC200]",
        },
        {
            name: "Iraquí",
            color: "bg-[#FFE780]",
        },
        {
            name: "Rap japonés",
            color: "bg-[#E24B00]",
        },
        {
            name: "Bollywood e India",
            color: "bg-[#7B3EDB]",
        },
        {
            name: "J-Pop",
            color: "bg-[#0092BF]",
        },
        {
            name: "Hiphop árabe",
            color: "bg-[#FFC200]",
        },
        {
            name: "Hiphop alemán",
            color: "bg-[#CCCCCC]",
        },
        {
            name: "Hiphop desi",
            color: "bg-[#FF8D40]",
        },
        {
            name: "Hiphop turco",
            color: "bg-[#CC0000]",
        },
        {
            name: "Hiphop brasileño",
            color: "bg-[#A4FFA4]",
        },
        {
            name: "Hip-Hop",
            color: "bg-[#00A513]",
        },
        {
            name: "Calma",
            color: "bg-[#A4C5FF]",
        },
        {
            name: "Hiphop en español",
            color: "bg-[#E24B00]",
        },
        {
            name: "Transporte",
            color: "bg-[#FFC200]",
        },
        {
            name: "Dosis de energía",
            color: "bg-[#FFE780]",
        },
        {
            name: "Fiesta",
            color: "bg-[#E24B00]",
        },
        {
            name: "R&B y soul",
            color: "bg-[#7B3EDB]",
        },
        {
            name: "Dance y electrónica",
            color: "bg-[#0092BF]",
        },
        {
            name: "Latina",
            color: "bg-[#FFC200]",
        },
        {
            name: "Concentración",
            color: "bg-[#CCCCCC]",
        },
        {
            name: "Ejercicio",
            color: "bg-[#FF8D40]",
        },
        {
            name: "Romance",
            color: "bg-[#CC0000]",
        },
        {
            name: "Los 2010",
            color: "bg-[#A4FFA4]",
        },
        {
            name: "Sentirse bien",
            color: "bg-[#0092BF]",
        }
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
            <div className="w-full flex justify-between h-fit mt-6">
                <h1 className="text-3xl hover:underline cursor-pointer font-bold">Ánimo y géneros</h1>
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

            <div id="scrollContainer" className="w-full  container pb-4 grid grid-rows-4 grid-flow-col gap-4 mt-5 ">
                {genres.map((genre, index) => (
                    <div key={index} className="relative ">
                        <button className="w-44 text-start relative shadow-2xl pl-6 flex justify-start items-center font-bold h-12 rounded-lg bg-[#292929] hover:bg-opacity-80 transition duration-150">
                            <div className={`h-full absolute left-0 w-2 ${genre.color} rounded-l-lg`}></div>
                            {genre.name}
                        </button>
                    </div>
                ))}
            </div >
        </div>
    );
}
