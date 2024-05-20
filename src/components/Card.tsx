import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiGmail } from "react-icons/si";

interface Props {
    name: string,
    career:string,
    path:string,
    description: string,
    link: string,
}

export const Card = ({name, career, path, description, link}:Props) => {
  const handleCopyContact = () => {
    navigator.clipboard.writeText(link);
}
  return (
    <div className='flex items-stretch'>
   <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
     <Image className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src={path} alt={name} width={400} height={400} />
     <h1 className="text-lg text-gray-700"> {name} </h1>
     <h3 className="text-sm text-gray-400 "> {career} </h3>
     <p className="text-xs text-gray-400 mt-4">{description} </p>
     <button onClick={handleCopyContact} className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide flex flex-row items-center justify-center ">
       <SiGmail/><span className='mx-1'>copiar Correo</span></button>
       <div className='flex-1'></div>
   </div>
 </div>
   
  )
}
