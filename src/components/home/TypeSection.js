import React, { useState } from 'react'
import { next } from '../../assets/imgs'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function TypeSection() {
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const [typeSectionData, setTypeSectionData] = useState([
        {
            id: 1,
            type: "Sport Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 2,
            type: "Business Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 3,
            type: "Classic Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 4,
            type: "Muslim Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 5,
            type: "Student Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 6,
            type: "Travel Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },
        {
            id: 7,
            type: "Relaxed Wear",
            locat: "/wears",
            group: [
                { id: 1, img: "", title: "T-Short" },
                { id: 2, img: "", title: "Shirt" },
                { id: 3, img: "", title: "Shapka" },
                { id: 4, img: "", title: "glasses" },
            ]

        },

    ])
    const responsive1 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        XlMobile: {
            breakpoint: { max: 768, min: 640 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
        },
    };
    return (
        <div className='flex flex-col box-border'>
            <div className='h-fit md:px-[130px]  m-auto  max-w-[1440px] xs:px-[100px] ss:px-[15px]  my-7 '>
                <div className='w-full h-full flex justify-between  '>
                    <Carousel
                        responsive={responsive1}
                        autoPlay={true}


                        autoPlaySpeed={5000}
                        infinite={true}
                        className='w-[100%] flex'
                    >

                        {
                            typeSectionData?.map(data => {
                                return (
                                    <div >
                                        <div key={data.id} className='w-[98%] lg:h-[426px] ll:h-[400px] md:h-[390px] ss:h-[350px] bg-white border border-solid	border-borderColorCard	rounded-lg ss:p-3 lg:ml-1  xl:p-8 flex flex-wrap ss:content-between sm:content-between  '>
                                            <div className='w-full flex items-center justify-between ss:h-fit sm:h-1/10  '>
                                                <p className='not-italic font-medium md:text-lg ss:text-base ll:text-xl lg:text-xl xl:text-2xl leading-7 text-black'>{data?.type || "type"}</p>
                                                <p className='flex items-center'><span className='not-italic font-medium md:text-sm xl:text-base lg:text-xs ss:text-xs  ll:text-base leading-4 text-right mr-2 text-black'>See more</span><img src={next} alt="next" /></p>

                                            </div>
                                            <div className='w-full flex flex-wrap rounded h-4/5'>
                                                {
                                                    data?.group?.map(data => {
                                                        return (
                                                            <div className='w-6/12 h-1/2 p-2  border border-solid	border-borderColorCard  bg-white flex flex-wrap content-between'>
                                                                <div className='w-full h-3/4 bg-bgColor'>
                                                                    {data.img ? <img src={data?.img} alt="data" /> : null}

                                                                </div>
                                                                <div className='w-full h-1/5 flex items-center not-italic font-medium text-base leading-4 text-black justify-start'>
                                                                    {data?.title || "title"}
                                                                </div>

                                                            </div>

                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Carousel>






                </div>
            </div>
        </div>
    )
}
