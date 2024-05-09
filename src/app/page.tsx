import Image from "next/image";
import { MdExplicit } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";

export default function Home() {
  return (
    <div className="h-screen w-full pl-32 pr-28 overflow-y-auto flex-col bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#11100D] from-30% via-[#0D1214] via-85% to-[#08111A] to-100%  ">

      <div className="w-full h-fit whitespace-nowrap space-x-3 flex text-sm overflow-y-hidden mt-12 overflow-x-auto">
        <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Relax</button>
        <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Fiesta</button>
        <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Energía</button>
        <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Entretenimiento</button>
        <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Concentración</button>
        <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Triste</button>
        <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Amor</button>
        <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Dormir</button>
      </div>

      <div className="w-full h-fit mt-12">
        <div className="flex justify-start items-center">
          <Image quality={100} className='w-16 rounded-full h-16 object-cover cursor-pointer' src='/userImage.jpg' alt='userImage' width={360} height={360} />
          <div className="flex-col space-y-1 ml-4">
            <h2 className="text-[#AAAAAA]  uppercase">Pablo Kampmann</h2>
            <h1 className="text-3xl hover:underline cursor-pointer font-bold">Vuelve a escucharlo</h1>
          </div>
        </div>
      </div>

      <div className="w-full whitespace-nowrap  overflow-x-auto flex  h-fit mt-5 space-x-6">



        <div className="relative">
          <div className="relative w-[180px] hover:opacity-60 cursor-pointer border-2 border-transparent transition duration-300 hover:shadow-2xl hover:border-[#AAAAAA] rounded-lg flex justify-center items-center">
            <Image quality={100} className=' rounded-md  object-cover ' src='/example2.jpg' alt='example2' width={544} height={544} />
            <IoMdPlay className="absolute  opacity-100" size={40} />
          </div>
          <h1 className="mt-2.5 font-semibold whitespace-pre-line leading-5">Flashing Lights</h1>
          <div className="flex relative">
            <h2 className="relative leading-5	 text-[#B2B2B2]">Canción • Kanye West</h2>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-[180px] hover:opacity-60 cursor-pointer border-2 border-transparent transition duration-300 hover:shadow-2xl hover:border-[#AAAAAA] rounded-lg flex justify-center items-center">
            <Image quality={100} className=' rounded-md  object-cover ' src='/example3.jpg' alt='example3' width={544} height={544} />
            <IoMdPlay className="absolute  opacity-100" size={40} />
          </div>
          <h1 className="mt-2.5 font-semibold whitespace-pre-line leading-5">MY EYES</h1>
          <div className="flex  relative">
            <MdExplicit className="text-[#B4B4B4] absolute top-0" size={19} />
            <h2 className="relative leading-5 	text-[#B2B2B2]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Canción • Travis Scott</h2>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-[180px] hover:opacity-60 cursor-pointer border-2 border-transparent transition duration-300 hover:shadow-2xl hover:border-[#AAAAAA] rounded-lg flex justify-center items-center">
            <Image quality={100} className=' rounded-md  object-cover ' src='/example1.jpg' alt='example1' width={544} height={544} />
            <IoMdPlay className="absolute  opacity-100" size={40} />
          </div>
          <h1 className="mt-2.5 font-semibold whitespace-pre-line leading-5">High Fashion (con Mustard)</h1>
          <div className="flex relative">
            <MdExplicit className="text-[#B4B4B4] absolute top-0 " size={19} />
            <h2 className="relative leading-5	 text-[#B2B2B2]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Canción • Roddy Ricch</h2>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-[180px] hover:opacity-60 cursor-pointer border-2 border-transparent transition duration-300 hover:shadow-2xl hover:border-[#AAAAAA] rounded-lg flex justify-center items-center">
            <Image quality={100} className=' rounded-md  object-cover ' src='/example1.jpg' alt='example1' width={544} height={544} />
            <IoMdPlay className="absolute  opacity-100" size={40} />
          </div>
          <h1 className="mt-2.5 font-semibold whitespace-pre-line leading-5">High Fashion (con Mustard)</h1>
          <div className="flex relative">
            <MdExplicit className="text-[#B4B4B4] absolute top-0 " size={19} />
            <h2 className="relative leading-5	 text-[#B2B2B2]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Canción • Roddy Ricch</h2>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-[180px] hover:opacity-60 cursor-pointer border-2 border-transparent transition duration-300 hover:shadow-2xl hover:border-[#AAAAAA] rounded-lg flex justify-center items-center">
            <Image quality={100} className=' rounded-md  object-cover ' src='/example1.jpg' alt='example1' width={544} height={544} />
            <IoMdPlay className="absolute  opacity-100" size={40} />
          </div>
          <h1 className="mt-2.5 font-semibold whitespace-pre-line leading-5">High Fashion (con Mustard)</h1>
          <div className="flex relative">
            <MdExplicit className="text-[#B4B4B4] absolute top-0 " size={19} />
            <h2 className="relative leading-5	 text-[#B2B2B2]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Canción • Roddy Ricch</h2>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-[180px] hover:opacity-60 cursor-pointer border-2 border-transparent transition duration-300 hover:shadow-2xl hover:border-[#AAAAAA] rounded-lg flex justify-center items-center">
            <Image quality={100} className=' rounded-md  object-cover ' src='/example1.jpg' alt='example1' width={544} height={544} />
            <IoMdPlay className="absolute  opacity-100" size={40} />
          </div>
          <h1 className="mt-2.5 font-semibold whitespace-pre-line leading-5">High Fashion (con Mustard)</h1>
          <div className="flex relative">
            <MdExplicit className="text-[#B4B4B4] absolute top-0 " size={19} />
            <h2 className="relative leading-5	 text-[#B2B2B2]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Canción • Roddy Ricch</h2>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-[180px] hover:opacity-60 cursor-pointer border-2 border-transparent transition duration-300 hover:shadow-2xl hover:border-[#AAAAAA] rounded-lg flex justify-center items-center">
            <Image quality={100} className=' rounded-md  object-cover ' src='/example1.jpg' alt='example1' width={544} height={544} />
            <IoMdPlay className="absolute  opacity-100" size={40} />
          </div>
          <h1 className="mt-2.5 font-semibold whitespace-pre-line leading-5">High Fashion (con Mustard)</h1>
          <div className="flex relative">
            <MdExplicit className="text-[#B4B4B4] absolute top-0 " size={19} />
            <h2 className="relative leading-5	 text-[#B2B2B2]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Canción • Roddy Ricch</h2>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-[180px] hover:opacity-60 cursor-pointer border-2 border-transparent transition duration-300 hover:shadow-2xl hover:border-[#AAAAAA] rounded-lg flex justify-center items-center">
            <Image quality={100} className=' rounded-md  object-cover ' src='/example1.jpg' alt='example1' width={544} height={544} />
            <IoMdPlay className="absolute  opacity-100" size={40} />
          </div>
          <h1 className="mt-2.5 font-semibold whitespace-pre-line leading-5">High Fashion (con Mustard)</h1>
          <div className="flex relative">
            <MdExplicit className="text-[#B4B4B4] absolute top-0 " size={19} />
            <h2 className="relative leading-5	 text-[#B2B2B2]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Canción • Roddy Ricch</h2>
          </div>
        </div>

      </div>

    </div>
  );
}
