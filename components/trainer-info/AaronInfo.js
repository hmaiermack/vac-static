import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faCircle, } from '@fortawesome/free-solid-svg-icons'


const TristanInfo = () => {
    return (
        <div className="py-4 px-8 md:px-0 w-screen lg:w-8/12 lg:bg-gray-200 lg:p-16 lg:mb-8">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:mb-8">
                <div className="h-32 w-32 relative inline-block my-4 shadow-lg rounded-full lg:w-48 lg:h-48">
                    <Image
                    src="/aaronphoto.jpg"
                    alt="Aaron Brockschmidt"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    priority={true}
                    />
                </div>
                <div className="mb-4 text-center w-screen lg:w-max lg:ml-16">
                    <h1 className=" text-vacblue text-2xl font-extrabold lg:text-4xl">Aaron Brockschmidt</h1>
                    <h2 className="uppercase font-bold text-lg text-gray-700 lg:text-2xl">Personal Trainer</h2>
                    <div className="flex justify-center text-xl ">
                    arnartb@gmail.com
                    </div>
                </div>
            </div>
            <div className="text-gray-700 leading-relaxed text-left flex flex-col items-center lg:text-xl lg:leading-loose">
            <p className="mb-4 max-w-prose">
                Aaron’s three main passions in life are fitness, music, and philosophy. He gained his passion for fitness
                because it saved his life. He combines a science-based approach as well as a no-excuses mindset to his
                training. In his spare time, he furthers his fitness education through experience, mentorship, and formal
                education so he will always be improving as he works with you!
            </p>
            
            <p className="max-w-prose">
                Aaron takes his time to listen and connect with each one of his clients. He is grateful to be able to share
                his knowledge and experience with others to help them achieve their goals. He understands everyone is
                unique and there is no one-size-fits-all approach to personal training. If you have no experience in the
                gym or you just need a little direction, Aaron knows how to get and keep you rolling.            
            </p>

            </div>

            <div className="flex flex-col md:flex-row md:justify-around mt-16">
                <div className="mb-4 md:mb-0 md:w-5/12">
                    <h2 className="uppercase font-bold text-lg text-vacblue mb-4 lg:text-xl">Specialties</h2>
                    <ul className="text-gray-700 text-left p-4 bg-gray-200 shadow-md lg:bg-white">
                        <li className="mb-2">Weight Loss</li>
                        <li className="mb-2">Bodybuilding</li>
                        <li className="mb-2">Strength Training</li>
                        <li className="mb-2">Muscle Building</li>
                        <li className="mb-2">TRX Training</li>
                        <li className="mb-2">Weight Management</li>
                        <li className="">Nutrition and Supplementation Counseling</li>
                    </ul>
                </div>

                <div className="md:w-5/12">
                    <h2 className="uppercase font-bold text-lg text-vacblue mb-4 lg:text-xl lg:whitespace-nowrap">Education &amp; Certifications</h2>
                    <ul className="text-gray-700 text-left p-4 bg-gray-200 shadow-md lg:bg-white ">
                        <li className="mb-2">ISSA Certified Personal Trainer</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default TristanInfo
