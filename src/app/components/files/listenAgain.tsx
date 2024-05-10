import { MdExplicit } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ListenAgain() {

    interface Song {
        name: string;
        info: string;
        explicit: boolean;
        imgSrc: string;
    }

    const songs: Song[] = [
        {
            name: "Flashing Lights",
            info: "Canción • Kanye West",
            explicit: false,
            imgSrc: "/listenAgain/flashing_lights.jpg"
        },
        {
            name: "MY EYES",
            info: "Canción • Travis Scott",
            explicit: true,
            imgSrc: "/listenAgain/my_eyes.jpg"
        },
        {
            name: "High Fashion (con Mustard)",
            info: "Canción • Roddy Ricch",
            explicit: true,
            imgSrc: "/listenAgain/high_fashion.jpg"
        },
        {
            name: "Drip Too Hard",
            info: "Canción • Lil Baby y Gunna",
            explicit: true,
            imgSrc: "/listenAgain/drip_too_hard.jpg"
        },
        {
            name: "Father Stretch My Hands Pt. 1",
            info: "Canción • Kanye West",
            explicit: true,
            imgSrc: "/listenAgain/father_stretch.jpg"
        },
        {
            name: "Toosie Slide",
            info: "Canción • Drake",
            explicit: true,
            imgSrc: "/listenAgain/toosie_slide.jpg"
        },
        {
            name: "Cigarette Daydreams",
            info: "Canción • Cage The Elephant",
            explicit: false,
            imgSrc: "/listenAgain/cigarette_daydreams.jpg"
        },
        {
            name: "Passionfruit",
            info: "Canción • Drake",
            explicit: true,
            imgSrc: "/listenAgain/passion_fruit.jpg"
        },
        {
            name: "Fair Trade (con Travis Scott)",
            info: "Canción • Drake",
            explicit: true,
            imgSrc: "/listenAgain/fair_trade.jpg"
        },
        {
            name: "Objects in the Mirror",
            info: "Canción • Mac Miller",
            explicit: false,
            imgSrc: "/listenAgain/objects_in_the_mirror.jpg"
        },
        {
            name: "Out Of Love (con Internet Money)",
            info: "Canción • Lil Tecca",
            explicit: true,
            imgSrc: "/listenAgain/out_of_love.jpg"
        },
        {
            name: "LADO A LADO",
            info: "Canción • Bhavie",
            explicit: false,
            imgSrc: "/listenAgain/lado_a_lado.jpg"
        },
        {
            name: "Passionfruit",
            info: "Canción • Drake",
            explicit: true,
            imgSrc: "/listenAgain/passion_fruit.jpg"
        },
    ];

    return (
        <div>
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
                    <button className="bg-transparent ml-5 border border-[#343434] hover:bg-white hover:bg-opacity-5 transition duration-150 rounded-full p-2 ">
                        <IoIosArrowBack size={19} />
                    </button>
                    <button className="bg-transparent ml-3 border border-[#343434] hover:bg-white hover:bg-opacity-5 transition duration-150 rounded-full p-2 ">
                        <IoIosArrowForward size={19} />
                    </button>
                </div>
            </div>

            <div className="w-full container whitespace-nowrap pb-4  flex  h-fit mt-5 space-x-6">
                {songs.map((song, index) => (
                    <div className="relative">
                        <div className="relative w-[180px] hover:opacity-60 cursor-pointer border-2 border-transparent transition duration-300 hover:shadow-2xl hover:border-[#AAAAAA] rounded-lg flex justify-center items-center">
                            <Image quality={100} className=' rounded-md select-none  object-cover ' src={song.imgSrc} alt={`song${index}`} width={544} height={544} />
                            <IoMdPlay className="absolute  opacity-100" size={40} />
                        </div>
                        <h1 className="mt-2.5 font-semibold whitespace-pre-line leading-5">{song.name}</h1>
                        {song.explicit === true ? (
                            <div className="flex relative">
                                <MdExplicit className="text-[#B4B4B4] absolute top-0" size={19} />
                                <h2 className="relative leading-5 cursor-pointer hover:underline	text-[#B2B2B2]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Canción • Travis Scott</h2>
                            </div>
                        ) : (
                            <div className="flex relative">
                                <h2 className="relative leading-5 text-[#B2B2B2] cursor-pointer hover:underline">{song.info}</h2>
                            </div>
                        )}
                    </div>
                ))}
            </div >
        </div>
    );
}
