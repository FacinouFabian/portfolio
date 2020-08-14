import React, {useEffect, ReactElement } from "react";
import { withRouter } from "next/router";
import ActiveLink from "../../components/presentational/active-link"
import Link from 'next/link'

const CustomNavBar = (): ReactElement => {
    useEffect((): void => {
        /* const closeNav = document.getElementById("close-nav"); */
        const navMobile = document.getElementById("mobile-menu");
        const close = document.getElementById("close");
        const open = document.getElementById("open");

        if (navMobile != undefined && close != undefined && open != undefined) {
            close.addEventListener("click", (): void => {
                navMobile.classList.remove("block");
                navMobile.classList.add("hidden");
                close.classList.toggle('hidden')
                open.classList.toggle('hidden')
            })

            open.addEventListener("click", (): void => {
                navMobile.classList.remove("hidden");
                navMobile.classList.add("block");
                open.classList.toggle('hidden')
                close.classList.toggle('hidden')
            })
        }
    }, []);

  return (
    <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* <!-- Mobile menu button --> */}
                    <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                    {/* <!-- Icon when menu is closed. --> */}
                    {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                    <svg id="open" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {/* <!-- Icon when menu is open. --> */}
                    {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                    <svg id="close" className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <Link href="/">
                        <div className="flex-shrink-0 flex items-center cursor-pointer">
                            <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow logo" />
                            <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-on-white.svg" alt="Workflow logo" />
                        </div>
                    </Link>
                    <div className="hidden sm:ml-6 sm:flex">
                        <ActiveLink href="/" 
                            className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                Home
                        </ActiveLink>
                        
                        <ActiveLink href="/about"
                            className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                About
                        </ActiveLink>

                        <ActiveLink 
                            href="/api/aboutMe"
                            className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                Users List
                        </ActiveLink>

                        <ActiveLink href="/projects"
                            className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                Projects
                        </ActiveLink>

                        <ActiveLink href="/hobbies"
                            className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                Hobbies
                        </ActiveLink>

                        <ActiveLink href="/gallery"
                            className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                Images
                        </ActiveLink>

                    </div>
                </div>
            </div>
        </div>

        {/* <!--
            Mobile menu, toggle classes based on menu state.

            Menu open: "block", Menu closed: "hidden"
        --> */}
        <div id='mobile-menu' className="hidden">
            <div className="pt-2 pb-4">
                <ActiveLink href="/" 
                    className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
                        Home
                </ActiveLink>
                            
                <ActiveLink href="/about"
                    className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
                        About
                </ActiveLink>

                <ActiveLink 
                    href="/api/aboutMe"
                    className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
                        Users List
                </ActiveLink>

                <ActiveLink href="/projects"
                    className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
                        Projects
                </ActiveLink>

                <ActiveLink href="/hobbies"
                    className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
                        Hobbies
                </ActiveLink>

                <ActiveLink href="/gallery"
                    className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
                        Images
                </ActiveLink>
            </div>
        </div>
    </nav>

  );
};

export default withRouter(CustomNavBar);