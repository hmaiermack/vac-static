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
                    <p className="mb-2 max-w-prose text-gray-700 leading-relaxed">
                    King County Public Health has mandated that access to fitness facilities, restaurants, and many other indoor venues 
                    will be limited to people who are fully vaccinated against COVID-19 or who have had a negative test result in the previous 72 hours. 
                    </p>
                    <p className="mb-2 max-w-prose text-gray-700 leading-relaxed">
                    Access to the VAC facilities, for members and guests, will require one-time proof of vaccination or a negative test within 72 hours of entry.
                    </p>
                    <p className="mb-2 max-w-prose text-gray-700 leading-relaxed">
                    We will accept proof of vaccination in a variety of ways, including showing your physical vaccine card or a picture of your card at the front desk. 
                    You may also email a copy to info@vashonathleticclub.com
                    </p>
                    <p className="mb-2 max-w-prose text-gray-700 leading-relaxed">
                    Our goal is to only require you to show this vaccine proof one time. We will file this information on your membership account for 
                    future reference. You may occasionally be asked to show proof at a later time of entry, and we thank you in advance for your understanding.
                    </p>
                    <p className="mb-2 max-w-prose font-bold text-gray-700 leading-relaxed">
                    Individuals under 12 years of age, who are not eligible to be vaccinated, are not required to be tested or show vaccine proof for entry.
                    </p>
                    <p className="mb-8 max-w-prose font-bold text-gray-700 leading-relaxed">
                    <span className="underline w-full block"> Acceptable forms of proof</span>
                    <span className="ml-4 w-full block"> A physical copy of your Vaccination Record Card from the CDC.</span>
                    <span className="ml-4 w-full block"> A picture of your Vaccination Record Card on your phone.</span>
                    <span className="ml-4 w-full block"> A digital vaccine card issued by the State of Washington (available by going to https://myirmobile.com).</span>
                    <span className="ml-4 w-full block"> An approved app, such as CLEAR Health Pass, CommonPass, or VaxYes</span>
                    </p>
                    <span className="ml-8 mb-4 font-bold w-full block">Scheduling is not required before visiting.</span>
                    <span className="ml-8 mb-4 font-bold w-full block">ALL AGES WELCOME!</span>

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
