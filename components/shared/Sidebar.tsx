"use client";
import { navLinks } from '@/constants'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className='sidebar'>
            <div className='flex size-full flex-col gap-4'>
                <Link href='/' className='sidebar-logo'>
                    <Image src='/assets/images/logo-text.svg' alt="" width={180} height={28} />
                </Link>

                <nav className='sidebar-nav'>
                    <SignedIn>
                        {navLinks.map((link, ind) => {
                            const isActive = link.route === pathname

                            return (
                                <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`} >
                                    <Link className="sidebar-link" href={link.route}>
                                        <Image src={link.icon} width={24} height={24} alt="logo" className={`${isActive && 'brightness-200'}`} />
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </SignedIn>

                    <SignedOut>
                        shadcn
                    </SignedOut>
                </nav>
            </div>
        </aside >
    )
}

export default Sidebar