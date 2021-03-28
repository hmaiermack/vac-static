import React from 'react'
import LandCalendar from '../components/LandCalendar'
import PoolCalendar from '../components/PoolCalendar'
import Layout from '../components/layout'


const schedules = () => {
    return (
        <Layout >
            <div className="container mt-52 w-11/12 p-8 mx-auto">
            <LandCalendar />
            <PoolCalendar />
            </div>
        </Layout>

    )
}

export default schedules
