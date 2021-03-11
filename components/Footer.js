import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="flex flex-shrink-0 justify-between items-center p-4 px-8 flex-col bg-vacblue text-gray-200 lg:flex-row gap-4 md:gap-16 text-center" >
            <ul className="flex flex-col justify-center items-center px-2">
                <li className="text-2xl font-extrabold text-white">
                    Vashon Athletic Club
                </li>
                <li className="text-center font-sans">Vashon's premier gym for personal training, swimming, and fitness.</li>
            </ul>
            <ul className="flex flex-col justify-center items-center whitespace-nowrap">
                <li className="underline font-bold">Hours</li>
                <li><span className="font-bold font-sans whitespace-nowrap">Monday - Friday:</span> 5:30 AM - 9:00 PM</li>
                <li><span className="font-bold font-sans whitespace-nowrap">Saturday - Sunday:</span> 9:00 AM - 6:00 PM</li>
            </ul>
            <ul className="flex flex-col justify-center items-center whitespace-nowrap">
                <li>19120 Vashon Hwy SW</li>
                <li>Vashon, WA 98070</li>
            </ul>
            <ul className="flex w-full lg:w-max justify-center gap-8 text-2xl">
                <li><FontAwesomeIcon icon={faFacebook}/></li>
                <li><FontAwesomeIcon icon={faYoutube}/></li>
                <li><FontAwesomeIcon icon={faInstagram}/></li>
                <li><FontAwesomeIcon icon={faPhone}/></li>
                <li><FontAwesomeIcon icon={faEnvelope}/></li>
            </ul>
        </div>
    )
}

export default Footer
