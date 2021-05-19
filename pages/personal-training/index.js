import React from 'react'
import Image from 'next/image'
import Layout from '../../components/layout'
import Button from '../../components/Button'
import TravisInfo from '../../components/trainer-info/TravisInfo'
import KarenInfo from '../../components/trainer-info/KarenInfo'
import TristanInfo from '../../components/trainer-info/TristanInfo'



const index = ({data}) => {
    console.log(data)
    return (
        <Layout>
        <div className="h-screen flex">
            <div className="absolute block h-full w-screen bg-gradient-to-b from-vacblue to-transparent" style={{zIndex: -1}}  />
            <div className="h-screen top-52 md:top-0 w-screen absolute"style={{zIndex: -2}}>
            <Image
                alt="Background image"
                src="/ptlanding.jpg"
                layout="fill"
                objectFit="cover"
                priority={true}
            />
            </div>

            <div className="flex flex-col justify-center items-center relative pl-4 xl:px-32 z-10 w-screen">
            <h1 className="tracking-tight mt-52 nav2:mt-44 med:mt-0 sm:text-center text-left">
              <span className="block text-white font-extrabold uppercase tracking-tighter text-6xl sm:text-7xl med:text-8xl leading-none mb-8 md:mb-0">Reach your goals</span>
              <span className="block lg:hidden text-vacgrey font-extrabold uppercase leading-6 text-3xl med:text-5xl">{data.first_header}</span>
              <span className="lg:block hidden text-vacgrey font-extrabold uppercase leading-6 text-3xl med:text-5xl">{data.sub_header}</span>
            </h1>
            </div>

        </div>
        <div className="bg-gray-200 lg:p-8 py-8 ">
            <h1 className="text-center text-4xl text-vacblue font-extrabold mb-4 uppercase">Free Fitness Consultation</h1>
            <div className="lg:w-5/12 flex-col justify-center items-center flex  bg-white p-8 shadow-lg mx-auto">
            <p className="text-gray-700 leading-relaxed text-xl font-bold mb-4">
                {data.consultation_blurb.description}
            </p>
            <Button href={data.consultation_blurb.button_url} text={data.consultation_blurb.button_text} />
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
                    Exercise with up to 4 other like-minded participants
                    under the guidance of a personal trainer in a fun, safe, and supportive
                    environment. Sessions cover strength and aerobic conditioning, as well as,
                    mobility, balance, agility, and core work.
                    </p>
                    <Button href="/personal-training/semi_private_training" text="More Info" />

                </div>
                <div className="bg-white p-4 mt-4 text-center md:flex-grow-0 md:w-5/12 mb-4 w-9/12">
                    <h2 className="uppercase font-bold text-2xl text-vacblue mb-4 lg:text-4xl">1-On-1 Personal Training</h2>
                    <p className="text-left text-gray-700 leading-relaxed text-xl">
                        Get the guidance, motivation, encouragement, and personal attention you need to reach your goals with 
                        a personal trainer who will tailor your program to meet your individual needs.
                    </p>
                    <Button href="/personal-training/1_on_1_training" text="More Info" />

                </div>
            </div>
        </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const res = await  fetch(`${url}/pt-splash`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}

export default index
