import Image from "next/image";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { BsFillPinFill } from "react-icons/bs";

export default function Library() {
  return (
    <div className="h-screen w-full pl-32 pr-28 overflow-y-auto flex-col bg-[#030303]  ">

      <div className="w-full h-fit whitespace-nowrap flex text-sm overflow-y-hidden mt-12 overflow-x-auto">
        <div className="space-x-3 ">
          <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Listas de reproducción</button>
          <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Canciones</button>
          <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Álbumes</button>
          <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Artistas</button>
          <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Pódcasts</button>
        </div>
        <button className="bg-white bg-opacity-10 font-semibold ml-auto py-1.5 border border-[#333333] pl-6 pr-4 flex justify-center items-center rounded-full hover:bg-opacity-20 transition duration-150">Reproducciones recientes <MdOutlineArrowDropDown className="ml-1" size={30} /></button>
      </div>


      <div className="flex justify-center">
        <div className="flex justify-start p-2 space-x-4 border-2 border-red-500 flex-wrap w-fit">
          <div className="w-[13%] h-fit">
            <Image quality={100} className='w-full object-cover rounded-lg' src='/playlists/liked_music.png' alt='likedMusic' width={576} height={576} />
            <h1 className="mt-2 leading-5 font-semibold">Música que me gusta</h1>
            <p className="text-[#B4B4B4] leading-5 flex justify-center items-center"><BsFillPinFill size={24} /> Generada automáticamente</p>
          </div>
          <div className="w-[13%] h-fit">
            <Image quality={100} className='w-full object-cover rounded-lg' src='/playlists/liked_music.png' alt='likedMusic' width={576} height={576} />
            <h1 className="mt-2 leading-5 font-semibold">Música que me gusta</h1>
            <p className="text-[#B4B4B4] leading-5 flex justify-center items-center"><BsFillPinFill size={24} /> Generada automáticamente</p>
          </div>
          <div className="w-[13%] h-fit">
            <Image quality={100} className='w-full object-cover rounded-lg' src='/playlists/liked_music.png' alt='likedMusic' width={576} height={576} />
            <h1 className="mt-2 leading-5 font-semibold">Música que me gusta</h1>
            <p className="text-[#B4B4B4] leading-5 flex justify-center items-center"><BsFillPinFill size={24} /> Generada automáticamente</p>
          </div>
          <div className="w-[13%] h-fit">
            <Image quality={100} className='w-full object-cover rounded-lg' src='/playlists/liked_music.png' alt='likedMusic' width={576} height={576} />
            <h1 className="mt-2 leading-5 font-semibold">Música que me gusta</h1>
            <p className="text-[#B4B4B4] leading-5 flex justify-center items-center"><BsFillPinFill size={24} /> Generada automáticamente</p>
          </div>
          <div className="w-[13%] h-fit">
            <Image quality={100} className='w-full object-cover rounded-lg' src='/playlists/liked_music.png' alt='likedMusic' width={576} height={576} />
            <h1 className="mt-2 leading-5 font-semibold">Música que me gusta</h1>
            <p className="text-[#B4B4B4] leading-5 flex justify-center items-center"><BsFillPinFill size={24} /> Generada automáticamente</p>
          </div>
          <div className="w-[13%] h-fit">
            <Image quality={100} className='w-full object-cover rounded-lg' src='/playlists/liked_music.png' alt='likedMusic' width={576} height={576} />
            <h1 className="mt-2 leading-5 font-semibold">Música que me gusta</h1>
            <p className="text-[#B4B4B4] leading-5 flex justify-center items-center"><BsFillPinFill size={24} /> Generada automáticamente</p>
          </div>
          <div className="w-[13%] h-fit">
            <Image quality={100} className='w-full object-cover rounded-lg' src='/playlists/liked_music.png' alt='likedMusic' width={576} height={576} />
            <h1 className="mt-2 leading-5 font-semibold">Música que me gusta</h1>
            <p className="text-[#B4B4B4] leading-5 flex justify-center items-center"><BsFillPinFill size={24} /> Generada automáticamente</p>
          </div>
          <div className="w-[13%] h-fit">
            <Image quality={100} className='w-full object-cover rounded-lg' src='/playlists/liked_music.png' alt='likedMusic' width={576} height={576} />
            <h1 className="mt-2 leading-5 font-semibold">Música que me gusta</h1>
            <p className="text-[#B4B4B4] leading-5 flex justify-center items-center"><BsFillPinFill size={24} /> Generada automáticamente</p>
          </div>
          <div className="w-[13%] h-fit">
            <Image quality={100} className='w-full object-cover rounded-lg' src='/playlists/liked_music.png' alt='likedMusic' width={576} height={576} />
            <h1 className="mt-2 leading-5 font-semibold">Música que me gusta</h1>
            <p className="text-[#B4B4B4] leading-5 flex justify-center items-center"><BsFillPinFill size={24} /> Generada automáticamente</p>
          </div>
          <div className="w-[13%] h-fit">
            <Image quality={100} className='w-full object-cover rounded-lg' src='/playlists/liked_music.png' alt='likedMusic' width={576} height={576} />
            <h1 className="mt-2 leading-5 font-semibold">Música que me gusta</h1>
            <p className="text-[#B4B4B4] leading-5 flex justify-center items-center"><BsFillPinFill size={24} /> Generada automáticamente</p>
          </div>
        </div>
      </div>



    </div>


    
  );
}
