import React from 'react'

const Post = () => {
    return (
        <div className="grid grid-cols-4 p-4 gap-8 auto-rows-min bg-gray-100 shadow-xl">
            <span className="col-start-1 bg-vacpurple text-white text-center w-40 py-3 sm:p-8 font-bold text-lg">3/10/2021</span>

            <span className="row-start-2 col-span-4 row-auto font-extrabold text-vacblue text-4xl p-0 m-0 border-b border-gray-400 
            sm:row-start-1 sm:col-span-3 sm:col-start-2 sm:flex sm:flex-col-reverse">
                This is a Post Title
            </span>
            <p className="col-span-4 row-start-3 row-end-5 row-span-2 leading-6 sm:col-start-2 sm:row-start-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru
            </p>
            <button className="col-start-1 w-max row-start-5 p-4 bg-vacblue shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-vacpurple uppercase sm:col-start-2">Read More</button>
        </div>
    )
}

export default Post
