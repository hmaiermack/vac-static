import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faCircle, } from '@fortawesome/free-solid-svg-icons'


const TravisInfo = () => {
    return (
        <div className="py-4 px-8 md:px-0 w-screen md:w-11/12 lg:w-8/12 lg:bg-gray-200 lg:p-16 lg:mb-8 border-b border-gray-400 lg:border-none">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:mb-8">
                <div className="h-32 w-32 relative inline-block my-4 shadow-lg rounded-full lg:w-48 lg:h-48">
                    <Image
                    src="/travis.jpg"
                    alt="Travis Tuchak"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full "
                    />
                </div>
                <div className="mb-4 text-center w-screen lg:w-max lg:ml-16">
                    <h1 className=" text-vacblue text-2xl font-extrabold lg:text-4xl">Travis Tuchak</h1>
                    <h2 className="uppercase font-bold text-lg text-gray-700 lg:text-2xl">Director of Personal Training</h2>
                    <div className="flex justify-center text-xl ">
                    travis@vashonathleticclub.com
                    </div>
                </div>
            </div>
            <div className="text-gray-700 leading-relaxed text-left flex flex-col items-center lg:text-xl lg:leading-loose">
            <p className="mb-4 max-w-prose">
            Travis has had two ever-present passions in his life: physical fitness and animals. As a thirteen year old
            kid he was doing one of three things: investigating animals in the wild, lifting weights in the gym, and
            studying for school. Little has changed over time. A keen interest in biology led him to a doctorate in
            veterinary medicine specializing in radiation oncology. The fitness passion led him to the strength sport
            of powerlifting. Somewhere in between, Travis discovered his love for personal training. With his
            scientific background, knowledge of anatomy and physiology, passion for sports and fitness, and
            commitment to helping others become healthier versions of themselves, Travis has the perfect
            combination of traits for personal training.
            </p>

            <p className="max-w-prose">
            Throughout his life he has assumed numerous and varied
            roles as a teacher and guide, always enjoying the chance to share knowledge with others. His approach
            to personal training draws on these experiences, guiding and motivating clients to more active and
            healthy lifestyles through individualized exercise programs. His special interests include the benefits of
            resistance training for all age groups and fitness levels with emphasis on correct form and safety. As the
            Personal Training Director at the Vashon Athletic Club, Travis strives for every member to have the best
            possible experience through their unique fitness journey.
            </p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-around mt-16">
                <div className="mb-4 md:mb-0 md:w-5/12">
                    <h2 className="uppercase font-bold text-lg text-vacblue mb-4 lg:text-xl">Specialties</h2>
                    <ul className="text-gray-700 text-left p-4 bg-gray-200 shadow-md lg:bg-white">
                        <li className="mb-2">Functional Strength Training</li>
                        <li className="mb-2">Weight Management</li>
                        <li className="mb-2">Powerlifting Coach</li>
                        <li className="mb-2">TRX</li>
                        <li className="mb-2">Kettlebell Training</li>
                        <li>Group Fitness - HIIT Training</li>
                    </ul>
                </div>

                <div className="md:w-5/12">
                    <h2 className="uppercase font-bold text-lg text-vacblue mb-4 lg:text-xl lg:whitespace-nowrap">Education &amp; Certifications</h2>
                    <ul className="text-gray-700 text-left p-4 bg-gray-200 shadow-md lg:bg-white ">
                        <li className="mb-2">B.S. Biology</li>
                        <li className="mb-2">M.S. Environmental and Radiological Health Sciences</li>
                        <li className="mb-2">Doctor Veterinary Medicine</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default TravisInfo
