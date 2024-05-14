import Image from "next/image";
import { BsFileMusic } from "react-icons/bs";
import { AiOutlineRise } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import AlbumsAndSingles from './../components/explorerComponents/albumsAndSingles'
import MoodAndGenres from './../components/explorerComponents/moodAndGenres'

export default function Explorer() {
  return (
    <div className="h-screen w-full pl-32 pr-28 overflow-y-auto flex-col  bg-[#030303] ">

      <div className="w-full h-fit whitespace-nowrap overflow-x-hidden space-x-6 flex text-sm overflow-y-hidden mt-12 ">
        <button className="flex w-[33.3%] rounded-lg shadow-lg items-center bg-white bg-opacity-15 hover:bg-opacity-10 transition duration-150 text-xl font-semibold py-3.5 px-4"><BsFileMusic size={20} className="mr-4 text-[#AAAAAA]" />Novedades</button>
        <button className="flex w-[33.3%] rounded-lg shadow-lg items-center bg-white bg-opacity-15 hover:bg-opacity-10 transition duration-150 text-xl font-semibold py-3.5 px-4"><AiOutlineRise size={24} className="mr-4 text-[#AAAAAA]" />Lista de éxitos</button>
        <button className="flex w-[33.3%] rounded-lg shadow-lg items-center bg-white bg-opacity-15 hover:bg-opacity-10 transition duration-150 text-xl font-semibold py-3.5 px-4"><HiOutlineEmojiHappy size={24} className="mr-4 text-[#AAAAAA]" />Ánimo y géneros</button>

      </div>

      <AlbumsAndSingles />

      <MoodAndGenres />

    </div>
  );
}
