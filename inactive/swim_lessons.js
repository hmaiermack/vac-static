import React, { useState } from 'react'
import Image from 'next/image'
import Layout from '../../components/layout'
import { Formik, Field, Form } from 'formik';
import emailjs from 'emailjs-com'
import {init} from 'emailjs-com'
import Button from '../../components/Button'

const childrensLessons = ({data}) => {
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
                    src="/lessons.jpg"
                    layout="fill"
                    objectFit="cover"
                    priority={true} 
                />
                </div>

                <div className="flex flex-col justify-center items-center relative pl-4 xl:px-32 z-10 w-screen">
                    <h1 className="tracking-tight mt-52 nav2:mt-44 med:mt-0 mb-8 text-center">
                        <span className="block text-white font-extrabold uppercase tracking-tighter text-6xl sm:text-7xl med:text-8xl leading-none mb-2 md:mb-0">Swim Lessons</span>
                        <span className="block text-white font-extrabold uppercase leading-6 text-3xl med:text-5xl"></span>
                    </h1>
                </div>
            </div>

            <div className=" text-center w-screen bg-white p-16 z-10" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10vw), 0 100%)', marginBottom: '-10vw'}}>
                <h2 className=" text-center text-2xl md:text-4xl text-vacblue font-extrabold uppercase">All ages welcome!</h2>
                <Button href="#inquiryform" text="Inquiry Form" center/>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed mb-8 mt-8">
                    We're proud to offer swimming instruction to swimmers of all ages and experiences. Whether your tot is getting in the water for the first time,
                    or your child wants to become a competitive swimmer, we have a program for you.
                </p>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed mb-16 lg:mb-40">
                    We begin with parent tot classes where we set you and your child up with the tools to successfully navigate the water successfully. As your swimmer 
                    ages and gets comfortable, we offer classes focusing on the very basic foundations of constructing a stroke. Our programs 
                    lead all the way to our competitive Swim Team, allowing your child to grow and improve their swimming however much you and they want!
                </p>

            </div>

            <div className="text-center bg-gray-200 w-screen p-16 pt-32" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10vw), 0 100%)', marginBottom: '-10vw', zIndex: '9'}}>
                <Image alt="Lilrays logo"
                src="/lilrays.png"
                height={350}
                width={350} 
                layout="intrinsic"/>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed mb-8">
                Li’l Rays is for the very beginner level swimmers from 3 to 6 years. This level focuses on both water orientation and the 
                future opportunities of your young swimmer. Our success in swimming instruction comes from our long-term vision of each student. 
                We communicate the understanding of body position, rhythm, hydrodynamics and more through unique and playful ways so your kids have 
                a lasting fun memory of their early swimming experience.  We are proud to be the inventors of learning strategies like “Bubble Pie”, 
                “Crocodile Walk”, “Crocodile Rockets”, “fire pole” and “Train Track Glides” to name a few.
                </p>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed mb-16 lg:mb-40">
                The difference between our instruction and others is in our logical explanations and gentle augmenting of techniques with your 
                little swimmers. We explain the entire process as we teach. When teaching a child to do “ice-cream scoops” or “watermelon tummy”; 
                they are left with an incorrect word picture that will stick with them for a long time and their stroke will draw from that word 
                picture.  Our expertise is in correcting these deficiencies and delivering to them lasting understanding of the corrections. Our 
                Lil’ swimmers gain skills quickly, have fun, and build confidence in a safe playful class.
                </p>
            </div>

            <div className="w-screen bg-white p-16 pt-32 text-center lg:mt-40" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 10vw))', zIndex: '8'}}>
                <Image alt="Stingrays Stroke School"
                    src="/strokeschool.jpg"
                    height={258}
                    width={400} 
                    layout="intrinsic"/>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed mb-8">
                Stroke School is the middle of the Stingrays program. You can start here if you are level 4 or above. Most Lil’ Ray 
                Swimmers join Stroke School to advance their knowledge and strength in swimming. At this level our coaches will educate and 
                work to refine your young swimmers’ strokes. Stroke School is a part of the Competition Team, but the focus of competition is 
                different than the Senior levels. This mid-level of training corrects and teaches all four competitive strokes; starts, finishes 
                and turns. Additionally, we teach all the drills and workout techniques. This level prepares the swimmers to effectively 
                participate in daily workouts and compete at higher levels.
                </p>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed mb-8 lg:mb-40">
                    Stroke School is a very important step on the way to a lifetime of swimming for fitness, competition or recreation. 
                    Understanding the construction of a stroke is one piece of success.  Our passion is to pass on the love of swimming. Safety, 
                    professional training, and fun is the recipe for the success in our programs. Pricing discounts for VAC Members.
                </p>

            </div>

            <div className="bg-gray-200 md:p-8" id="inquiryform">
                <h1 className="text-center mb-8">
                    <span className=" block text-2xl md:text-4xl text-vacblue font-extrabold my-2 uppercase">
                        Inquiry Form
                    </span>
                    <span className="block md:text-xl text-gray-700 leading-relaxed">
                        If you are interested in any of our swimming lessons or teams, please fill out the form below and we will contact you!
                    </span>
                </h1>


                {submitted === false &&      
                <div className="" >
                    
                    <h2 className="text-center text-xl md:text-2xl text-vacblue font-extrabold mb-8 uppercase">Contact us</h2>
                    <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        numOfSwimmers:'',
                        swimmerAges: '',
                        phone: '',
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
                            className="appearance-none block w-9/12 bg-white text-gray-700 
                            rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-300"/>
                            </div>

                            <div className="w-full flex-col flex items-center">
                            <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 font-bold mb-2">Your Email</label>
                            <Field id="email" name="email" placeholder="you@example.com" 
                            className="appearance-none block w-9/12 bg-white text-gray-700 
                            rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-300"/>
                            </div>

                            <div className="w-full flex-col flex items-center">
                                <label htmlFor="phone" className="block uppercase tracking-wide text-gray-700 font-bold mb-2">Phone Number</label>
                                <Field id="phone" name="phone" placeholder="123-456-1234" 
                                className="appearance-none block w-9/12 bg-white text-gray-700 
                                rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-300"/>
                                </div>

                        </div>
                            <div className="flex flex-col md:flex-row w-full">
                                <div className="w-full flex-col flex items-center">
                                <label htmlFor="numSwimmers" className="block uppercase tracking-wide text-gray-700 font-bold mb-2">Number of Swimmers</label>
                                <Field id="numSwimmers" name="numSwimmers" placeholder="Number of Swimmers" 
                                className="appearance-none block w-9/12 bg-white text-gray-700 
                                rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-300"/>
                                </div>

                                <div className="w-full flex-col flex items-center">
                                <label htmlFor="swimmerAges" className="block uppercase tracking-wide text-gray-700 font-bold mb-2">Swimmer Age(s)</label>
                                <Field id="swimmerAges" name="swimmerAges" placeholder="Seperate with commas" 
                                className="appearance-none block w-9/12 bg-white text-gray-700 
                                rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-300"/>
                                </div>
                            </div>


                            <span id="interests" className="block uppercase tracking-wide text-gray-700 font-bold mb-2">What are you interested in?</span>
                                <div role="group" aria-labelledby="interests" className="flex flex-wrap justify-around items-start md:px-4">
                                    <label className="w-5/12 md:w-max lg:mr-4">
                                    <Field type="checkbox" name="interests" value="Learn to Swim/Lil Rays" className="mr-2 md:mr-1"/>
                                    Learn to Swim/Lil Rays
                                    </label>
                                    <label className="w-5/12 md:w-max mb-2 md:mb-0 lg:mr-4">
                                    <Field type="checkbox" name="interests" value="Parent Tot Classes" className="mr-2 md:mr-1" />
                                    Parent Tot Classes
                                    </label>
                                    <label className="w-5/12 md:w-max mb-2 md:mb-0 lg:mr-4">
                                    <Field type="checkbox" name="interests" value="Stroke School" className="mr-2 md:mr-1"/>
                                    Stroke School
                                    </label>
                                    <label className="w-5/12 md:w-max lg:mr-4">
                                    <Field type="checkbox" name="interests" value="Competitive Team" className="mr-2 md:mr-1"/>
                                    Competitive Team
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
    const res = await  fetch(`${url}/swim-lessons`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }  
}


export default childrensLessons
