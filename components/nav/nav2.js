import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Drop2 from './drop2';
import './navbar.module.css'

export default function Nav2() {

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
        <nav className="z-50 fixed">
            {/* Logo screens 750px or larger */}
            <div className="hidden nav2:absolute h-48 nav2:inline-flex left-5" style={{width: '44rem'}}>
                <Link href="/" passHref={true}>
                    <Image
                        src={'/vacbanner.png'}
                        layout="fill"
                        objectFit="cover"
                        className="z-20"
                    />
                </Link>
            </div>
            {/* Logo screens 750px or smaller */}
            <div className="w-screen h-auto flex justify-center">
            <div className="h-56 w-56 nav2:hidden absolute">
                <Link href="/" passHref={true}>
                    <a>
                    <Image
                        src={'/vacbannerbelow.png'}
                        alt="Vashon Athletic Club logo"
                        layout="fill"
                        objectFit="contain"
                        className="z-20"
                    />
                    </a>
                </Link>
            </div>
            </div>

            <div className="absolute w-screen h-36 nav2:h-32 bg-white"></div>
            <div className="fixed bg-vacpurple items-center justify-end flex my-16 mx-auto py-4 px-8 w-full nav2">
                {/* Desktop Menu */}
                <div className="hidden burger:block mr-4">
                    <ul className="flex text-white text-lg items-center">
                    <li className={`${router.pathname === `/` ? `current-tab ` : ` `}nav-tab ml-4 px-4 flex items-center h-16 transition ease-in-out duration-150  focus:bg-white focus:bg-opacity-90 focus:text-vacpurple home-head`}><Link href="/"><a>Home</a></Link></li>
                        <ul className="nav-tab member-list"
                        onMouseEnter={() => setActive1(true)}
                        onMouseLeave={() => setActive1(false)}>
                            <li className={`${router.pathname.includes('/membership') ? `current-tab ` : ` `}member-head px-4 flex items-center h-16 transition ease-in-out duration-150  focus:bg-vacpurple focus:bg-opacity-90 focus:text-white`}>
                                <Link href="/membership" className="relative"><a>Membership</a></Link>
                            </li>
                        </ul>
                        {/* Drop2 parent refers to menuItems index to populate Drop2 menu */}
                        <ul className="nav-tab training-list ml-2"
                            onMouseEnter={() => setActive2(true)}
                            onMouseLeave={() => setActive2(false)}>
                        <li className={`${router.pathname.includes('/personal-training') ? `current-tab ` : ` `}training-head px-4 flex items-center h-16 transition ease-in-out duration-150  focus:bg-vacpurple focus:bg-opacity-90 focus:text-white`}>
                            <Link href="/personal-training" className="relative"><a>Personal Training</a></Link>
                        </li>
                        {active2 && <li><Drop2 parent="personal_training" onMouseEnter={() => setActive2(true)}
                            onMouseLeave={() => setActive2(false)}/></li>}
                        </ul>
                        
                        <ul className="nav-tab pool-list ml-2" 
                        onMouseEnter={() => setActive3(true)}
                        onMouseLeave={() => setActive3(false)}>
                            <li className={`${router.pathname.includes('/pool') ? `current-tab ` : ` `}pool-head px-4 flex items-center h-16 transition ease-in-out duration-150  focus:bg-vacpurple focus:bg-opacity-90 focus:text-white`}>
                                <Link href="/pool"><a>Pool</a></Link>
                            </li>
                            {active3 && <li><Drop2 parent="pool" onMouseEnter={() => setActive3(true)}
                            onMouseLeave={() => setActive3(false)}/></li>}
                        </ul>   
                        <li className={`${router.pathname === `/schedules` ? `current-tab ` : ` `}nav-tab ml-2 px-4 flex items-center h-16 transition ease-in-out duration-150  focus:bg-vacpurple focus:bg-opacity-90 focus:text-white schedules-head`}><Link href="/schedules"><a>Schedules</a></Link></li>    
                        <li className={`${router.pathname === `/news` ? `current-tab ` : ` `}nav-tab ml-2 px-4 flex items-center h-16 transition ease-in-out duration-150  focus:bg-vacpurple focus:bg-opacity-90 focus:text-white news-head`}><Link href="/news"><a>News</a></Link></li>
                    </ul>
                </div>
                {/* Mobile Menu */}
                <div className="burger:hidden z-50 fixed right-0" >
                    {/* Burger */}
                    <button onClick={() => toggleExpansion(!isExpanded)} className={`${ isExpanded ? `hidden` : ``} flex items-center px-3 py-2 border-vacblue text-white`}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <button onClick={() => toggleExpansion(!isExpanded)} className={`${ !isExpanded ? `hidden` : ``} flex items-center px-3 py-2 border-vacblue text-vacpurple`}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                    {/* Menu */}
                    <div className={`${ isExpanded ? `flex mobile-active` : `` } mt-60 text-left right-0 w-screen h-screen bg-white justify-center content-center burger-menu mobile fixed text-lg`}>
                        <div className="text-vacblue flex flex-col justify-center align-items-center mt-60 divide-y divide-grey-100">
                        {/* Membership Links */}
                        <div className="py-1 flex flex-col">
                        <Link href="/membership" ><a className="text-xl">Membership</a></Link>
                        </div>
                        {/* PT Links */}
                        <div className="py-1 flex flex-col">
                        <Link href="/personal-training" ><a className="text-xl">Personal Training</a></Link>
                        <Link href="/personal-training/1_on_1_training" ><a className="text-base ml-4">1-on-1 Personal Training</a></Link>
                        <Link href="/personal-training/semi_private_training" ><a className="text-base ml-4">Semi-Private Personal Training</a></Link>
                        <Link href="/personal-training/free_consultation" ><a className="text-base ml-4">Free Fitness Consultation</a></Link>
                        </div>
                        {/* Pool Links */}
                        <div className="py-1 flex flex-col">
                        <Link href="/pool" ><a className="text-xl">Pool</a></Link>
                        <Link href="/adult_lessons" ><a className="text-base ml-4">Adult Lessons</a></Link>
                        <Link href="/stingrays" ><a className="text-base ml-4">Stingrays Swim Team</a></Link>
                        <Link href="/childrens_lessons" ><a className="text-base ml-4">Childrens Lessons</a></Link>
                        </div>
                        {/* Other */}
                        <Link href="/schedules" ><a className="text-xl py-1">Schedules</a></Link>
                        <Link href="/news" ><a className="text-xl">News</a></Link>
                        </div>
                    </div>
                </div>
        </nav>
    )
}