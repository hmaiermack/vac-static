import React, { useState, useEffect } from 'react'

const MemberCard = (props) => {
    
    const price = Object.entries(props.price)
    price.shift()
    const filtered = price.filter(item => item[1] != null)
    console.log(filtered)
    return (
        <div className="w-full min-w-min p-4 lg:w-1/3 plan-card f ">
          <label className="flex flex-col shadow-lg group relative hover:shadow-2xl bg-white">
            <div className="w-full px-4 py-6 card-section-1">
              <h3 className="mx-auto text-base font-semibold text-center underline text-vacblue group-hover:text-vacpurple">
                {props.type}
              </h3>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
              {filtered.map((item, idx) => (
                  <div className="pt-4" key={idx}>
                                <p className="text-5xl font-bold text-center group-hover:text-vacpurple text-vacblue uppercase">
                                ${item[1]}<span className="text-3xl"></span>
                               </p>
                               <p className="text-xs text-center uppercase group-hover:text-vacpurple text-vacblue whitespace-nowrap">
                                 {item[0]} monthly
                               </p>
                    </div>
                
              ))}
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center w-full h-full py-6 bg-vacblue"
            >
              <p className="text-xl text-white text-center">
                {props.info}
              </p>
            </div>
          </label>
        </div>    )
}

export default MemberCard
