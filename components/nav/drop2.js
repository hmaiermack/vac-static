import React, { useState } from 'react';
import { menuItems } from './menuItems';
import Link from 'next/link';
import '../../styles/Dropdown.module.css';

const Drop2 = ( props ) => {
    const parent = props.parent
    
    return (
      <li className="absolute bg-vacpurple drop2li">
        <ul
          className="divide-y divide-vacblue"
        >
          {menuItems[parent].map((item, index) => {
            return (
              <li key={index} className="dropdown px-1 pt-1 transition ease-in-out duration-150 text-white  hover:bg-white hover:bg-opacity-90 hover:text-vacpurple">
                <Link
                  href={item.path}
                >
                  <a>{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }

export default Drop2
