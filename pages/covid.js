import React from 'react'
import Button from '../components/Button'
import Layout from '../components/layout'

const covid = () => {
    return (
        <Layout>
            <div className="container mt-52 text-center mx-auto">
                <h1 className="text-vacblue text-4xl font-extrabold tracking-tighter uppercase leading-8 mb-2">Current Covid-19 Guidelines</h1>
                <h2 className="text-gray-700 text-xl font-bold tracking-tighter uppercase mb-2">Updated: 3/25/2021
                    <span className=" font-bold w-full block uppercase text-center leading-snug text-base mt-4">New Hours</span>
                    <span className=" font-bold w-full block uppercase text-center leading-snug text-base">M-F 5:00 AM - 9:00pm</span>
                    <span className=" font-bold w-full block uppercase text-center leading-snug text-base">Sat 8:00 AM - 6:00 PM</span>
                    <span className=" font-bold w-full block uppercase text-center leading-snug text-base">Sun 9:00 AM - 6:00 PM</span>
                </h2>
                <div className="mx-auto text-left max-w-max p-4">
                    <p className="mb-8 max-w-prose text-gray-700 leading-relaxed">
                    The VAC is currently open for indoor fitness services. We are included in Phase 1, 2, &amp; 3 of the “Healthy 
                    Washington – Roadmap to Recovery” plan. 

                    <span className="ml-8 my-4 font-bold w-full block">Masks are required at all times while using the facility.</span>
                    <span className="ml-8 mb-4 font-bold w-full block">Our current maximum capacity is restricted to 50% of our fire code occupancy rating.</span>
                    <span className="ml-8 mb-4 font-bold w-full block">ALL AGES WELCOME!</span>
                    </p>
                    <h2 className="text-vacblue text-xl font-extrabold text-center tracking-tighter uppercase leading-8 mb-8">
                        Reserving a place prior to use is not required for the following:
                    </h2>

                    <div className="mb-12">
                        <h3 className="text-vacblue text-lg font-bold tracking-tighter uppercase leading-8">
                            Regular Gym: Machines, Free Weights, Cardio Machines etc.
                        </h3>
                        <p className="max-w-prose text-gray-700 leading-relaxed ml-8">
                        Each exercise room in the facility is clearly marked with a maximum member capacity amount per room. Face coverings 
                        are required at all times while multiple people are in the same room. Members are required to sanitize the equipment before 
                        and after each use. VAC staff are cleaning the equipment throughout the day and after closing.
                        </p>
                    </div>
                    <div className="mb-12">
                        <h3 className="text-vacblue text-lg font-bold tracking-tighter uppercase leading-8">
                        Lap Swim
                        </h3>
                        <p className="max-w-prose text-gray-700 leading-relaxed ml-8">
                        Up to 2 people per lap lane on a first come, first served basis. 6 total people are allowed to use the pool during 
                        Lap Swim times.
                        </p>
                    </div>
                    <div className="mb-12">
                        <h3 className="text-vacblue text-lg font-bold tracking-tighter uppercase leading-8">
                        Family Swim
                        </h3>
                        <p className="max-w-prose text-gray-700 leading-relaxed ml-8">
                        Up to 20 total people in the pool at a time during Family Swim times. First come, first served basis.
                        </p>
                    </div>
                    <div className="mb-12">
                        <h3 className="text-vacblue text-lg font-bold tracking-tighter uppercase leading-8">
                        Hot Tub
                        </h3>
                        <p className="max-w-prose text-gray-700 leading-relaxed ml-8">
                        Up to 3 people at a time. First come, first served basis.
                        </p>
                    </div>
                    <div className="mb-12">
                        <h3 className="text-vacblue text-lg font-bold tracking-tighter uppercase leading-8">
                        Group Exercise Classes in the Pool
                        </h3>
                        <p className="max-w-prose text-gray-700 leading-relaxed ml-8">
                        Each instructor has a different amount of participants that they are allowing in their individual classes. 
                        First come, first served basis. 
                        </p>
                    </div>
                    <div className="mb-12">
                        <h3 className="text-vacblue text-lg font-bold tracking-tighter uppercase leading-8">
                        Group Exercise Classes in the Aerobics Studio
                        </h3>
                        <p className="max-w-prose text-gray-700 leading-relaxed ml-8">
                        Up to 10 participants + instructor. First come, first served basis.
                        </p>
                    </div>
                    <div className="mb-12">
                        <h3 className="text-vacblue text-xl font-extrabold tracking-tighter uppercase leading-8">
                        Scheduling is still required for Robin's Pool Classes on Monday, Wednesday, and Friday at 8:00 am. You can schedule through this link:
                        <a href="www.ourclublogin.com/500230" target="_blank" >www.ourclublogin.com/500230</a>
                        </h3>
                    </div>
                    <div className="mx-auto text-left max-w-max p-4">
                        <p className="mb-8 max-w-prose text-gray-700 leading-relaxed">
                        If you are not currently a member and would like to become one please stop by the club, email info@vashonathleticclub.com
                         or call the front desk at (206) 463-5601.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
        )
}

export default covid
