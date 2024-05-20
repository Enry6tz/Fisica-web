import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (

        <footer>
            <div className='flex flex-row flex-nowrap justify-center items-center'>
                <div className=' flex items-center'>
                    <Link href="https://www.uns.edu.ar/">
                        <Image src="/img/logo uni.png" alt="" width={200} height={200} />
                    </Link>
                    <Link href="http://fisica.uns.edu.ar/">
                        <Image src="/img/logo fisica.png" alt="" width={200} height={200} />
                    </Link>
                    <Link href="https://cs.uns.edu.ar/~devcs/">
                        <div className=''>
                        <Image src="/img/logo dcic.png" alt="" width={600} height={600}  className='bg-cover'/>
                        </div>
                    </Link>
                </div>
                <p className='text-sm text-white'>&copy; Proyecto Fisica I 2024 - Gustavo Gasaneo</p>
            </div>
        </footer>

    )
}
