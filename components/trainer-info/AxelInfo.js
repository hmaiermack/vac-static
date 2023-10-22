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
                    src="/AxelPic.jpg"
                    alt="Axel Sullivan"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    priority={true}
                    />
                </div>
                <div className="mb-4 text-center w-screen lg:w-max lg:ml-16">
                    <h1 className=" text-vacblue text-2xl font-extrabold lg:text-4xl">Axel Sullivan</h1>
                    <h2 className="uppercase font-bold text-lg text-gray-700 lg:text-2xl">Personal Trainer</h2>
                    <div className="flex justify-center text-xl ">
                    AxelFSullivan@gmail.com
                    </div>
                </div>
            </div>
            <div className="text-gray-700 leading-relaxed text-left flex flex-col items-center lg:text-xl lg:leading-loose">
            <p className="mb-4 max-w-prose">
            With over a decade of experience in the fitness industry, Axel specializes in
            understanding and optimizing your fitness goals. Axel&#39;s expertise extends to bodily
            alignment, sports performance, and customized fitness program design. Providing long-
            term fitness and lifestyle guidance. Focusing on growth and building solid fundamentals
            so you’re able to face whatever the world throws at you. Beyond qualifications, Axel is
            known for being kind, detail-oriented, and exceptionally knowledgeable, offering a
            premium training experience that&#39;s tailored to your unique needs.</p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-around mt-16">
                <div className="mb-4 md:mb-0 md:w-5/12">
                    <h2 className="uppercase font-bold text-lg text-vacblue mb-4 lg:text-xl">Specialties</h2>
                    <ul className="text-gray-700 text-left p-4 bg-gray-200 shadow-md lg:bg-white">
                        <li className="mb-2">Sports Performance</li>
                        <li className="mb-2">Kickboxing fitness</li>
                        <li className="mb-2">Balance and Alignment</li>
                        <li className="mb-2">Nutrition and Supplementation Counseling</li>
                        <li className="mb-2">Fitness Program Design</li>
                        <li className="">Long Term Fitness and Lifestyle Counseling</li>
                    </ul>
                </div>

                <div className="md:w-5/12">
                    <h2 className="uppercase font-bold text-lg text-vacblue mb-4 lg:text-xl lg:whitespace-nowrap">Education &amp; Certifications</h2>
                    <ul className="text-gray-700 text-left p-4 bg-gray-200 shadow-md lg:bg-white ">
                        <li className="mb-2">NASM Certified Personal Trainer</li>
                        <li className="mb-2">ISSA Certified Kickboxing Instructor</li>
                        <li className="">SafeSport Certified</li>
                        <li className="">Over 10 years of fitness industry experience</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default TristanInfo
