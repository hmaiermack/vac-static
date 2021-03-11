import React from 'react'
import Navbar from './nav/navbar'
import Nav2 from './nav/nav2'

const Layout = ({children}) => {
    return (
        <>
            {/* <Navbar /> */}
            <Nav2 />
            {children}
        </>
    )
}

export default Layout
