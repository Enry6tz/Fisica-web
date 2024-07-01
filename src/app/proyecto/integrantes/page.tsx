"use client"
import { Card } from '@/components/Card';
import Link from 'next/link';
import React from 'react'
import { FaCheck } from 'react-icons/fa';


export default function InformePage() {
  const integrantes =[
    {
      "name": "Sebastián Barraza",
      "career": "Ingeniería en Computación",
      "path": "/img/seba.png",
      "description": "",
      "link": "sebabarrazapriv@gmail.com"
    },
    {
      "name": "Gonzalo Elián Dupin Álvarez",
      "career": "Ingeniería en Computación",
      "path": "/img/gonza.png",
      "description": "",
      "link": "@gmail.com" //TODO: completar
    },
    {
      "name": "Bruno Nicolas Gonzalez",
      "career": "Ingeniería en Sistemas de Información",
      "path": "/img/bruno.jpg",
      "description": "",
      "link": "Brunox140401@gmail.com"
    },
    {
      "name": "Facundo Intile Bartel",
      "career": "Ingeniería en Computación",
      "path": "/img/facu.png",
      "description": "",
      "link": "intilebartel@gmail.com"
    },
   
    {
      "name": "Agustin Ramirez Ramos",
      "career": "Licenciatura en Computación",
      "path": "/img/agusrr.jpg",
      "description": "",
      "link": "agustinramirez9560@gmail.com"
    },
    {
      "name": "Camila Jesús Rojas Fritz",
      "career": "Ingeniería en Sistemas de Información",
      "path": "/img/cami.jpeg",
      "description": "",
      "link": "rojasfritzcamilaj@gmail.com"
    },
    {
      "name": "Ezequiel Alejandro Suarez Mancisidor",
      "career": "Ingeniería en Sistemas de Información",
      "path": "/img/eze.jpg",
      "description": "",
      "link": "ezequielsuarez2002@outlook.com"
    },
    {
      "name": "Enrique Seitz",
      "career": "Ingeniería en Sistemas de Información",
      "path": "/img/enri.png",
      "description": "",
      "link": "enrique6tz@gmail.com"
    },
    {
      "name": "Pierino Oscar Spina",
      "career": "Ingeniería en Sistemas de Información",
      "path": "/img/piero.png",
      "description": "",
      "link": "pierinooscar@gmail.com"
    },
    {
      "name": "Agustín Yerba Fernández",
      "career": "Ingeniería en Sistemas de Información",
      "path": "/img/agus.jpg",
      "description": "",
      "link": "agustin150604@gmail.com"
    }
  ]
  
  const docentes =[
    {
      "name": "Gustavo Gasaneo",
      "career": "",
      "path": "/img/gustavo.jpg",
      "description": "",
      "link": "http://www.gasaneofisica.uns.edu.ar/"
    },
    {
      "name": "Francisco Ramiro Iaconis",
      "career": "",
      "path": "/img/pancho.jpeg",
      "description": "",
      "link": "francisco.iaconis@uns.edu.ar" //TODO: completar
    },
    {
      "name": "Marcos Meo",
      "career": "",
      "path": "/img/marcos.jpg",
      "description": "",
      "link": "marcos.meo@uns.edu.ar"
    },
    {
      "name": "Cristina Duarte",
      "career": "",
      "path": "/img/cristina.jpg",
      "description": "",
      "link": "cristinaduarte88@gmail.com" //TODO: completar
    },
  ]
  const handleCopyContact = (link:string) => {
    navigator.clipboard.writeText(link);
  }
  return (
    <div>
      <div className="pb-10 mx-16">
        <div className="text-center text-BluePrimary pt-5">
        <div className="text-center text-BluePrimary pt-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mt-4">Plantel Docente</h1>
              <span className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-light p-4"></span>
          </div>
          </div>

          <div className="pt-2">
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-8">
              { 
              docentes.map((docen, index) => (
                      <Card
                          key={index}
                          name={docen.name}
                          career={docen.career}
                          path={docen.path}
                          description={docen.description}
                          link={docen.link}
                      />
                  ))
                } 
              </div>
          </div>
          <div className="text-center text-BluePrimary pt-14">
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mt-4">Integrantes del Proyecto</h1>
              <span className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-light p-4"></span>
          </div>
          <div className="py-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
                  {integrantes.map((integrante, index) => (
                      <Card
                          key={index}
                          name={integrante.name}
                          career={integrante.career}
                          path={integrante.path}
                          description={integrante.description}
                          link={integrante.link}
                      />
                  ))}
              </div>
          </div>
      </div>
         <div className="pb-10">
     
         <div className="text-center text-BluePrimary pt-5">
           <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mt-4">Anexo</h1>
           <span className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-light p-4"> </span>
         </div>
         <div className="flex lg:flex-row flex-nowrap flex-col-reverse items-center lg:items-start justify-center text-BluePrimary">
          
           <div className="text-BluePrimary flex-1 mx-5 my-10 flex items-center justify-center flex-col flex-nowrap">
             <div className="text-sm sm:text-lg md:text-xl mt-5" id='anexo'>
               <h2 className="text-3xl font-bold mb-3">LINKS de Los Recursos</h2>
               <ul className="m-5">
                 <li className="font-semibold">Utilizamos </li>
                 <li className="flex flex-row flex-nowrap m-1"> <FaCheck className="mx-1" /> Google Colaboratory del analisis sobre cinematica: <Link href={"https://github.com/Enry6tz/Fisica-Codigo"} className="text-blue-400 cursor-pointer"> Github</Link></li>
                 <li className="flex flex-row flex-nowrap m-1"> <FaCheck className="mx-1" /> Simulacion de tiro al aro Geogebra: <Link href={"https://github.com/Enry6tz/Fisica-Codigo"} className="text-blue-400 cursor-pointer"> Geogebra</Link> </li>
                 <li className="flex flex-row flex-nowrap m-1"> <FaCheck className="mx-1" />Esta pagina web fue realizada con <Link href={"https://github.com/Enry6tz/Fisica-Codigo"} className="text-blue-400 cursor-pointer"> Next.js</Link>, y desplegada con <Link href={"https://github.com/Enry6tz/Fisica-Codigo"} className="text-blue-400 cursor-pointer"> Vercel</Link> </li>
                </ul>
               <p className=" mx-2">Para la organización y desarrollo del proyecto, empleamos diversas herramientas de colaboración que facilitaron el trabajo en equipo.<br/>
   Utilizamos Google Colab para la gestión del código y el desarrollo de la página web del proyecto. Esta plataforma nos permitió escribir y ejecutar código Python en la nube, lo cual permitió a todos los miembros del grupo ver y contribuir a los avances en tiempo real y gestionar versiones de nuestro código de manera eficiente. <Link href={"https://github.com/Enry6tz/Fisica-Codigo"} className="text-blue-400 cursor-pointer">Más información</Link>
   <Link href={"https://fisica-web.vercel.app/"} className="text-blue-400 cursor-pointer"> Ver página web</Link> <br/>
   También utilizamos Google Docs, que fue fundamental para la redacción y edición del informe teórico. Lo que permitió que todos los miembros del grupo pudieran acceder y colaborar en el documento simultáneamente, facilitando la realización y corrección del informe de manera versátil y en tiempo real.
   <br/>Por último y no menos importante, la organización para realizar las grabaciones de los tiros al aro en la cancha fue clave. Nos coordinamos para llevar el equipo necesario y asegurarnos de que las mediciones y registros se hicieran correctamente para obtener datos precisos para el análisis.
   <br/>Para finalizar con el anexo es importante decir que estas herramientas y estrategias de organización fueron esenciales para la eficiente ejecución del proyecto, permitiéndonos trabajar de manera sincronizada y maximizar la colaboración entre los miembros del grupo.</p>
             </div>
           </div>
         </div>
       
       </div>
       </div>
  );
}
