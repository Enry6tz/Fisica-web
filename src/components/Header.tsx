import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header>
            <nav className="navigation text-white">
                <ul>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/proyecto/informe">Informe</Link></li>
                    {/*
                    <li><Link href="/" className='text-gray-500'>Simulacion</Link></li>
                    <li><Link href="/" className='text-gray-500'>Recursos y codigo fuente</Link></li>
                    <li><Link href="/" className='text-gray-500'>Integrantes</Link></li>
    */}
                </ul>
            </nav>
        </header>
    )
}
