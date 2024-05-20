import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function InformePage() {
  return (
    <div className="pb-10">
     
      <div className="text-center text-BluePrimary pt-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mt-4">Recursssoooossss</h1>
        <span className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-light p-4">Tiros Libres en Baloncesto</span>
      </div>
      <div className="flex lg:flex-row flex-nowrap flex-col-reverse items-center lg:items-start justify-center text-BluePrimary">
       
        <div className="text-BluePrimary flex-1 mx-5 my-10 flex items-center justify-center flex-col flex-nowrap">
          <div className="text-sm sm:text-lg md:text-xl mt-5">
            <h2 className="text-3xl font-bold mb-3">LINKS de Los Recursos</h2>
            <ul className="m-5">
              <li className="font-semibold">Para la recolección de datos y análisis en este estudio sobre la precisión en los tiros al aro en baloncesto, se emplearon los siguientes materiales y métodos:</li>
              <li className="flex flex-row flex-nowrap m-1"> <FaCheck className="mx-1" /> Cámara de Video: Se utilizó una cámara para grabar distintas sesiones de tiros en una cancha de baloncesto. Esto permitió obtener registros visuales detallados de la trayectoria de la pelota y la técnica de tiro de los integrantes del grupo.</li>
              <li className="flex flex-row flex-nowrap m-1"> <FaCheck className="mx-1" /> Cinta Métrica: Con el objetivo de medir con precisión las distancias desde las que se realizaron los tiros, se usó una cinta métrica. Esto aseguró que las posiciones fueran consistentes y exactas en cada intento.</li>
              <li className="flex flex-row flex-nowrap m-1"> <FaCheck className="mx-1" /> Balón de Baloncesto Profesional: Se utilizó un balón de baloncesto profesional. Esto ayudó a garantizar que los resultados fueran aplicables en contextos de juego real.</li>
              <li className="flex flex-row flex-nowrap m-1"> <FaCheck className="mx-1" /> Tiros Repetidos: Para mejorar la precisión de los cálculos y obtener datos más fiables, se realizaron múltiples tiros desde una posición fija. Esto permitió un análisis estadístico más robusto y una mejor comprensión de las variaciones en los tiros exitosos.</li>
            </ul>
            <p>Estos materiales y métodos se combinaron para crear un estudio detallado y preciso sobre la realización de tiros al aro en baloncesto, proporcionando datos valiosos para el análisis de la técnica y la precisión en el deporte.</p>
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
