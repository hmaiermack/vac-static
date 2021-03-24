import React from 'react'
import Image from 'next/image'
import Layout from '../../components/layout'
import ReactPlayer from 'react-player/lazy'
import TravisInfo from '../../components/trainer-info/TravisInfo'
import KarenInfo from '../../components/trainer-info/KarenInfo'
import TristanInfo from '../../components/trainer-info/TristanInfo'



const index = () => {
    return (
        <Layout>
        <div className="h-screen flex">
            <div className="absolute block h-full w-screen bg-gradient-to-b from-vacblue to-transparent" style={{zIndex: -1}}  />
            <div className="h-screen top-52 md:top-0 w-screen absolute"style={{zIndex: -2}}>
            <Image
                alt="Background image"
                src="/vacsplash.jpg"
                layout="fill"
                objectFit="cover"
                quality={100} 
            />
            </div>

            <div className="flex flex-col justify-center items-center relative pl-4 xl:px-32 z-10 w-screen">
            <h1 className="tracking-tight mt-52 nav2:mt-44 med:mt-0 mb-8 sm:text-center text-left">
              <span className="block text-white font-extrabold uppercase tracking-tighter text-6xl sm:text-7xl med:text-8xl leading-none mb-8 md:mb-0">Reach your goals</span>
              <span className="block lg:hidden text-vacblue font-extrabold uppercase leading-6 text-3xl med:text-5xl">With a Personal trainer!</span>
              <span className="lg:block hidden text-vacblue font-extrabold uppercase leading-6 text-3xl med:text-5xl">With a VAC Personal trainer!</span>
            </h1>
            <button className="w-max p-4 bg-vacblue shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-vacpurple uppercase sm:col-start-2">
                Schedule Now!
            </button>

            </div>

        </div>
        <div className="bg-gray-200 lg:p-8 py-8">
            <h1 className="text-center text-4xl text-vacblue font-extrabold mb-4 uppercase">Free Fitness Consultation</h1>
            <div className="flex flex-col lg:flex-row justify-around">
            <div className="relative justify-center mb-4 lg:mb-0 lg:w-6/12 sm:h-96 flex px-8 lg:p-0">
            <ReactPlayer url='https://www.youtube.com/watch?v=wU1hoPIKb4M' width='100%' height='100%' />
            </div>
            <div className="lg:w-5/12 flex-col justify-center items-center flex  bg-white p-8 shadow-lg">
            <p className="text-gray-700 leading-relaxed text-xl font-bold mb-4">
                Identifying your goals and assessing your fitness level is the first step towards any wellness endeavor.
                 A Fitness Consultation is a complimentary consultation with a fitness professional, 
                 designed to help you understand what your needs and goals are for building a healthy lifestyle.
                This appointment offers a strategic plan for fitness and nutrition based
                on your individual needs to get you started achieving your goals.
            </p>
            <button className=" p-4 bg-vacblue shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-vacpurple uppercase">
                Schedule your consultation today!
            </button>
            </div>
            </div>
        </div>
        <div className="mt-8 text-center md:flex md:flex-col md:justify-center md:items-center w-screen">
            <h1 className="text-center text-4xl text-vacblue font-extrabold uppercase lg:mb-4">Meet our Trainers</h1>
            <TravisInfo />
            <KarenInfo />
            <TristanInfo />
        </div>

        <div className="flex flex-col py-8 bg-gray-200">
            <h1 className="text-center text-4xl text-vacblue font-extrabold uppercase lg:mb-4">Our Training Options</h1>
            <div className="flex flex-col md:flex-row justify-around w-full items-center ">
                <div className="bg-white p-4 mt-4 mb-4 text-center md:flex-grow-0 md:w-5/12 w-9/12">
                    <h2 className="uppercase font-bold text-2xl text-vacblue mb-4 lg:text-4xl">Semi-Private Training</h2>
                    <p className="text-left text-gray-700 leading-relaxed text-xl">
                        Workout among up to 5 like minded individuals in a fun, safe and supportive environment.  
                        Training covers fundamentals of strength training, mobility, balance, agility and core work. 
                    </p>
                    <button className="mt-4 p-4 bg-vacblue shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-vacpurple uppercase">
                        More Info
                    </button>

                </div>
                <div className="bg-white p-4 mt-4 text-center md:flex-grow-0 md:w-5/12 mb-4 w-9/12">
                    <h2 className="uppercase font-bold text-2xl text-vacblue mb-4 lg:text-4xl">Personal Training</h2>
                    <p className="text-left text-gray-700 leading-relaxed text-xl">
                        Get the guidance, motivation, encouragement, and personal attention you need to reach your goals with 
                        a personal trainer who will tailor your program to meet your individual needs.
                    </p>
                    <button className="mt-4 p-4 bg-vacblue shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-vacpurple uppercase">
                        More Info
                    </button>

                </div>
            </div>
        </div>
        </Layout>
    )
}

export default index
