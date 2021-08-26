import React from 'react'
import Button from '../components/Button'
import Layout from '../components/layout'

const covid = () => {
    return (
        <Layout>
            <div className="container mt-52 text-center mx-auto">
                <h1 className="text-vacblue text-4xl font-extrabold tracking-tighter uppercase leading-8 mb-2">Current Covid-19 Guidelines</h1>
                <h2 className="text-gray-700 text-xl font-bold tracking-tighter uppercase mb-2">Updated: 8/23/2021
                    <span className=" font-bold w-full block uppercase text-center leading-snug text-base mt-4">New Hours</span>
                    <span className=" font-bold w-full block uppercase text-center leading-snug text-base">M-F 4:45 AM - 9:00pm</span>
                    <span className=" font-bold w-full block uppercase text-center leading-snug text-base">Sat 8:00 AM - 6:00 PM</span>
                    <span className=" font-bold w-full block uppercase text-center leading-snug text-base">Sun 9:00 AM - 6:00 PM</span>
                </h2>
                <div className="mx-auto text-left max-w-max p-4">
                    <p className="mb-8 max-w-prose text-gray-700 leading-relaxed">
                    The VAC is currently allowed to operate at 100% capacity for indoor fitness services. We are included in Phase 1, 2, &amp; 3 of the “Healthy 
                    Washington – Roadmap to Recovery” plan. 

                    <span className="ml-8 mb-4 font-bold w-full block">Scheduling is not required before visiting.</span>
                    <span className="ml-8 mb-4 font-bold w-full block">ALL AGES WELCOME!</span>
                    </p>

                    <div className="mb-12">
                        <h3 className="text-vacblue text-lg font-bold tracking-tighter uppercase leading-8">
                        VAC Mask Policy
                        </h3>
                        <p className="max-w-prose text-gray-700 leading-relaxed ml-8">
                        Due to the recent announcement by WA Gov. Inslee, face masks will be required again in indoor spaces beginning Monday 8/23/21 regardless of vaccination status. 
                        Please review the following list that details which areas of the club will NOT require face masks. Face Masks ARE required for any indoor areas not in the following list:
                        </p>
                        <span className="ml-8 mb-4 font-bold w-full block">While in the Pool water</span>
                        <span className="ml-8 mb-4 font-bold w-full block">While in any room by yourself. If you have a room to yourself a mask is not required.</span>
                        <span className="ml-8 mb-4 font-bold w-full block">While in the Training Center room with both garage doors open. This is the new room with the two large garage doors. 
                        If both garage doors are open this is considered an outdoor space and face masks will NOT be required.</span>
                    </div>
                </div>
            </div>
        </Layout>
        )
}

export default covid
