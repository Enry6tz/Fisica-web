import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function InformePage() {
  return (
    <div className="p-10">
      
      <div className="text-sm sm:text-lg md:text-xl mt-5">
            <h2 className="text-3xl font-bold mb-3">Elementos para interactuar con GeoGebra</h2>
            <p className="font-semibold">se puede modificar la Vo, Altura y Angulo</p>
            <span><Link href="https://www.geogebra.org/calculator/uj3nxmf4?embed" className="text-blue-500"> ver codigo fuente</Link></span>
       

        <iframe
          src="https://www.geogebra.org/calculator/uj3nxmf4?embed"
          width={800}
          height={600}
          
          frameBorder={0}
          style={{
            border: "1px solid #e4e4e4",
            borderRadius: "4px"
          }}
        ></iframe>
      </div>

    </div>
  );
}