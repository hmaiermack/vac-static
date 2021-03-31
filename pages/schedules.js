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


const schedules = () => {
    return (
        <Layout >
            <div className="container mt-52 w-11/12 p-8 mx-auto">
            <NoSSRPool />
            <NoSSRLand />
            {/* <NoSSRTraining /> */}
            </div>
        </Layout>

    )
}

export default schedules
