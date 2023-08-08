import React from 'react'
import Layout from '../../components/layout'
import Image from 'next/image'
import Button from '../../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faCircle, faHeartbeat, faUserFriends, faClipboard, faSwimmer, faDumbbell } from '@fortawesome/free-solid-svg-icons'



const freeConsultation = () => {
    return (
        <Layout >
            <div className="h-screen flex">
                <div className="absolute block h-full w-screen bg-gradient-to-b from-vacblue to-transparent" style={{zIndex: -1}}  />
                <div className="h-screen w-screen absolute" style={{zIndex: -2}}>
                <Image
                    alt="Background image"
                    src="/ptsplash.jpg"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                    objectPosition="0 5rem"
                />
                </div>

                <div className="flex flex-col justify-center items-center relative pl-4 xl:px-32 z-10 w-screen">
                <h1 className="tracking-tight mt-52 nav2:mt-44 med:mt-0 mb-8 text-center">
                <span className="block text-white font-extrabold uppercase tracking-tighter text-4xl med:text-8xl leading-none mb-8 md:mb-0">Free Fitness Consultation</span>
                </h1>
                <Button href="https://vacpersonalfitnesstraining.as.me/vacfreefitnessconsultation" text="Schedule today!"/>
                </div>
            </div>

            <div className="p-8 w-screen text-center">
            <h1 className=" text-center text-2xl md:text-4xl text-vacblue font-extrabold mb-8 uppercase">Why Schedule a Fitness Consultation?</h1>
                <p className=" ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed mb-16 text-left">
                    Identifying your goals and assessing your fitness level is the first step towards any wellness endeavor. 
                    A Fitness Consultation is a complimentary consultation with a fitness professional, designed to help you 
                    understand what your needs and goals are for building a healthy lifestyle. This appointment will guide you through our various Personal Training options to find
                    the perfect fit for your unique fitness plan.
                </p>
                <ul className="md:flex md:flex-row md:justify-center md:flex-wrap md:items-start text-center p-4 text-xl text-gray-700">
                    <li className="flex flex-col justify-center items-center mb-8 md:w-2/6 md:px-8 md:mb-16 ">
                        <span className="inline-block w-20 h-20 mb-8 relative text-center">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faQuestion} className="text-white fa-2x absolute m-auto left-0 top-0 right-0 bottom-0"/>
                        </span>
                        <span className="text-center">Discover what motivates you — what is your “why”?</span>
                        </li>
                    <li className="flex flex-col justify-center items-center mb-8 md:w-2/6 md:px-8 md:mb-16">
                        <span className="inline-block w-20 h-20 mb-8 relative text-center">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faHeartbeat} className="text-white fa-2x absolute m-auto left-0 top-0 right-0 bottom-0"/>
                        </span>
                        <span className="text-center">Assess your current fitness level and explore your goals</span>
                    </li>
                    <li className="flex flex-col justify-center items-center mb-8 md:w-2/6 md:px-8 md:mb-16">
                        <span className="inline-block w-20 h-20 mb-8 relative text-center">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faClipboard} className="text-white fa-2x absolute m-auto left-0 top-0 right-0 bottom-0"/>
                        </span>
                        <span className="text-center">Receive expert fitness recommendations and establish a plan of action</span>
                    </li>
                    <li className="flex flex-col justify-center items-center mb-8 md:w-2/6 md:px-8">
                        <span className="inline-block w-20 h-20 mb-8 relative text-center">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faUserFriends} className="text-white fa-2x absolute m-auto left-0 top-0 right-0 bottom-0"/>
                        </span>
                        <span className="text-center">Get to know our Personal Trainers</span>
                    </li>
                    <li className="flex flex-col justify-center items-center mb-8 md:w-2/6 md:px-8">
                        <span className="inline-block w-20 h-20 mb-8 relative text-center">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faDumbbell} className="text-white fa-2x absolute m-auto left-0 top-0 right-0 bottom-0"/>
                        </span>
                        <span className="text-center">Explore 1-ON-1 and Semi-Private Training options</span>
                    </li>
                    <li className="flex flex-col justify-center items-center md:w-2/6 md:px-8">
                        <span className="inline-block w-20 h-20 mb-8 relative text-center">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faSwimmer} className="text-white fa-2x absolute m-auto left-0 top-0 right-0 bottom-0"/>
                        </span>
                        <span className="text-center">Learn about our group fitness classes</span>
                    </li>
                </ul>
                <Button href="https://vacpersonalfitnesstraining.as.me/vacfreefitnessconsultation" text="Schedule a free fitness consultation today!" size="small"/>
            </div>
        </Layout>
    )
}

export default freeConsultation
