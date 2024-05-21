"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <div className='fixed top-0 w-full z-10'>
            <nav className="flex items-center justify-between bg-white border-b h-20 border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-2.5 dark:bg-gray-800 shadow">
                <div className="flex items-center">
                    <a href="/" className="flex items-center justify-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            GINOBILIB
                        </span>
                    </a>
                </div>

                <div className="flex items-center">
                    <button
                        onClick={() => setMenu(!menu)}
                        id="menu-toggle"
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                <div
                    className={`w-full md:flex md:items-center md:w-auto ${menu ? "absolute top-20 left-0 mt-0 w-full bg-gray-600 md:static md:bg-transparent" : "hidden md:flex md:static md:bg-transparent"}`}
                    id="mobile-menu"
                >
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                        <li>
                            <Link
                                href="/proyecto/informe"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                informe
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/proyecto/simulacion"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                simulacion
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/proyecto/recursos"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                recursos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/proyecto/integrantes"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                integrantes
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
