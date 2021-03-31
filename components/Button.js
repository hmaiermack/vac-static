import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Button = (props) => {

    let classes = ""

    if(props.size === "small"){
        classes = "mt-0 w-max p-4 bg-vacblue shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-vacpurple uppercase"
    } else {
        classes = "mt-8 w-max p-4 md:text-lg bg-vacblue shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-vacpurple uppercase"
    }

    return (
                <Link href={props.href}>     
                    <a>
                    <button className={classes}>
                        {   props.icon &&
                            <FontAwesomeIcon icon={props.icon} className="mr-2" />}{props.text}    
                    </button>
                    </a>
                </Link>    
            )
}

export default Button
