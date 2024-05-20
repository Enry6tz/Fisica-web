import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <div className="flex flex-col justify-end items-center min-h-screen bg-app bg-center bg-no-repeat bg-cover text-white font-semibold">

      <div className="video-container">
        <video  autoPlay loop muted>
            <source src="./videofondo.mov" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
        </video>
        
    </div>
    <main
      className="flex flex-col lg:flex-row overflow-hidden w-full max-w-5xl m-4 lg:m-6">
      <div className="flex-1 p-4 lg:p-6">
        <div className="text-lg text-white font-semibold mb-8 flex items-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
              clip-rule="evenodd"></path>
          </svg>
          <div className="ml-4 font-bold text-white">GINOBILIB - <span className="font-semibold">Gustavo Gasaneo</span></div>
        </div>
        <div className="grid grid-rows-4 grid-cols-1 gap-4 md:grid-rows-2 md:grid-cols-2">
          <Link href={"/proyecto/informe"}
            className="rounded-2xl bg-gray-500 backdrop-filter backdrop-blur-lg bg-opacity-5 p-4 flex flex-col relative undefined">
            <div className="text-white font-semibold absolute right-2">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z">
                </path>
              </svg>
            </div>
            <div className="text-white font-semibold text-2xl  mb-2 mt-4">Informe</div>
            <div className="text-white font-semibold ">Accede al informe completo de física con todos los detalles y análisis importantes haciendo clic aquí.</div>
          </Link>
          <div
            className="rounded-2xl bg-gray-500 backdrop-filter backdrop-blur-lg bg-opacity-5 p-4 flex flex-col relative undefined">
            <div className="text-white font-semibold absolute right-2">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <div className="text-white font-semibold text-2xl  mb-2 mt-4">Simulacion</div>
            <div className="text-white font-semibold ">Writing the actual code for the site, as it controls everything
              that happens behind the scenes of the site.</div>
          </div>
          <div
            className="rounded-2xl bg-gray-500 backdrop-filter backdrop-blur-lg bg-opacity-5 p-4 flex flex-col relative undefined">
            <div className="text-white font-semibold absolute right-2">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clip-rule="evenodd"></path>
              </svg> </div>
            <div className="text-white font-semibold text-2xl  mb-2 mt-4">Integrantes</div>
            <div className="text-white font-semibold ">He works on designing interfaces and writing code in the
              background. He has all the skills for both sides.</div>
          </div>
          <div
            className="rounded-2xl bg-gray-500 backdrop-filter backdrop-blur-lg bg-opacity-5 p-4 flex flex-col relative undefined">
            <div className="text-white font-semibold absolute right-2">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <div className="text-white font-semibold text-2xl  mb-2 mt-4">Recursos y codigo fuente</div>
            <div className="text-white font-semibold ">It is the design of the website interface and all its contents
              before starting programming and development.</div>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
  </div>
  );
}
