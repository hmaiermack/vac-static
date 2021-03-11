import React from 'react'

const SubscribeForm = () => {
    return (
        <div className="flex flex-col w-screen bg-gray-400 md:max-w-3xl md:h-56  md:shadow-lg overflow-hidden md:flex-row text-center lg:border lg:border-white">
        <div className="md:flex items-center justify-center md:w-1/2 md:bg-vacblue">
            <div className="py-6 px-8 md:py-0">
                <h2 className="text-vacblue text-2xl font-extrabold tracking-tight md:text-gray-100 uppercase">Subscribe to our mailing list</h2>
                <p className="mt-2 text-white font-bold md:text-gray-400">Promotions, news, and more!</p>
            </div>
        </div>
        <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 ">
            <form>
                <div className="flex flex-col overflow-hidden mx-2">
                    <input className="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100" type="text" name="email" placeholder="Enter your email" />
                    <button className="bg-vacblue shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-vacpurple uppercase whitespace-nowrap">subscribe</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default SubscribeForm
