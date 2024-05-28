import Image from "next/image";
import ListenAgain from "./components/homeComponents/listenAgain";
import QuickPicks from "./components/homeComponents/quickPicks";

export default function Home() {
  return (
    <div className="h-screen w w-full pl-32 pr-28 overflow-y-auto flex-col bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#10100C] from-25% via-[#06080A] via-60% to-[#03050A] to-100%  ">
      <div className=" pb-72">
        <div className="w-full h-fit whitespace-nowrap space-x-3 flex text-sm overflow-y-hidden mt-12 container">
          <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Relax</button>
          <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Fiesta</button>
          <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Energía</button>
          <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Entretenimiento</button>
          <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Concentración</button>
          <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Triste</button>
          <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Amor</button>
          <button className="bg-white bg-opacity-10 py-2 px-2.5 rounded-lg hover:bg-opacity-20 transition duration-150">Dormir</button>
        </div>

        <ListenAgain />

        <QuickPicks />
      </div>

    </div>
  );
}
