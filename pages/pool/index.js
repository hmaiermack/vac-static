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
                    quality={100} 
                />
                </div>

                <div className="flex flex-col justify-center items-center relative pl-4 xl:px-32 z-10 w-screen">
                    <h1 className="tracking-tight mt-52 nav2:mt-44 med:mt-0 mb-8 text-center">
                        <span className="block text-white font-extrabold uppercase tracking-tighter text-6xl sm:text-7xl med:text-8xl leading-none mb-2 md:mb-0">{data.first_header}</span>
                        <span className="block text-vacgrey font-extrabold uppercase leading-6 text-3xl med:text-5xl">{data.sub_header}</span>
                    </h1>
                </div>
            </div>

            <div className=" text-center w-screen bg-white p-16 z-10" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10vw), 0 100%)', marginBottom: '-10vw'}}>
                <h2 className=" text-center text-2xl md:text-4xl text-vacblue font-extrabold mb-8 uppercase">Come on in, the waters warm!</h2>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed mb-16 lg:mb-40">
                    Come take a dive in our heated saltwater swimming pool and spa. Whether you prefer lap swimming, aerobics, or just relaxing
                    in the spa we've got something for you. With aerobics classes every weekday, swimming lessons, and more you'll always be able to find
                    exactly the right activity in the pool.
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

            <div className="w-screen bg-white p-16 pt-32 text-center lg:mt-40">
                <h2 className="mr-auto ml-auto  text-center text-2xl md:text-4xl text-vacblue font-extrabold mb-8 uppercase max-w-prose">Aerobics</h2>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed mb-8">
                    We offer group aerobics in the pool nearly every day of the week! Have fun and get fit with our 
                    aerobics instructors!
                </p>
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
