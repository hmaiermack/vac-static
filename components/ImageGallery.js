import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/swiper-bundle.css'
import {amenitiesInfo} from '../public/amenitiesinfo'

SwiperCore.use([Navigation, Pagination])

const ImageGallery = () => {
    const slides = [];

    for (let i=0; i < amenitiesInfo.length; i += 1) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} wrapperTag="li" className="relative">
                <div className="bg-vacpurple bg-opacity-80 z-10 flex absolute flex-col p-4">
                <h1 className="  text-gray-200 font-extrabold text-4xl left-4 tracking-tight">{amenitiesInfo[i].header}</h1>
                <span className="text-gray-200 max-w-prose">{amenitiesInfo[i].info}</span>
                </div>
                <Image
                src={amenitiesInfo[i].path}
                alt={amenitiesInfo[i].info}
                layout="fill"
                objectFit="scale-down"
                 />
            </SwiperSlide>
        )
    }

    return (
        <>
            <Swiper id="main" tag="section" wrapperTag="ul" navigation pagination className="w-full h-full mt-56">
                {slides}
            </Swiper>
        </>
    )
}

export default ImageGallery
