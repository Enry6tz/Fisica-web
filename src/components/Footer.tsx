import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { AspectRatio } from "@/components/ui/aspect-ratio"
export const Footer = () => {
    return (

        <footer className='max-h-[400px]'>
            <div className='flex flex-row flex-nowrap justify-center items-center'>
                <div className=' flex justify-center pl-4 items-center gap-1 md:gap-10 '>
                    <Link href="https://www.uns.edu.ar/">
                        <div className="md:w-[100px] w-[50px]">
                            <AspectRatio ratio={1 / 1}>
                                <Image src="/img/logo uni.png" alt="logo uns" width={200} height={200} className="rounded-md object-cover" />
                            </AspectRatio>
                        </div>

                    </Link>
                    <Link href="http://fisica.uns.edu.ar/">
                        <div className="md:w-[100px] w-[50px]">
                            <AspectRatio ratio={1 / 1}>
                                <Image src="/img/logo fisica.png" alt="logo uns" width={200} height={200} className="rounded-md object-cover" />
                            </AspectRatio>
                        </div>
                    </Link>
                    <Link href="https://cs.uns.edu.ar/~devcs/">
                    <div className="md:w-[100px] w-[70px]">
                            <AspectRatio ratio={3 / 1}>
                            <Image src="/img/logo dcic.png" alt="logo uns" width={200} height={200} className="rounded-md object-cover" />
                            </AspectRatio>
                        </div>

                    </Link>
                <p className='text-sm text-gray-950'>&copy; Proyecto Fisica I 2024 - Gustavo Gasaneo</p>
                </div>
            </div>
        </footer>

    )
}
