import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faCircle, } from '@fortawesome/free-solid-svg-icons'


const KarenInfo = () => {
    return (
        <div className="py-4 px-8 md:px-0 w-screen lg:w-8/12 lg:bg-gray-200 lg:p-16 lg:mb-8 border-b border-gray-400 lg:border-none">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:mb-8">
                <div className="h-32 w-32 relative inline-block my-4 shadow-lg rounded-full lg:w-48 lg:h-48">
                    <Image
                    src="/karen.jpg"
                    alt="Karen Wollgast"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full "
                    />
                </div>
                <div className="mb-4 text-center w-screen lg:w-max lg:ml-16">
                    <h1 className=" text-vacblue text-2xl font-extrabold lg:text-4xl">Karen Wollgast</h1>
                    <h2 className="uppercase font-bold text-lg text-gray-700 lg:text-2xl">Personal Trainer</h2>
                    <div className="flex justify-center text-xl ">
                    karen@vashonathleticclub.com
                    </div>
                </div>
            </div>
            <div className="text-gray-700 leading-relaxed text-left flex flex-col items-center lg:text-xl lg:leading-loose">
            <p className="max-w-prose">
            ​A long time instructor, Karen has been involved in wellness and fitness for over 20 years.
              She has taught and trained in a myriad of modalities throughout that time.  
              Karen is an Ace certified professional and certified Yoga instructor. 
               Her classes and personal training sessions focus on range of motion, body awareness, alignment, 
               strength and stability for sustainable movement to keep participants doing the things they love to do.  
               Karen’s classes are self paced and suited for all types of participants who want a safe challenge and are 
               able to continue to master movements, explore boundaries and tap into their bodies full potential.

</p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-around mt-16">
                <div className="mb-4 md:mb-0 md:w-5/12">
                    <h2 className="uppercase font-bold text-lg text-vacblue mb-4 lg:text-xl">Specialties</h2>
                    <ul className="text-gray-700 text-left p-4 bg-gray-200 shadow-md lg:bg-white">
                        <li className="mb-2">Maintaining functional movement for activities of daily living we love</li>
                        <li className="mb-2">Corrective exercise for post-injury and prevention for the future</li>
                        <li className="mb-2">Varying degrees of focus and intensity depending on client’s needs</li>
                        <li className="">Postural awareness and mind/body agility</li>
                    </ul>
                </div>

                <div className="md:w-5/12">
                    <h2 className="uppercase font-bold text-lg text-vacblue mb-4 lg:text-xl lg:whitespace-nowrap">Education &amp; Certifications</h2>
                    <ul className="text-gray-700 text-left p-4 bg-gray-200 shadow-md lg:bg-white ">
                        <li className="mb-2">ACE Certified Personal Trainer</li>
                        <li className="mb-2">ACE Certified Group X Instructor</li>
                        <li className="">Certified Yoga Instructor</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default KarenInfo
