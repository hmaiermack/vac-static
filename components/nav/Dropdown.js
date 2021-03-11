import React, { useState } from 'react';
import { menuItems } from './menuItems';
import Link from 'next/link';
import '../../styles/Dropdown.module.css';

const Dropdown = ( props ) => {
    const parent = props.parent
    
    return (
      <li className="absolute bg-white ">
        <ul
          className="divide-y divide-gray-100"
        >
          {menuItems[parent].map((item, index) => {
            return (
              <li key={index} className="dropdown px-1 pt-1 transition ease-in-out duration-150  hover:bg-vacblue hover:bg-opacity-90 hover:text-white">
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

export default Dropdown
