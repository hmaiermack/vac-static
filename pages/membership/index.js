import React from 'react'
import Layout from '../../components/layout'
import MemberCard from '../../components/MemberCard'
import { useEffect, useState } from 'react'
import ImageGallery from '../../components/ImageGallery'

const index = () => {
     const [membershipInfo, setMembershipInfo] = useState([])
     console.log(membershipInfo)

    useEffect(() => {

        const fetchData = async () => {
            const res = await  fetch('http://localhost:1337/membership-info-and-pricings');
            const data = await res.json();
            setMembershipInfo(data)
        }

      fetchData();



    }, [])

    const filter = membershipInfo.filter(item => item.membership_options.membership_type !== "Senior 65+")



    const displayCards = filter.map((item, idx) => 
        <MemberCard type={item.membership_options.membership_type} 
            price={item.membership_options.pricing_options} 
            info={item.membership_options.membership_type_information} 
            key={idx}/>
    )

    console.log('displayCards' + displayCards)

    return (
        <Layout>
            <div className="bg-gray-200">
                {/* Image Gallery */}
            <div className="container mx-auto" style={{height: "50vh"}}>
            <ImageGallery />
            </div>

            {/* Info Divs */}
            <div className="container flex flex-col justify-center items-center mx-auto mt-8">
                <h1 className="text-vacblue text-4xl font-extrabold tracking-tighter text-center uppercase leading-8">Equipment & Amenities</h1>
                <ul className="mt-1 border border-vacgrey flex flex-col mx-1 font-medium md:flex-row md:flex-wrap">
                    <li className="p-6 text-lg bg-gray-300 text-gray-700 leading-6 font-sans amenities-list">
                        Saltwater Pool and Spa heated year-round to 84-87 degrees and 104 degrees respectively.
                    </li>
                    <li className="p-6 text-lg bg-gray-100 text-gray-700 leading-6 font-sans amenities-list">
                        Cedar-wood dry sauna heated to 180 degrees with customizable lighting for reading.
                    </li>
                    <li className="p-6 text-lg bg-gray-300 text-gray-700 leading-6 font-sans amenities-list md:bg-gray-100">
                        Group exercise classes offered year round every day of the week in our aerobics studio and the pool.
                    </li>
                    <li className="p-6 text-lg bg-gray-100 text-gray-700 leading-6 font-sans amenities-list md:bg-gray-300">
                        Functional training center offering a CrossFit style workout space. 
                        Power racks, turf, ropes, and more are offered alongside group training sessions.
                    </li>
                    <li className="p-6 text-lg bg-gray-300 text-gray-700 leading-6 font-sans amenities-list">
                        Machine circuit room with everything you need for a full body workout.
                    </li>
                    <li className="p-6 text-lg bg-gray-100 text-gray-700 leading-6 font-sans amenities-list">
                        Free weight room for traditional style weightlifting: squat racks, dumbells, barbells and more.
                    </li>
                    <li className="p-6 text-lg bg-gray-300 text-gray-700 leading-6 font-sans amenities-list md:bg-gray-100">
                        Cardio floor dedicated to cardiovascular excercise with equipment ranging from treadmills to elipticals and more.
                    </li>
                    <li className="p-6 text-lg bg-gray-100 text-gray-700 leading-6 font-sans amenities-list md:bg-gray-300">
                        Aerobics studio for the majority of our group exercise classes including yoga, pilates, and general fitness classes. When a class isn't 
                        in session you can use the space for general use like calisthenics, foam rolling, or stretching.
                    </li>
                </ul>
            </div>
            
            {/* Membership cards and pricing */}
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-vacblue mt-4 text-center">
                    <span className="uppercase text-4xl font-extrabold text-center leading-8">Membership Pricing</span>
                    <br></br>
                    <span className="uppercase text-sm font-bold leading-8">Save 10% when you sign up for a year!</span>
                    </h1>
                <div className="container flex flex-wrap justify-center ">
                {displayCards}
                {/* Senior Card */}
                <div className="w-full min-w-min p-4 lg:w-1/3 plan-card f">
                    <label className="flex flex-col shadow-lg group relative hover:shadow-2xl bg-white">
                        <div className="w-full px-4 py-6 card-section-1">
                        <h3 className="mx-auto text-base font-semibold text-center underline text-vacblue group-hover:text-vacpurple">
                            Senior 65+
                        </h3>
                        <div className="flex flex-col sm:flex-row justify-center sm:gap-8 sm:items-end mt-4">
                            <p className="text-5xl font-bold text-center group-hover:text-vacpurple text-vacblue uppercase">
                                $54<span className="text-3xl"></span>
                            </p>
                            <p className=" text-lg text-center uppercase group-hover:text-vacpurple text-vacblue whitespace-nowrap">
                            Single Full Club monthly
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center sm:gap-8 sm:items-end mt-4">
                            <p className="text-5xl font-bold text-center group-hover:text-vacpurple text-vacblue uppercase">
                                $42<span className="text-3xl"></span>
                            </p>
                            <p className=" text-lg text-center uppercase group-hover:text-vacpurple text-vacblue whitespace-nowrap">
                            Single Pool Only monthly
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center sm:gap-8 sm:items-end mt-4">
                            <p className="text-5xl font-bold text-center group-hover:text-vacpurple text-vacblue uppercase">
                                $76<span className="text-3xl"></span>
                            </p>
                            <p className="text-lg text-center uppercase group-hover:text-vacpurple text-vacblue whitespace-nowrap">
                            Couple Full Club monthly
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center sm:gap-8 sm:items-end mt-4">
                            <p className="text-5xl font-bold text-center group-hover:text-vacpurple text-vacblue uppercase">
                                $59<span className="text-3xl"></span>
                            </p>
                            <p className="text-lg text-center uppercase group-hover:text-vacpurple text-vacblue whitespace-nowrap">
                            Couple Pool Only monthly
                            </p>
                        </div>

                        </div>
                        <div
                        className="flex flex-col items-center justify-center w-full h-full py-6 bg-vacblue"
                        >
                        <p className="text-xl text-white text-center">
                            Access to everything the corresponding membership would get.
                        </p>
                        </div>
                    </label>
                </div>

                </div>
            </div>
            </div>
        </Layout>
    )
}

export default index
