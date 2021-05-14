import React from 'react'
import Image from 'next/image'
import Layout from '../../components/layout'
import Button from '../../components/Button'

const index = ({data}) => {
    return (
        <Layout>
            <div className="h-screen flex">
                <div className="absolute block h-full w-screen bg-gradient-to-b from-vacblue to-transparent" style={{zIndex: -1}}  />
                <div className="h-screen top-52 md:top-0 w-screen absolute"style={{zIndex: -2}}>
                <Image
                    alt="Background image"
                    src="/poolsplash.jpg"
                    layout="fill"
                    objectFit="cover"
                    priority={true} 
                />
                </div>

                <div className="flex flex-col justify-center items-center relative pl-4 xl:px-32 z-10 w-screen">
                    <h1 className="tracking-tight mt-52 nav2:mt-44 med:mt-0 mb-8 text-center">
                        <span className="block text-white font-extrabold uppercase tracking-tighter text-6xl sm:text-7xl med:text-8xl leading-none mb-2 md:mb-0">Saltwater</span>
                        <span className="block text-vacgrey font-extrabold uppercase leading-6 text-3xl med:text-5xl">Pool & Spa</span>
                    </h1>
                </div>
            </div>

            <div className=" text-center w-screen bg-white p-16 z-10" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10vw), 0 100%)', marginBottom: '-10vw'}}>
                <h2 className=" text-center text-2xl md:text-4xl text-vacblue font-extrabold mb-8 uppercase">Jump in, the waters warm!</h2>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed mb-16 lg:mb-40">
                Come take a swim in our saltwater Pool & Hot Tub. The Pool is heated to 85 degrees and Hot Tub to 104 degrees year round. 
                Lap Swim, Family Swim, Exercise Classes, Swim Lessons & Swim Team are all available! 
                </p>
            </div>

            <div className="text-center bg-gray-200 w-screen p-16 pt-32" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10vw), 0 100%)', marginBottom: '-10vw', zIndex: '9'}}>
                <h2 className="mr-auto ml-auto text-center text-2xl md:text-4xl text-vacblue font-extrabold mb-8 uppercase max-w-prose lg:mt-40">Swimming Lessons</h2>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed">
                    Whether you've been swimming your whole life and are just looking to improve your technique or your child has never swam before,
                    we've got coaches and instructors to help. Private lessons or group sessions, we will work with you to find a solution that 
                    gives you the best experience possible.
                </p>
                <Button href="/pool/swim_lessons" text="more info" />
                <div className="py-8 lg:py-20" />
            </div>

            <div className="w-screen bg-white p-16 text-center lg:mt-40">
                <Button href="/schedules" text="Pool Schedule" />
            </div>


        </Layout>
        )
}

export async function getStaticProps() {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const res = await  fetch(`${url}/pool-splash`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }  
}


export default index
