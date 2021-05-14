import React from 'react'
import Layout from '../../components/layout'
import Image from 'next/image'
import Button from '../../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faCircle, faClipboard, faNotesMedical, faRunning, faUmbrellaBeach, faAlignJustify } from '@fortawesome/free-solid-svg-icons'

const semiPrivateTraining = ({data}) => {
    return (
        <Layout >
            <div className="h-screen flex">
                <div className="absolute block h-full w-screen bg-gradient-to-b from-vacblue to-transparent" style={{zIndex: -1}}  />
                <div className="h-screen w-screen absolute"style={{zIndex: -2}}>
                <Image
                    alt="Background image"
                    src="/consultation.jpg"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                />
                </div>

                <div className="flex flex-col justify-center items-center relative pl-4 xl:px-32 z-10 w-screen">
                <h1 className="tracking-tight mt-52 nav2:mt-44 med:mt-0 mb-8 text-center">
                <span className="block text-white font-extrabold uppercase tracking-tighter text-5xl med:text-8xl leading-none mb-2 md:mb-0">{data.first_header}</span>
                <span className="block text-vacblue sm:text-vacgrey font-extrabold uppercase leading-6 text-3xl med:text-5xl">{data.sub_header}</span>
                </h1>
                <Button href="https://vacpersonalfitnesstraining.as.me/schedule.php" text="Schedule Now!" />
                </div>
            </div>
            <div className=" text-center w-screen bg-white p-16 z-10" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10vw), 0 100%)', marginBottom: '-10vw'}}>
                <h2 className=" text-center text-2xl md:text-4xl text-vacblue font-extrabold mb-8 uppercase">Do you want help with your workout routine and fitness goals?</h2>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed">
                Workout among up to 5 like minded individuals in a fun, safe and supportive environment. 
                Each class is 1 hour in length and covers fundamentals of strength training, mobility, balance, agility and 
                core work. All abilities are welcome with scalable workouts for any level of fitness. This Semi-Private Training structure not only 
                allows you more training time options, but also access to all of our trainers. You can schedule different trainers 
                and different session times whenever you want!
                </p>
                <Button href="https://vacpersonalfitnesstraining.as.me/schedule.php" text="Schedule Now!" />
                <div className="py-8 lg:py-20"></div>
            </div>

            <div className="text-center bg-gray-200 w-screen p-16 pt-32" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10vw), 0 100%)', marginBottom: '-10vw', zIndex: '9'}}>
                <h2 className="mr-auto ml-auto text-center text-2xl md:text-4xl text-vacblue font-extrabold mb-8 uppercase max-w-prose lg:mt-40">Our VAC Personal Trainers can maximize your workouts and make it easier to reach your goals!</h2>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed">
                    Semi-Private Training package options allow you to choose 1 session, 2 sessions, or 3 sessions per week. Ranging from 
                    $27 to $33 per session, Semi-Private Training is the most cost effective approach to personal training. Taking place in our 
                    Functional Training Center, groups of up to 5 like-minded individuals are lead in an hour long program covering all areas of physical
                    fitness by one of our Personal Trainers. With many different day and time options available we make it easy for you to hop in whenever you want!
                </p>
                <Button href="/schedules" text="Training Center Schedule" />
                <div className="py-8 lg:py-20"></div>
            </div>

            <div className="w-screen bg-white p-16 pt-32 text-center lg:mt-40" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 10vw))', zIndex: '8'}}>
                <h2 className="mr-auto ml-auto  text-center text-2xl md:text-4xl text-vacblue font-extrabold mb-8 uppercase max-w-prose">Still not sure?</h2>
                <p className="text-left ml-auto mr-auto max-w-prose text-xl text-gray-700 leading-relaxed mb-16">
                    If you'd like more in depth information about any of our personal training products or to learn more about the VAC trainers, 
                    schedule a free Fitness Consultation with our Personal Training Director, Travis Tuchak. In addition, if the times available in 
                    the Fitness Consultation, Semi-Private Training or Personal Training calendar are incompatible with your schedule, 
                    please email travis@vashonathleticclub.com to schedule an alternate time.                
                </p>

                <Button href="https://vacpersonalfitnesstraining.as.me/vacfreefitnessconsultation" text="Schedule a free fitness consultation today!"/>
                <div className="py-8 lg:py-20"></div>
                
            </div>


            <div className="p-8 w-screen bg-gray-200 text-center" style={{clipPath: 'polygon(0 0, 100% calc(100% -10vw), 100% 100%, 0 100%)', zIndex: '7', marginTop: '-10vw'}}>
            <h2 className="mr-auto ml-auto  text-center text-2xl md:text-4xl text-vacblue font-extrabold mb-8 uppercase max-w-prose mt-24 lg:mt-44 ">Why train with a VAC Personal Trainer? </h2>
                <ul className="md:flex md:flex-row md:justify-center md:flex-wrap md:items-start text-center p-4 text-xl text-gray-700">
                    <li className="flex flex-col justify-center items-center mb-8 md:w-2/6 md:px-8 md:mb-16 ">
                        <span className="inline-block w-20 h-20 mb-8 relative text-center">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faBullseye} className="text-white fa-2x absolute m-auto left-0 top-0 right-0 bottom-0"/>
                        </span>
                        <span className="text-center">
                            Feeling stuck? 
                            Get the guidance motivation, encouragement and personal attention you need to reach your goals.
                        </span>
                        </li>
                    <li className="flex flex-col justify-center items-center mb-8 md:w-2/6 md:px-8 md:mb-16">
                        <span className="inline-block w-20 h-20 mb-8 relative text-center">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faNotesMedical} className="text-white fa-2x absolute m-auto left-0 top-0 right-0 bottom-0"/>
                        </span>
                        <span className="text-center">
                            Medical issues or injuries? Our knowledgeable trainers have experience working with a wide variety of challenges.
                        </span>
                    </li>
                    <li className="flex flex-col justify-center items-center mb-8 md:w-2/6 md:px-8 md:mb-16">
                        <span className="inline-block w-20 h-20 mb-8 relative text-center">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faClipboard} className="text-white fa-2x absolute m-auto left-0 top-0 right-0 bottom-0"/>
                        </span>
                        <span className="text-center">
                            Do you have a specific goal but aren’t sure how to reach it? 
                            We can build a specialized program for your needs.
                        </span>
                    </li>
                    <li className="flex flex-col justify-center items-center mb-8 md:w-2/6 md:px-8">
                        <span className="inline-block w-20 h-20 mb-8 relative text-center">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faRunning} className="text-white fa-2x absolute m-auto left-0 top-0 right-0 bottom-0"/>
                        </span>
                        <span className="text-center">
                            Want fun and challenging exercises? Do you have a sports specific 
                            goal, training style or piece of equipment you want to learn how to use? Our fitness department has a 
                            variety of equipment and skill set to coach you.
                    </span>
                    </li>
                    <li className="flex flex-col justify-center items-center mb-8 md:w-2/6 md:px-8">
                        <span className="inline-block w-20 h-20 mb-8 relative text-center">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faUmbrellaBeach} className="text-white fa-2x absolute m-auto left-0 top-0 right-0 bottom-0"/>
                        </span>
                        <span className="text-center">
                            Special occasion coming up? Look and feel your best for summer vacation, 
                            a wedding or reunion...we can get you the results fast!
                        </span>
                    </li>
                    <li className="flex flex-col justify-center items-center md:w-2/6 md:px-8">
                        <span className="inline-block w-20 h-20 mb-8 relative text-center">
                            <FontAwesomeIcon icon={faCircle} className="text-transparent bg-gradient-to-tl from-vacblue to-vacpurple fa-4x circle-fade rounded-full"/>
                            <FontAwesomeIcon icon={faAlignJustify} className="text-white fa-2x absolute m-auto left-0 top-0 right-0 bottom-0"/>
                        </span>
                        <span className="text-center">
                            Need a workout overhaul or a quick jump start? Our fitness staff can 
                            take a look at your old routine and revitalize your workout for a fresh start.
                        </span>
                    </li>
                </ul>

                <Button href="https://vacpersonalfitnesstraining.as.me/schedule.php" text="Schedule Now!" />


            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const res = await  fetch(`${url}/semi-private-training`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }  
}


export default semiPrivateTraining
