import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown';
import './navbar.module.css'

export default function Navbar() {

    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [isExpanded, toggleExpansion] = useState(false)

    const router = useRouter()



    let width = useRef(0)

    useEffect(() => {
        width = window.innerWidth;
    }, [width])

    return (
        <nav
        className="fixed bg-gray-100 items-center justify-between flex my-8 mx-auto py-2 px-4 w-full h-8 z-50">
            {/* Logo */}
            <div className="absolute h-32 w-32 flex justify-center items-center">
                <div className="rounded-full bg-gray-100 h-24 w-24" />
            </div>
            <div className="relative w-32 h-32 inline-flex">
                <Link href="/">
                    <a>
                    <Image
                        src={'/../public/vac-circle.png'}
                        alt="Vashon Athletic Club logo"
                        layout="fill"
                        objectFit="contain"
                        className="z-20"
                    />
                    </a>
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block mr-2">
                <ul className="flex text-vacblue text-sm items-center ">
                <li className={`${router.pathname === `/` ? `current-tab ` : ` `}nav-tab ml-2 px-2 flex items-center h-8 transition ease-in-out duration-150  focus:bg-vacblue focus:bg-opacity-90 focus:text-white home-head`}><Link href="/"><a>Home</a></Link></li>
                    <ul className="nav-tab member-list"
                    onMouseEnter={() => setActive1(true)}
                    onMouseLeave={() => setActive1(false)}>
                        <li className={`${router.pathname.includes('/membership') ? `current-tab ` : ` `}member-head px-2 flex items-center h-8 transition ease-in-out duration-150  focus:bg-vacblue focus:bg-opacity-90 focus:text-white`}>
                            <Link href="/membership" className="relative"><a className="border-b-1 border-gray-400">Membership</a></Link>
                        </li>
                        {active1 && <li><Dropdown parent="membership" onMouseEnter={() => setActive1(true)}
                        onMouseLeave={() => setActive1(false)}/></li>}
                    </ul>
                    {/* Dropdown parent refers to menuItems index to populate dropdown menu */}
                    <ul className="nav-tab training-list ml-2"
                        onMouseEnter={() => setActive2(true)}
                        onMouseLeave={() => setActive2(false)}>
                    <li className={`${router.pathname.includes('/personal-training') ? `current-tab ` : ` `}training-head px-2 flex items-center h-8 transition ease-in-out duration-150  focus:bg-vacblue focus:bg-opacity-90 focus:text-white`}>
                        <Link href="/personal-training" className="relative"><a>Personal Training</a></Link>
                    </li>
                    {active2 && <li><Dropdown parent="personal_training" onMouseEnter={() => setActive2(true)}
                        onMouseLeave={() => setActive2(false)}/></li>}
                    </ul>
                    
                    <ul className="nav-tab pool-list ml-2" 
                    onMouseEnter={() => setActive3(true)}
                    onMouseLeave={() => setActive3(false)}>
                        <li className={`${router.pathname.includes('/pool') ? `current-tab ` : ` `}pool-head px-2 flex items-center h-8 transition ease-in-out duration-150  focus:bg-vacblue focus:bg-opacity-90 focus:text-white`}>
                            <Link href="/pool"><a>Pool</a></Link>
                        </li>
                        {active3 && <li><Dropdown parent="pool" onMouseEnter={() => setActive3(true)}
                        onMouseLeave={() => setActive3(false)}/></li>}
                    </ul>   
                    <li className={`${router.pathname === `/schedules` ? `current-tab ` : ` `}nav-tab ml-2 px-2 flex items-center h-8 transition ease-in-out duration-150  focus:bg-vacblue focus:bg-opacity-90 focus:text-white schedules-head`}><Link href="/schedules"><a>Schedules</a></Link></li>    
                    <li className={`${router.pathname === `/news` ? `current-tab ` : ` `}nav-tab ml-2 px-2 flex items-center h-8 transition ease-in-out duration-150  focus:bg-vacblue focus:bg-opacity-90 focus:text-white news-head`}><Link href="/news"><a>News</a></Link></li>
                </ul>
            </div>
            {/* Mobile Menu */}
            <div className="lg:hidden z-40 fixed right-0" >
                {/* Burger */}
                <button onClick={() => toggleExpansion(!isExpanded)} className={`${ isExpanded ? `hidden` : ``} flex items-center px-3 py-2 border-vacblue text-vacblue`}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <button onClick={() => toggleExpansion(!isExpanded)} className={`${ !isExpanded ? `hidden` : ``} flex items-center px-3 py-2 border-vacblue text-vacblue`}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
                {/* Menu */}
                <div className={`${ isExpanded ? `flex mobile-active` : `` } mt-60 text-left fixed right-0 w-full h-full bg-white justify-center content-center burger-menu mobile`}>
                    <div className="text-vacblue flex flex-col justify-center align-items-center mt-60 divide-y divide-grey-100">
                    {/* Membership Links */}
                    <div className="py-1 flex flex-col">
                    <Link href="/membership" ><a className="text-lg">Membership</a></Link>
                    <Link href="/equipment" ><a className="text-sm ml-4">Equipment & Amenities</a></Link>
                    </div>
                    {/* PT Links */}
                    <div className="py-1 flex flex-col">
                    <Link href="/personal-training" ><a className="text-lg">Personal Training</a></Link>
                    <Link href="/1-on-1-training" ><a className="text-sm ml-4">1-on-1 Personal Training</a></Link>
                    <Link href="/semi-private-training" ><a className="text-sm ml-4">Semi-Private Personal Training</a></Link>
                    <Link href="/free-consultation" ><a className="text-sm ml-4">Free Fitness Consultation</a></Link>
                    </div>
                    {/* Pool Links */}
                    <div className="py-1 flex flex-col">
                    <Link href="/pool" ><a className="text-lg">Pool</a></Link>
                    <Link href="/adult-lessons" ><a className="text-sm ml-4">Adult Lessons</a></Link>
                    <Link href="/stingrays" ><a className="text-sm ml-4">Stingrays Swim Team</a></Link>
                    <Link href="/childrens-lessons" ><a className="text-sm ml-4">Childrens Lessons</a></Link>
                    </div>
                    {/* Other */}
                    <Link href="/schedules" ><a className="text-lg py-1">Schedules</a></Link>
                    <Link href="/news" ><a className="text-lg">News</a></Link>
                    </div>
                </div>
        </nav>
    )
}