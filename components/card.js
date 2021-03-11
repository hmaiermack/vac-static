import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'


const Card = (props) => {
    return (
    <div class="my-4 lg:mx-4 ">
        <div class="px-6 py-4 bg-gray-300  font-bold uppercase text-center text-vacblue rounded rounded-b-none border-t border-l border-r border-gray-600">
        <FontAwesomeIcon icon={props.icon} />
        <hr className="w-20 ml-auto mr-auto" />
        <h3 className="text-xl uppercase font-extrabold tracking-tight">{props.header}</h3>
        </div>

        <div class="px-6 pb-6 bg-gray-300 text-base rounded rounded-t-none  border-b border-r border-l border-gray-600">
            {props.body}
            <hr className="mt-1" />
            <div className="mt-4 text-center">
                <a class="bg-vacblue shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-vacpurple rounded uppercase mt-6 whitespace-nowrap" 
                    href="#">{props.button}</a>
            </div>
        </div>
    </div>
    )
}

export default Card
