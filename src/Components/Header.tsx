"use client"


import React, { useEffect ,useState } from "react";
import Link from "next/link"
import Theme from "./Theme";
import { usePathname } from 'next/navigation'
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai"


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathName = usePathname()
    function openMenu() {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        setMounted(true)
    }, [])


    if (!mounted) {
        return null
    }
    return (
        <header className="fixed top-0 w-full z-30 mb-16 bg-white/75 py-6 dark:bg-[#20232a]/75 backdrop-blur-sm ">
            <nav className="hidden  mx-auto md:flex w-full max-w-3xl flex-row-reverse items-center justify-between px-6">
                <h2>
                    <Link href="/">MD</Link>
                </h2>
                <i className="hover:bg-gray-500 p-2 rounded-xl cursor-pointer">
                <Theme />
                </i>
                <ul className="flex justify-between w-2/4 ">
                    <li className={`${pathName === "/"? "active" : ""}`}>
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className={`${pathName === "/about"? "active" : ""}`}>
                        <Link href="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li className={`${pathName=== "/projects"? "active" : ""}`}>
                        <Link href="/projects" className="nav-link">
                            Projects
                        </Link>
                    </li>
                    <li className={`${pathName === "/contact"? "active" : ""}`}>
                        <Link href="/contact" className="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className="md:hidden flex mx-auto justify-between items-center px-6">
                <h2>
                    <Link href="/">MD</Link>
                </h2>
                <i className="hover:bg-gray-500 p-2 rounded-xl cursor-pointer">
                <Theme />
                </i>
                <i className="hover:bg-gray-500 p-2 rounded-xl cursor-pointer">
                <AiOutlineMenu
                    onClick={() => openMenu()} />
                </i>
            
                
                <ul className={`absolute p-4 top-16 right-3 flex flex-col  justify-between bg-[#cbd5e1] items-end h-[200px] dark:bg-[#4c525e] w-2/5 ease-out duration-300 rounded-md `} style={{ right: isOpen ? "0" : "-100vw" }}>

                    <i className="text-2xl absolute hover:text-[#0865b6] cursor-pointer left-2">

                        <AiOutlineCloseCircle

                            onClick={() => { setIsOpen(false) }} />

                    </i>
                    <li>
                        <Link href="/" className="nav-link"
                            onClick={() => { setIsOpen(false) }}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="nav-link"
                            onClick={() => { setIsOpen(false) }}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="nav-link"
                            onClick={() => { setIsOpen(false) }}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="nav-link"
                            onClick={() => { setIsOpen(false) }}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>


            </nav>
        </header>
    );
};

export default Header;

