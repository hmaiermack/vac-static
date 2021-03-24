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
                    src="/tristan.jpg"
                    alt="Tristan Carbery"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full "
                    />
                </div>
                <div className="mb-4 text-center w-screen lg:w-max lg:ml-16">
                    <h1 className=" text-vacblue text-2xl font-extrabold lg:text-4xl">Tristan Carbery</h1>
                    <h2 className="uppercase font-bold text-lg text-gray-700 lg:text-2xl">Personal Trainer</h2>
                    <div className="flex justify-center text-xl ">
                        <FontAwesomeIcon icon={faPhone} className="mr-4 cursor-pointer"/>
                        <FontAwesomeIcon icon={faEnvelope} className=" ml-4 cursor-pointer"/>
                    </div>
                </div>
            </div>
            <div className="text-gray-700 leading-relaxed text-left flex flex-col items-center lg:text-xl lg:leading-loose">
            <p className="mb-4 max-w-prose">
            ​Tristan has more than a decade of experience in the health and fitness field with a Bachelor’s Degree in exercise physiology 
            from Humboldt State University. Tristan has worked in corporate gyms in Colorado Springs and San Diego as the lead personal 
            trainer, as well as owning and operating his own private training business in southern California.</p>
            
            <p className="max-w-prose">
            More recently, he has taken a deep dive into Integrative Medicine and Holistic Healing. 
            What makes Tristan unique is his comprehensive understanding of the human condition and what it takes to move a person toward 
            optimum health and wellness. He recognizes the connection between mind, body and spirit and utilizes this understanding to 
            promote well-being for all his clients. He is a certified Psych-K facilitator, in active myofascial release technique and 
            regularly practices Qi Gong.</p>

            </div>

            <div className="flex flex-col md:flex-row md:justify-around mt-16">
                <div className="mb-4 md:mb-0 md:w-5/12">
                    <h2 className="uppercase font-bold text-lg text-vacblue mb-4 lg:text-xl">Specialties</h2>
                    <ul className="text-gray-700 text-left p-4 bg-gray-200 shadow-md lg:bg-white">
                        <li className="mb-2">Weight Loss</li>
                        <li className="mb-2">Athletic Performance</li>
                        <li className="mb-2">Rahabilitative and Corrective Exercise</li>
                        <li className="mb-2">Kettlebell Training</li>
                        <li className="mb-2">TRX Training</li>
                        <li className="mb-2">Olympic-style Weightlifting</li>
                        <li className="">Nutrition and Supplementation Counseling</li>
                    </ul>
                </div>

                <div className="md:w-5/12">
                    <h2 className="uppercase font-bold text-lg text-vacblue mb-4 lg:text-xl lg:whitespace-nowrap">Education &amp; Certifications</h2>
                    <ul className="text-gray-700 text-left p-4 bg-gray-200 shadow-md lg:bg-white ">
                        <li className="mb-2">B.S. Exercise Physiology</li>
                        <li className="mb-2">ISSA Certified Personal Trainer</li>
                        <li className="">Active Myofascial Release Technique</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default TristanInfo
