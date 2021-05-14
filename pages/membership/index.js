import React from 'react'
import Layout from '../../components/layout'
import MemberCard from '../../components/MemberCard'
import ImageGallery from '../../components/ImageGallery'

const index = ({data}) => {
    const displayCards = data.map((item, idx) => 
        <MemberCard type={item.membership_options.membership_type} 
            price={item.membership_options.pricing_options} 
            info={item.membership_options.membership_type_information} 
            key={idx}/>
    )


    return (
        <Layout>
            <div className="bg-gray-200">
                {/* Image Gallery */}
            <div className="container mx-auto" style={{height: "50vh"}}>
            <ImageGallery />
            </div>

            {/* Info Divs */}
            <div className="container flex flex-col justify-center items-center mx-auto mt-8">
                <h1 className="text-vacblue text-4xl font-extrabold tracking-tighter text-center uppercase leading-8 mb-2">Equipment & Amenities</h1>
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
            <div className="flex flex-col justify-center items-center mt-8">
                <h1 className="text-vacblue mt-4 text-center">
                    <span className="uppercase text-4xl font-extrabold text-center leading-8">Membership Pricing</span>
                    <br></br>
                    <span className="uppercase text-sm font-bold leading-8">Save 10% when you sign up in advance for an annual membership!</span>
                    </h1>
                <div className="container flex flex-wrap justify-center ">
                    {displayCards}
                </div>
            </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const res = await  fetch(`${url}/membership-info-and-pricings`);
    const data = await res.json();


    return {
        props: {
            data
        }
    }  
}

export default index
