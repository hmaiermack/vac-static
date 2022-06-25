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
