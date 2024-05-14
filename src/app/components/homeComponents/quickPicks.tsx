import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdExplicit } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";
import { AiFillLike, AiFillDislike, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function ListenAgain() {

    interface Song {
        name: string;
        info: string;
        explicit: boolean;
        imgSrc: string;
    }

    const songs: Song[] = [
        {
            name: "Bitch, Don’t Kill My Vibe",
            info: "Kendrick Lamar • good kid, m.A.A.d. city • 2012",
            explicit: true,
            imgSrc: "/quickPicks/bitch_dont_kill_my_vibe.jpg"
        },
        {
            name: "Hummingbird",
            info: "Metro Boomin y James Blake • METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE)",
            explicit: false,
            imgSrc: "/quickPicks/hummingbird.jpg"
        },
        {
            name: "NEVER LEFT",
            info: "Lil Tecca • We Love You Tecca 2 • 2021",
            explicit: true,
            imgSrc: "/quickPicks/never_left.jpg"
        },
        {
            name: "FE!N (con Playboi Carti)",
            info: "Travis Scott • UTOPIA • 2023",
            explicit: true,
            imgSrc: "/quickPicks/fein.jpg"
        },
        {
            name: "Erase Your Social",
            info: "Lil Uzi Vert • The Perfect LUV Tape • 2016",
            explicit: true,
            imgSrc: "/quickPicks/erase_your_social.jpg"
        },
        {
            name: "SICKO MODE",
            info: "Travis Scott • ASTROWORLD • 2018",
            explicit: true,
            imgSrc: "/quickPicks/sicko_mode.jpg"
        },
        {
            name: "Si Veo a Tu Mamá",
            info: "Bad Bunny • YHLQMDLG • 2020",
            explicit: false,
            imgSrc: "/quickPicks/si_veo_a_tu_mama.jpg"
        },
        {
            name: "White Iverson",
            info: "Post Malone • Stoney (Deluxe) • 2016",
            explicit: true,
            imgSrc: "/quickPicks/white_iverson.jpg"
        },
        {
            name: "Borderline",
            info: "Tame Impala • The Slow Rush • 2020",
            explicit: false,
            imgSrc: "/quickPicks/borderline.jpg"
        },
        {
            name: "You Were Right",
            info: "RÜFÜS DU SOL • Bloom • 2016",
            explicit: false,
            imgSrc: "/quickPicks/you_were_right.jpg"
        },
        {
            name: "LOVE. (con Zacari)",
            info: "Kendrick Lamar • DAMN. COLLECTORS EDITION. • 2017",
            explicit: true,
            imgSrc: "/quickPicks/love.jpg"
        },
        {
            name: "Objects in the Mirror",
            info: "Mac Miller • Watching Movies with the Sound Off • 2013",
            explicit: false,
            imgSrc: "/quickPicks/objects_in_the_mirror.jpg"
        },
    ];

    return (
        <div className="w-full  bg-[#030303] border border-[#292929] bg-opacity-30 py-3 mt-16 px-1 rounded-lg shadow-3xl">
            <div className="w-full flex justify-between h-fit ">
                <div className="flex justify-start items-center">
                    <div className="flex-col space-y-1 ml-4">
                        <h2 className="text-[#AAAAAA]  uppercase">INICIA UNA RADIO A PARTIR DE UNA CANCIÓN</h2>
                        <h1 className="text-3xl hover:underline cursor-pointer font-bold">Selecciones rápidas</h1>
                    </div>
                </div>
                <div className="flex justify-end items-end mr-4">
                    <button className="bg-transparent  border border-[#343434] hover:bg-white hover:bg-opacity-20 transition duration-150 rounded-full px-4 py-1.5 ">
                        Reproducir todo
                    </button>
                    <button className="bg-transparent ml-5 border border-[#343434] hover:bg-white hover:bg-opacity-5 transition duration-150 rounded-full p-2 ">
                        <IoIosArrowBack size={19} />
                    </button>
                    <button className="bg-transparent ml-3 border border-[#343434] hover:bg-white hover:bg-opacity-5 transition duration-150 rounded-full p-2 ">
                        <IoIosArrowForward size={19} />
                    </button>
                </div>
            </div>

            <div className="flex justify-center px-6 mt-4 space-x-4 container w-full  h-[260px]">
                
                <div className="flex-col flex justify-center items-center w-[33.3%] h-full ">
                    {songs.slice(0, 4).map((song, index) => (
                        <div key={index} className="relative flex h-1/4 hover:border-[#343434] border-2 border-transparent rounded-lg cursor-pointer group w-full justify-start  items-center">
                            <div className="relative w-[20%] h-[20%]  group-hover:opacity-100 cursor-pointer transition duration-300 hover:shadow-2xl rounded-lg flex justify-center items-center">
                                <Image quality={100} className=' h-[52px] w-[52px] group-hover:opacity-50 transition duration-150 rounded-md select-none  object-cover ' src={song.imgSrc} alt={`song${index}`} width={120} height={120} />
                                <IoMdPlay className="absolute group-hover:opacity-100  opacity-0 transition duration-150" size={22} />
                            </div>
                            <div className="flex-col ml-2 mb-2 group-hover:w-[35%]  w-[70%]">
                                <h1 className="mt-2.5 font-semibold truncate leading-5">{song.name}</h1>
                                {song.explicit === true ? (
                                    <div className="flex whitespace-break-spaces relative">
                                        <MdExplicit className="text-[#B4B4B4] absolute top-0" size={19} />
                                        <h2 className="  leading-5 truncate  cursor-pointer hover:underline text-[#B2B2B2]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{song.info}</h2>
                                    </div>
                                ) : (
                                    <div className="flex relative  whitespace-break-spaces">
                                        <h2 className=" leading-5  truncate text-[#B2B2B2] cursor-pointer hover:underline">{song.info}</h2>
                                    </div>
                                )}
                            </div>
                            <div className="absolute group-hover:opacity-100 transition duration-150 right-4 space-x-1 opacity-0 flex justify-center items-center">
                                <AiOutlineDislike className="hover:bg-white transition duration-150 rounded-full p-1.5 hover:bg-opacity-10" size={36} />
                                <AiOutlineLike className="hover:bg-white transition duration-150 rounded-full p-1.5 hover:bg-opacity-10" size={36} />
                                <HiOutlineDotsVertical className="hover:bg-white transition duration-150 rounded-full p-1.5 hover:bg-opacity-10" size={36} />
                            </div>
                        </div >
                    ))}


                </div>

                <div className="flex-col flex justify-center items-center w-[33.3%] h-full ">
                    {songs.slice(4, 8).map((song, index) => (
                        <div key={index} className="relative flex h-1/4 hover:border-[#343434] border-2 border-transparent rounded-lg cursor-pointer group w-full justify-start  items-center">
                            <div className="relative w-[20%] h-[20%]  group-hover:opacity-100 cursor-pointer transition duration-300 hover:shadow-2xl rounded-lg flex justify-center items-center">
                                <Image quality={100} className=' h-[52px] w-[52px] group-hover:opacity-50 transition duration-150 rounded-md select-none  object-cover ' src={song.imgSrc} alt={`song${index}`} width={120} height={120} />
                                <IoMdPlay className="absolute group-hover:opacity-100  opacity-0 transition duration-150" size={22} />
                            </div>
                            <div className="flex-col ml-2 mb-2 group-hover:w-[35%]  w-[70%]">
                                <h1 className="mt-2.5 font-semibold truncate leading-5">{song.name}</h1>
                                {song.explicit === true ? (
                                    <div className="flex whitespace-break-spaces relative">
                                        <MdExplicit className="text-[#B4B4B4] absolute top-0" size={19} />
                                        <h2 className="  leading-5 truncate  cursor-pointer hover:underline text-[#B2B2B2]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{song.info}</h2>
                                    </div>
                                ) : (
                                    <div className="flex relative  whitespace-break-spaces">
                                        <h2 className=" leading-5  truncate text-[#B2B2B2] cursor-pointer hover:underline">{song.info}</h2>
                                    </div>
                                )}
                            </div>
                            <div className="absolute group-hover:opacity-100 transition duration-150 right-4 space-x-1 opacity-0 flex justify-center items-center">
                                <AiOutlineDislike className="hover:bg-white transition duration-150 rounded-full p-1.5 hover:bg-opacity-10" size={36} />
                                <AiOutlineLike className="hover:bg-white transition duration-150 rounded-full p-1.5 hover:bg-opacity-10" size={36} />
                                <HiOutlineDotsVertical className="hover:bg-white transition duration-150 rounded-full p-1.5 hover:bg-opacity-10" size={36} />
                            </div>
                        </div >
                    ))}


                </div>

                <div className="flex-col flex justify-center items-center w-[33.3%] h-full ">
                    {songs.slice(8, 12).map((song, index) => (
                        <div key={index} className="relative flex h-1/4 hover:border-[#343434] border-2 border-transparent rounded-lg cursor-pointer group w-full justify-start  items-center">
                            <div className="relative w-[20%] h-[20%]  group-hover:opacity-100 cursor-pointer transition duration-300 hover:shadow-2xl rounded-lg flex justify-center items-center">
                                <Image quality={100} className=' h-[52px] w-[52px] group-hover:opacity-50 transition duration-150 rounded-md select-none  object-cover ' src={song.imgSrc} alt={`song${index}`} width={120} height={120} />
                                <IoMdPlay className="absolute group-hover:opacity-100  opacity-0 transition duration-150" size={22} />
                            </div>
                            <div className="flex-col ml-2 mb-2 group-hover:w-[35%]  w-[70%]">
                                <h1 className="mt-2.5 font-semibold truncate leading-5">{song.name}</h1>
                                {song.explicit === true ? (
                                    <div className="flex whitespace-break-spaces relative">
                                        <MdExplicit className="text-[#B4B4B4] absolute top-0" size={19} />
                                        <h2 className="  leading-5 truncate  cursor-pointer hover:underline text-[#B2B2B2]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{song.info}</h2>
                                    </div>
                                ) : (
                                    <div className="flex relative  whitespace-break-spaces">
                                        <h2 className=" leading-5  truncate text-[#B2B2B2] cursor-pointer hover:underline">{song.info}</h2>
                                    </div>
                                )}
                            </div>
                            <div className="absolute group-hover:opacity-100 transition duration-150 right-4 space-x-1 opacity-0 flex justify-center items-center">
                                <AiOutlineDislike className="hover:bg-white transition duration-150 rounded-full p-1.5 hover:bg-opacity-10" size={36} />
                                <AiOutlineLike className="hover:bg-white transition duration-150 rounded-full p-1.5 hover:bg-opacity-10" size={36} />
                                <HiOutlineDotsVertical className="hover:bg-white transition duration-150 rounded-full p-1.5 hover:bg-opacity-10" size={36} />
                            </div>
                        </div >
                    ))}


                </div>

                

                
            </div>
        </div>
    );
}
