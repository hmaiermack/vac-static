import React, { useState } from 'react'
import Image from 'next/image'
import Layout from '../../components/layout'
import { Formik, Field, Form } from 'formik';
import emailjs from 'emailjs-com'
import {init} from 'emailjs-com'

const stingrays = ({data}) => {

    const [submitted, setSubmitted] = useState(false)

    init("user_2T5iH84OTntfWJrsjQZ1W");

    const sendEmail= (templateValues) => {
        
        emailjs.send('service_c2wv5qc', 'swim', templateValues)
            .then(() => setSubmitted(true),
             function(error) {
                alert(error);
            })
    }

    return (
        <Layout>
            <div className="h-screen flex">
                <div className="absolute block h-full w-screen bg-gradient-to-b from-vacblue to-transparent" style={{zIndex: -1}}  />
                <div className="h-screen top-52 md:top-0 w-screen absolute"style={{zIndex: -2}}>
                <Image
                    alt="Background image"
                    src="/stingrays.jpg"
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
                <Image alt="Stingrays logo"
                src="/stingray.png"
                height={500}
                width={500} 
                layout="intrinsic"
                />
                <h2 className=" text-center text-2xl md:text-4xl text-vacblue font-extrabold uppercase mb-8">USA Swimming Certified</h2>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed mb-16 lg:mb-40">
                Vashon Stingrays is a year-round USA swimming competitive team. We are part of the islands premier Vashon Athletic Club training 
                center.  Our team has the island’s most sought-after and experienced professional coaches and instructors.  Three of our coaches 
                each have over 30 years of experience in coaching, instructing and competitive swimming.  Stingrays are a part of USA Swimming and our 
                staff includes accomplished support coaches and accredited and certified personal in-house trainers. 
                </p>
            </div>

            <div className="text-center bg-gray-200 w-screen p-16 pt-32">
                <h2 className="mr-auto ml-auto text-center text-2xl md:text-4xl text-vacblue font-extrabold mb-8 uppercase max-w-prose lg:mt-40">Competitive Swimming for all levels</h2>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed mb-8">
                We encourage parents to choose this program because of the continuity and the professional, knowledgeable approach to 
                training throughout their age group. Competitions occur year-round to meet the needs of every level of swimmer in our swim programs. 
                The Stingray Competitive team participates in USA Swim age group meets throughout the year. Our youngest swimmers may participate for 
                fun and for the experience. The Stingray Swim Team runs year round, practicing at the indoor pool at the VAC and outdoor at the 25 yard 
                pool at the Vashon Golf and Swim Club in the summer. We hold team clinics and private practices throughout the year, participating in
                regional clinics with Olympic trainers and athletes. 
                </p>
            </div>

            <div className="bg-white md:p-8">
                <h1 className="text-center mb-8">
                    <span className=" block text-2xl md:text-4xl text-vacblue font-extrabold my-2 uppercase">
                        Information Form
                    </span>
                    <span className="block md:text-xl text-gray-700 leading-relaxed">
                        If you are interested in any of our swimming lessons or teams, please fill out the form below and we will contact you!
                    </span>
                </h1>


            {submitted === false &&      
                <div className="">
                    
                    <h2 className="text-center text-xl md:text-2xl text-vacblue font-extrabold mb-8 uppercase">Contact us</h2>
                    <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        numOfSwimmers:'',
                        swimmerAges: '',
                        isMember: '',
                        interests: []
                    }}
                    onSubmit={async (values) => {
                        await sendEmail(values);
                        console.log(submitted)
                    }}
                    
                    >
                        <Form className="flex flex-col items-center">
                        <div className="flex flex-col lg:flex-row w-full">
                            <div className="w-full flex-col flex items-center">
                            <label htmlFor="name" className="block uppercase tracking-wide text-gray-700 font-bold mb-2">Your Name</label>
                            <Field id="name" name="name" placeholder="Your name here"
                            className="appearance-none block w-9/12 bg-gray-200 text-gray-700 
                            rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-300"/>
                            </div>

                            <div className="w-full flex-col flex items-center">
                            <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 font-bold mb-2">Your Email</label>
                            <Field id="email" name="email" placeholder="you@example.com" 
                            className="appearance-none block w-9/12 bg-gray-200 text-gray-700 
                            rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-300"/>
                            </div>
                        </div>
                            <div className="flex flex-col md:flex-row w-full">
                                <div className="w-full flex-col flex items-center">
                                <label htmlFor="numSwimmers" className="block uppercase tracking-wide text-gray-700 font-bold mb-2">Number of Swimmers</label>
                                <Field id="numSwimmers" name="numSwimmers" placeholder="Number of Swimmers" 
                                className="appearance-none block w-9/12 bg-gray-200 text-gray-700 
                                rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-300"/>
                                </div>

                                <div className="w-full flex-col flex items-center">
                                <label htmlFor="swimmerAges" className="block uppercase tracking-wide text-gray-700 font-bold mb-2">Swimmer Age(s)</label>
                                <Field id="swimmerAges" name="swimmerAges" placeholder="Seperate with commas" 
                                className="appearance-none block w-9/12 bg-gray-200 text-gray-700 
                                rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-300"/>
                                </div>
                            </div>

                            <span id="my-radio-group" className="block uppercase tracking-wide text-gray-700 font-bold mb-2">Are you a VAC Member?</span>
                                <div role="group" aria-labelledby="my-radio-group" className="flex justify-center w-screen mb-2">
                                    <label className="text-gray-700 mr-4">
                                    <Field type="radio" name="isMember" value="yes" className="mr-2 leading-tight" />
                                    Yes
                                    </label>
                                    <label className="text-gray-700 mr-4">
                                    <Field type="radio" name="isMember" value="no" className="mr-2 leading-tight"/>
                                    No
                                    </label>
                                    <label className="text-gray-700 ">
                                    <Field type="radio" name="isMember" value="soon" className="mr-2 leading-tight"/>
                                    Joining Soon
                                    </label>
                            </div>

                            <span id="interests" className="block uppercase tracking-wide text-gray-700 font-bold mb-2">What are you interested in?</span>
                                <div role="group" aria-labelledby="interests" className="flex flex-wrap justify-around items-start md:px-4">
                                    <label className="w-5/12 md:w-max lg:mr-4">
                                    <Field type="checkbox" name="interests" value="Learning to swim" className="mr-2 md:mr-1"/>
                                    Learning to swim
                                    </label>
                                    <label className="w-5/12 md:w-max mb-2 md:mb-0 lg:mr-4">
                                    <Field type="checkbox" name="interests" value="Parent Tot Classes" className="mr-2 md:mr-1" />
                                    Parent Tot Classes
                                    </label>
                                    <label className="w-5/12 md:w-max lg:mr-4">
                                    <Field type="checkbox" name="interests" value="Lil Rays" className="mr-2 md:mr-1"/>
                                    Lil Rays
                                    </label>
                                    <label className="w-5/12 md:w-max mb-2 md:mb-0 lg:mr-4">
                                    <Field type="checkbox" name="interests" value="Stroke School" className="mr-2 md:mr-1"/>
                                    Stroke School
                                    </label>
                                    <label className="w-5/12 md:w-max lg:mr-4">
                                    <Field type="checkbox" name="interests" value="Competitive Team" className="mr-2 md:mr-1"/>
                                    Competitive Team
                                    </label>
                                    <label className="w-5/12 md:w-max mb-2 lg:mr-4">
                                    <Field type="checkbox" name="interests" value="Dryland Training" className="mr-2 md:mr-1"/>
                                    Dryland Training
                                    </label>
                                    <label className="md:w-max">
                                    <Field type="checkbox" name="interests" value="Rockfins Adult Team" className="mr-2 md:mr-1"/>
                                    Rockfins Adult Team
                                    </label>
                            </div>


                            <button type="submit" className="my-8 w-max p-4 md:text-lg bg-vacblue shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-vacpurple uppercase">
                                submit
                            </button>
                        </Form>
                    </Formik>
                </div>
            }
            {submitted === true &&
                <div className="p-16">
                    <h1 className="text-gray-700 font-extrabold text-4xl text-center">Thank You! Someone will respond promptly.</h1>
                </div>
            }
            </div>


        </Layout>
    )
}

export async function getStaticProps() {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const res = await  fetch(`${url}/swim-team`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }  
}


export default stingrays
