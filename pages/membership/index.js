import React from 'react'
import Layout from '../../components/layout'
import MemberCard from '../../components/MemberCard'
import ImageGallery from '../../components/ImageGallery'
import Iframe from 'react-iframe'

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
            {/* <div className="container mx-auto" style={{height: "50vh"}}>
            <ImageGallery />
            </div> */}
                   <div className='mt-40 container mx-auto h-screen flex flex-col'>
                   <h1 className="text-vacblue text-4xl font-extrabold tracking-tighter text-center uppercase leading-8 mb-4 mt-16 med:mt-2">Guided Virtual Tour</h1>
        <div className='w-full h-full'>
        
        <Iframe 
          url="https://captur3d.io/view/vashon-athletic-club/evt"
          width="100%"
          height='100%'
          frameBorder={0}
          allowFullScreen={true}
          allow='xr-spatial-tracking; clipboard-write'
          title='Guided virtual tour'
        />
        </div>
       </div>

            {/* Info Divs */}
            <div className="container flex flex-col justify-center items-center mx-auto">
                <h1 className="text-vacblue text-4xl font-extrabold tracking-tighter text-center uppercase leading-8 mb-2">Equipment & Amenities</h1>
                <ul className="mt-1 border border-vacgrey flex flex-col mx-1 font-medium md:flex-row md:flex-wrap">
                    <li className="p-6 text-lg bg-gray-300 text-gray-700 leading-6 font-sans amenities-list">
                    Saltwater Pool heated to 85 degrees and Saltwater Hot Tub heated to 104 degrees year round.
                    </li>
                    <li className="p-6 text-lg bg-gray-100 text-gray-700 leading-6 font-sans amenities-list">
                    Dry cedar wood sauna heated to 180 degrees with customizable lighting for reading.
                    </li>
                    <li className="p-6 text-lg bg-gray-300 text-gray-700 leading-6 font-sans amenities-list md:bg-gray-100">
                    Group Exercise Classes offered throughout the week in our Aerobics Studio and the Pool.
                    </li>
                    <li className="p-6 text-lg bg-gray-100 text-gray-700 leading-6 font-sans amenities-list md:bg-gray-300">
                    Functional Training Center offering a CrossFit style workout space. Rogue Rig, Battle Ropes, Sled Pushing & Pulling, Artificial Turf, Slam Balls, etc. 
                    Semi-Private Personal Training also takes place here.
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
                    Aerobics Studio for our Group Exercise Classes like Senior Fitness, Yoga, Zumba, Pilates, HIIT, Barre, etc. When a class isn't in session members can use 
                    this room for dancing, stretching, boxing, and general calisthenics.
                    </li>
                </ul>
            </div>
            
            {/* Membership cards and pricing */}
            <div className="flex flex-col justify-center items-center mt-8">
                <h1 className="text-vacblue mt-4 text-center">
                    <span className="uppercase text-4xl font-extrabold text-center leading-8">Membership Pricing</span>
                    <br></br>
                    <span className="uppercase text-sm font-bold leading-8">Save 7% when you pay in advance for an annual membership!</span>
                    <br></br>
                    <span className="uppercase text-sm font-bold leading-8">Initiation fees range from $50 to $125 for each new account.</span>
                    <br></br>
                    <span className="uppercase text-sm font-bold leading-8">Family membership is priced for 3 people, add an additional $30 per month for each member beyond 3.</span>
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
