import React from 'react'

const SubscribeForm = () => {
    return (
        <div class="flex flex-col w-screen md:max-w-3xl md:h-56 bg-vacgrey md:rounded-lg md:shadow-lg overflow-hidden md:flex-row my-10 text-center lg:border lg:border-white">
        <div class="md:flex items-center justify-center md:w-1/2 md:bg-vacblue">
            <div class="py-6 px-8 md:py-0">
                <h2 class="text-vacblue text-2xl font-extrabold tracking-tight md:text-gray-100 uppercase">Subscribe to our mailing list</h2>
                <p class="mt-2 text-white font-bold md:text-gray-400">Promotions, news, and more!</p>
            </div>
        </div>
        <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
            <form>
                <div class="flex flex-col rounded-lg overflow-hidden sm:flex-row">
                    <input class="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100" type="text" name="email" placeholder="Enter your email" />
                    <button class="py-3 px-4 bg-vacblue text-white font-semibold uppercase hover:bg-vacpurple">subscribe</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default SubscribeForm
