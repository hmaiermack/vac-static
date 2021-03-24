import React from 'react'
import Layout from '../../components/layout'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faCircle, faHeartbeat, faUserFriends, faClipboard, faSwimmer, faDumbbell } from '@fortawesome/free-solid-svg-icons'



const freeConsultation = () => {
    return (
        <Layout >
            <div className="h-screen flex">
                <div className="absolute block h-full w-screen bg-gradient-to-b from-vacblue to-transparent" style={{zIndex: -1}}  />
                <div className="h-screen w-screen absolute"style={{zIndex: -2}}>
                <Image
                    alt="Background image"
                    src="/consultation.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100} 
                />
                </div>

                <div className="flex flex-col justify-center items-center relative pl-4 xl:px-32 z-10 w-screen">
                <h1 className="tracking-tight mt-52 nav2:mt-44 med:mt-0 mb-8 text-center">
                <span className="block text-white font-extrabold uppercase tracking-tighter text-4xl med:text-8xl leading-none mb-8 md:mb-0">Free Fitness Consultation</span>
                </h1>
                <button className="w-max p-4 bg-vacblue shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-vacpurple uppercase sm:col-start-2">
                    Schedule Now!
                </button>
                </div>
            </div>

            <div className="p-8 w-screen">
            <h1 className=" text-center text-2xl md:text-4xl text-vacblue font-extrabold mb-8 uppercase">Why Schedule a Fitness Consultation?</h1>
                <p className=" ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed mb-16">Identifying your goals and assessing your fitness level is the first step towards any wellness endeavor. 
                    A Fitness Consultation is a complimentary consultation with a fitness professional, designed to help you 
                    understand what your needs and goals are for building a healthy lifestyle. This appointment offers a strategic 
                    plan for fitness and nutrition based on your individual needs to get you started achieving your goals.
                </p>
                <ul className="md:flex md:flex-row md:justify-center md:flex-wrap md:items-start text-center p-4 text-xl text-gray-700">
                    <li className="flex flex-col justify-center items-center mb-8 md:w-2/6 md:px-8 md:mb-16 ">
                        <span className="fa-layers w-20 h-20 mb-4">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faQuestion} className="text-white fa-2x"/>
                        </span>
                        <span className="text-center">Discover what motivates you—what is your “why”?</span>
                        </li>
                    <li className="flex flex-col justify-center items-center mb-8 md:w-2/6 md:px-8 md:mb-16">
                        <span className="fa-layers w-20 h-20 mb-4">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faHeartbeat} className="text-white fa-2x"/>
                        </span>
                        <span className="text-center">Establish your fitness level by learning a few fundamental movement patterns</span>
                    </li>
                    <li className="flex flex-col justify-center items-center mb-8 md:w-2/6 md:px-8 md:mb-16">
                        <span className="fa-layers w-20 h-20 mb-4">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faClipboard} className="text-white fa-2x"/>
                        </span>
                        <span className="text-center">Receive expert fitness recommendations and establish a plan</span>
                    </li>
                    <li className="flex flex-col justify-center items-center mb-8 md:w-2/6 md:px-8">
                        <span className="fa-layers w-20 h-20 mb-4">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faUserFriends} className="text-white fa-2x"/>
                        </span>
                        <span className="text-center">Get to know our Personal Trainers</span>
                    </li>
                    <li className="flex flex-col justify-center items-center mb-8 md:w-2/6 md:px-8">
                        <span className="fa-layers w-20 h-20 mb-4">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faDumbbell} className="text-white fa-2x"/>
                        </span>
                        <span className="text-center">Explore one-on-one and semi-private training options</span>
                    </li>
                    <li className="flex flex-col justify-center items-center md:w-2/6 md:px-8">
                        <span className="fa-layers w-20 h-20 mb-4">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faSwimmer} className="text-white fa-2x"/>
                        </span>
                        <span className="text-center">Learn about our swim programs and group fitness classes</span>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}

export default freeConsultation
