import React from 'react'
import Navbar from './nav/navbar'
import Nav2 from './nav/nav2'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <div className="h-full flex flex-col">
            <Nav2 />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
