"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { NavigationMenues } from './Navigation';

export const Header = () => {

    return (
        <div className='fixed top-0 w-full z-10 bg-white  border-b   border-gray-200  dark:border-gray-700 sm:px-6 py-2.5 dark:bg-gray-800 shadow'>
            <nav className="flex w-[90%] h-full items-center justify-around flex-col md:flex-row  ">
                <div className="flex items-center pb-2 md:pb-0">
                    <a href="/" className="flex items-center justify-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            GINOBILIB
                        </span>
                    </a>
                </div>
                <NavigationMenues/>
            </nav>
        </div>
    );
}
