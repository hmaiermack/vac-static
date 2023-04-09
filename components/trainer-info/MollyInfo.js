import React from 'react'
import Image from 'next/image'


const MollyInfo = () => {
    return (
        <div className="py-4 px-8 md:px-0 w-screen lg:w-8/12 lg:bg-gray-200 lg:p-16 lg:mb-8">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:mb-8">
                <div className="h-32 w-32 relative inline-block my-4 shadow-lg rounded-full lg:w-48 lg:h-48">
                    <Image
                    src="/Molly.jpeg"
                    alt="Molly Champagne"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    priority={true}
                    />
                </div>
                <div className="mb-4 text-center w-screen lg:w-max lg:ml-16">
                    <h1 className=" text-vacblue text-2xl font-extrabold lg:text-4xl">Molly Champagne</h1>
                    <h2 className="uppercase font-bold text-lg text-gray-700 lg:text-2xl">Personal Trainer</h2>
                    <div className="flex justify-center text-xl ">
                    molly.m.champagne@gmail.com
                    </div>
                </div>
            </div>
            <div className="text-gray-700 leading-relaxed text-left flex flex-col items-center lg:text-xl lg:leading-loose">
            <p className="max-w-prose">
            Molly is originally from Vashon Island, and attended Baylor University, graduating with a bachelors of science in kinesiology and 
            health with an emphasis in nutrition. She is a certified personal trainer through the National Academy of Sports Medicine (NASM). 
            Molly believes exercise and nutrition are the key components to living a strong, healthy, and functional life. Her motivational coaching 
            style and welcoming attitude help create an inclusive training environment for every age, stage, and ability. 
            <br></br>
            In her free time, Molly enjoys watching baseball, playing tennis, hiking new trails, paddle boarding, and cold plunging in the Sound.
            </p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-around mt-16">
                <div className="mb-4 md:mb-0 md:w-5/12">
                    <h2 className="uppercase font-bold text-lg text-vacblue mb-4 lg:text-xl">Specialties</h2>
                    <ul className="text-gray-700 text-left p-4 bg-gray-200 shadow-md lg:bg-white">
                        <li className="mb-2">Excercise Science</li>
                        <li className="mb-2">Nutrition</li>
                    </ul>
                </div>

                <div className="md:w-5/12">
                    <h2 className="uppercase font-bold text-lg text-vacblue mb-4 lg:text-xl lg:whitespace-nowrap">Education &amp; Certifications</h2>
                    <ul className="text-gray-700 text-left p-4 bg-gray-200 shadow-md lg:bg-white ">
                        <li className="mb-2">B.S. Kinesiology</li>
                        <li className="mb-2">NASM Certified Personal Trainer</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default MollyInfo
