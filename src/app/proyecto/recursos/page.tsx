import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function InformePage() {
  return (
    <div className="pb-10">
     
      <div className="text-center text-BluePrimary pt-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mt-4">Recursos y librerias</h1>
        <span className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-light p-4"> </span>
      </div>
      <div className="flex lg:flex-row flex-nowrap flex-col-reverse items-center lg:items-start justify-center text-BluePrimary">
       
        <div className="text-BluePrimary flex-1 mx-5 my-10 flex items-center justify-center flex-col flex-nowrap">
          <div className="text-sm sm:text-lg md:text-xl mt-5">
            <h2 className="text-3xl font-bold mb-3">LINKS de Los Recursos</h2>
            <ul className="m-5">
              <li className="font-semibold">Utilizamos </li>
              <li className="flex flex-row flex-nowrap m-1"> <FaCheck className="mx-1" /> Google Colaboratory del analisis sobre cinematica: <Link href={"https://github.com/Enry6tz/Fisica-Codigo"} className="text-blue-400 cursor-pointer"> Github</Link></li>
              <li className="flex flex-row flex-nowrap m-1"> <FaCheck className="mx-1" /> Simulacion de tiro al aro Geogebra: <Link href={"https://github.com/Enry6tz/Fisica-Codigo"} className="text-blue-400 cursor-pointer"> Geogebra</Link> </li>
              <li className="flex flex-row flex-nowrap m-1"> <FaCheck className="mx-1" />Esta pagina web fue realizada con <Link href={"https://github.com/Enry6tz/Fisica-Codigo"} className="text-blue-400 cursor-pointer"> Next.js</Link>, y desplegada con <Link href={"https://github.com/Enry6tz/Fisica-Codigo"} className="text-blue-400 cursor-pointer"> Vercel</Link> </li>
             </ul>
            <p></p>
          </div>
        </div>
      </div>
      <div>
        <div className="m-16">
         
        </div>
      </div>
    
    </div>
  );
}
