import React from 'react'
import Layout from '../components/layout'
import dynamic from "next/dynamic";

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
            <NoSSRLand />
            <NoSSRPool />
            </div>
        </Layout>

    )
}

export default schedules
