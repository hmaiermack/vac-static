import React from 'react'
import Layout from '../components/layout'
import dynamic from "next/dynamic";

//workaround for fullcalendar and nextjs, will not build into prod without disabling server side rendering on the calendar components

const NoSSRLand = dynamic(() => import("../components/LandCalendar"), {
    ssr: false,
  });

const NoSSRPool = dynamic(() => import("../components/PoolCalendar"), {
    ssr: false,
  });


const schedules = ({land, pool}) => {
    return (
        <Layout >
            <div className="container mt-52 w-11/12 p-8 mx-auto">
              <NoSSRPool link={pool.link}/>
              <NoSSRLand link={land.link}/>
              {/* <NoSSRTraining /> */}

              <div className="w-11/12 mx-auto text-gray-700 mt-8">
                <h1 className="text-2xl text-center text-vacblue font-extrabold uppercase">Functional Training Center Schedule</h1>
                <h2 className="text-xl font-bold max-w-prose mx-auto text-center mt-4">ATTENTION: This room is open to all members except while Semi-Private Personal Training is taking place
                during the following times:</h2>
                <ul className="mt-4 leading-6 text-center text-lg">
                  <li>Wednesday: 9:00 AM - 10:00 AM</li>
                  <li>Thursday: 3:00 PM - 4:00 PM</li>
                  <li>Friday: 9:00 AM - 10:00 AM</li>
                  <li>Saturday: 2:00 PM - 3:00 PM</li>
                </ul>
              </div>

            </div>
        </Layout>

    )
}

export async function getStaticProps() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const landRes = await  fetch(`${url}/land-schedule`);
  const land = await landRes.json();

  const poolRes = await fetch(`${url}/pool-schedule`);
  const pool = await poolRes.json();

  return {
      props: {
          land,
          pool
      },
      revalidate: 1
  }
}


export default schedules
