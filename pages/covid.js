import React from 'react'
import Button from '../components/Button'
import Layout from '../components/layout'

const covid = () => {
    return (
        <Layout>
            <div className="container mt-52 text-center mx-auto">
                <h1 className="text-vacblue text-4xl font-extrabold tracking-tighter uppercase leading-8 mb-2">Current Covid-19 Guidelines</h1>
                <h2 className="text-gray-700 text-xl font-bold tracking-tighter uppercase mb-2">Updated: 7/6/2021
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
                    <h2 className="text-vacblue text-xl font-extrabold text-center tracking-tighter uppercase leading-8 mb-8">
                        Reserving a place prior to use is not required for the following:
                    </h2>

                    <div className="mb-12">
                        <h3 className="text-vacblue text-lg font-bold tracking-tighter uppercase leading-8">
                        VAC Mask Policy
                        </h3>
                        <p className="max-w-prose text-gray-700 leading-relaxed ml-8">
                        Fully vaccinated VAC members / users will not be required to wear face masks while using the facilities. WA Gov. 
                        Inslee still requires that unvaccinated people wear face masks while indoors. If you are not vaccinated, please continue 
                        to wear a face mask while using the VAC. Fully vaccinated members / users can choose to wear a mask or not and do whatever 
                        they are most comfortable with.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
        )
}

export default covid
