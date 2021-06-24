import React from 'react'
import Image from 'next/image'


const ZoeInfo = () => {
    return (
        <div className="py-4 px-8 md:px-0 w-screen lg:w-8/12 lg:bg-gray-200 lg:p-16 lg:mb-8">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:mb-8">
                <div className="h-32 w-32 relative inline-block my-4 shadow-lg rounded-full lg:w-48 lg:h-48">
                    <Image
                    src="/zoe.jpg"
                    alt="Zoe Jenks"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    priority={true}
                    />
                </div>
                <div className="mb-4 text-center w-screen lg:w-max lg:ml-16">
                    <h1 className=" text-vacblue text-2xl font-extrabold lg:text-4xl">Zoe Jenks</h1>
                    <h2 className="uppercase font-bold text-lg text-gray-700 lg:text-2xl">Personal Trainer</h2>
                    <div className="flex justify-center text-xl ">
                    zoe@vashonathleticclub.com
                    </div>
                </div>
            </div>
            <div className="text-gray-700 leading-relaxed text-left flex flex-col items-center lg:text-xl lg:leading-loose">
            <p className="max-w-prose">
                Zoe is an empathetic, driven individual who thrives from helping others find success within
                themselves. Raised on Vashon, she has deep ties to this community and is excited to offer
                guidance and support to her peers who are looking for help on their fitness journey. She has
                spent most of her life participating in sports and understands the importance of regularly
                incorporating exercise into one’s lifestyle. Zoe specializes in communication, goal setting, and
                giving folks the tools they need to reach those goals. With her knowledge in resistance training,
                her outgoing demeanor, and her desire to see others succeed, Zoe is a natural personal
                trainer.
            </p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-around mt-16">
                <div className="mb-4 md:mb-0 md:w-5/12">
                    <h2 className="uppercase font-bold text-lg text-vacblue mb-4 lg:text-xl">Specialties</h2>
                    <ul className="text-gray-700 text-left p-4 bg-gray-200 shadow-md lg:bg-white">
                        <li className="mb-2">Group Fitness Instructor - HIIT Functional Fitness</li>
                        <li className="mb-2">Functional Strength Training</li>
                        <li className="">Weight Management</li>
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

export default ZoeInfo
