import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Menu from 'react-burger-menu/lib/menus/slide'
import { styles } from './burgerStyles'
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
                    <a>
                    <Image
                        src={'/vacbanner.png'}
                        layout="fill"
                        objectFit="cover"
                        className="z-20"
                        priority={true}
                    />
                    </a>
                </Link>
            </div>
            {/* Logo screens 750px or smaller */}
            <div className="w-screen h-auto flex justify-center">
            <div className="h-56 w-56 nav2:hidden absolute z-20">
                <Link href="/" passHref={true}>
                    <a>
                    <Image
                        src={'/vacbannerbelow.png'}
                        alt="Vashon Athletic Club logo"
                        layout="fill"
                        objectFit="contain"
                        className=""
                        priority={true}
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
                        {/* <li className={`${router.pathname === `/news` ? `current-tab ` : ` `}nav-tab ml-2 px-4 flex items-center h-16 transition ease-in-out duration-150  focus:bg-vacpurple focus:bg-opacity-90 focus:text-white news-head`}><Link href="/news"><a>News</a></Link></li> */}
                        <li className={`${router.pathname === `/covid` ? `current-tab ` : ` `}nav-tab ml-2 px-4 flex items-center h-16 transition ease-in-out duration-150  focus:bg-vacpurple focus:bg-opacity-90 focus:text-white news-head`}><Link href="/covid"><a>COVID-19 Guidelines</a></Link></li>
                        <li className={`waiver-head nav-tab ml-2 px-4 flex items-center h-16 transition ease-in-out duration-150  focus:bg-vacpurple focus:bg-opacity-90 focus:text-white`}><a target="_blank" href="https://waiver.smartwaiver.com/v/vashonathleticclub/">Waiver</a></li>
                    </ul>
                </div>
            </div>
            <div className="burger:hidden">
                <Menu right styles={styles}>
                    <div className="relative z-50">
                        <Link href="/"><a className="mt-4 text-xl block font-extrabold text-vacblue">Home</a></Link>
                        <Link href="/membership" ><a className="text-xl block mt-2 font-extrabold text-vacblue">Membership</a></Link>
                        <Link href="/personal-training" ><a className="text-xl block mt-2 font-extrabold text-vacblue">Personal Training</a></Link>
                        <Link href="/personal-training/1_on_1_training" ><a className="text-base ml-4 block text-vacblue">1-ON-1 Personal Training</a></Link>
                        <Link href="/personal-training/semi_private_training" ><a className="text-base ml-4 block text-vacblue">Semi-Private Personal Training</a></Link>
                        <Link href="/personal-training/free_consultation" ><a className="text-base ml-4 block text-vacblue">Free Fitness Consultation</a></Link>
                        <Link href="/pool" ><a className="text-xl block font-extrabold text-vacblue mt-2">Pool</a></Link>
                        <Link href="/pool/stingrays" ><a className="text-base ml-4 block text-vacblue">Stingrays Swim Team</a></Link>
                        <Link href="/pool/swim_lessons" ><a className="text-base ml-4 block text-vacblue">Swim Lessons</a></Link>
                        <Link href="/schedules" ><a className="mt-2 text-xl block font-extrabold text-vacblue">Schedules</a></Link>
                        <Link href="/covid" ><a className="mt-2 text-xl block font-extrabold text-vacblue w-full">COVID-19 Guidelines</a></Link>
                        <a className="mt-2 text-xl block font-extrabold text-vacblue w-full" target="_blank" href="https://waiver.smartwaiver.com/v/vashonathleticclub/">Waiver</a>
                    </div>
                </Menu>
            </div>
        </nav>
    )
}