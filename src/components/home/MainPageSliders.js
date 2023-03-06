import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { next, category, arrowBottomFull, mouse, toBottom } from '../../assets/imgs'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import required modules``
export default function MainPageSliders() {
    const responsive1 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
        },
        XlMobile: {
            breakpoint: { max: 768, min: 568 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 568, min: 0 },
            items: 2,
        },
    };
    const responsive2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 4,
        },
        XlMobile: {
            breakpoint: { max: 768, min: 568 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 567, min: 0 },
            items: 2,
        },
    };
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const [clothesToggle, setClothesToggle] = useState(true)
    const [carosuelData, setCarosuelData] = useState([
        {
            Category: [
                { id: 1, type: "Student", count: 123, img: "" },
                { id: 2, type: "Businiess", count: 223, img: "" },
                { id: 3, type: "Muslim", count: 80, img: "" },
                { id: 4, type: "Travel", count: 453, img: "" },
                { id: 5, type: "Sport", count: 320, img: "" },
                { id: 6, type: "Classic", count: 40, img: "" },
                { id: 7, type: "Relaxed", count: 180, img: "" },
                { id: 8, type: "Dramatic", count: 250, img: "" },
                { id: 9, type: "Creative", count: 190, img: "" },
                { id: 10, type: "Rebellious", count: 310, img: "" },
                { id: 11, type: "Feminine", count: 479, img: "" },

            ],

            campany: [
                { id: 1, type: "Adidas", },
                { id: 2, type: "Nike", },
                { id: 3, type: "Puma", },
                { id: 4, type: "Reebok", },
                { id: 5, type: "Lotto", },
                { id: 6, type: "Prince", },
                { id: 7, type: "H&M", },
                { id: 8, type: "Zara", },
                { id: 9, type: "Channel", },
                { id: 10, type: "LV", },
                { id: 11, type: "Channel", },

            ]
        },

    ])

    return (
        <div className='box-border flex flex-col 	'>
            <div className="h-fit md:px-[130px]   m-auto  max-w-[1440px] xs:px-[100px] ss:px-[36px] ">
                <div className='w-full 		my-5 py-7 xs:block ss:hidden'>
                    <Carousel
                        responsive={responsive1}
                        //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        infinite={true}
                        className='w-[100%] flex justify-between	py-3	pl-2'
                    >
                        {
                            carosuelData?.map(data => {
                                return (
                                    data.Category.map(data => {
                                        return (
                                            <div key={data.id} className='w-[95%] h-[260px] rounded  '>
                                                <div className='w-full h-[230px] bg-bgColor border border-solid	border-borderColorCard '>
                                                    {data?.img ? <img src={data?.img} alt="student" /> : null}
                                                </div>
                                                <div className='h-12.5 flex items-center justify-start'>
                                                    <p className='not-italic mt-3 mr-2 font-medium ss:text-lg lg:text-xl leading-6 text-black'>{data?.type || "type"}
                                                        <span className='not-italic font-normal text-base leading-4 text-gray-500'>({data?.count || "0"})</span></p>
                                                </div>
                                            </div>
                                        )
                                    })
                                )
                            })
                        }

                    </Carousel>
                </div>
                <div className="w-full h-fit xs:hidden  flex  flex-wrap gap-y-1	 justify-between   	my-5 py-7">
                    {
                        carosuelData?.map(data => {
                            return (
                                data.Category.map(data => {
                                    return (
                                        <div className='w-[100px]' >
                                            <div className='w-[100%] h-[80px] rounded bg-bgColor  border border-solid border-borderColorCard'>

                                            </div>
                                            <div className='w-full py-1 flex items-center'>
                                                <p className='not-italic  mr-2 font-medium text-base leading-6 text-black'>{data?.type || "type"}
                                                    <span className='not-italic font-normal text-xs leading-4 text-gray-500'>({data?.count || "0"})</span></p>
                                            </div>
                                        </div>
                                    )

                                })
                            )
                        })
                    }

                </div>
                <div className='w-full 		my-5 py-7'>
                    <Carousel
                        responsive={responsive2}
                        //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        infinite={true}
                        className='w-[100%] flex justify-between  		'
                    >
                        {
                            carosuelData?.map(data => {
                                return (
                                    data.campany.map(data => {
                                        return (
                                            <div key={data?.id} className='w-[95%] h-[100px] rounded-lg bg-gray-100 flex items-center justify-center select-none'>
                                                <p className='not-italic font-medium text-xl leading-6 text-center text-black'>{data?.type || "0"}</p>

                                            </div>

                                        )
                                    })

                                )
                            })
                        }


                    </Carousel>
                </div>



                <div className='w-full flex ss:flex-col xs:flex-row xs:justify-between ss:justify-center items-center h-fit py-7'>
                    <div className="flex items-center justify-center  md:justify-start ss:w-full ss:my-3 xs:m-0 xs:w-[48%] border ss:border-solid md:border-none ss:border-borderColorCard ss:h-[44px] rounded">
                        <p className='flex items-center cursor-pointer select-none' onClick={() => setClothesToggle(!clothesToggle)}>
                            <span className='not-italic font-medium ss:text-base xs:text-xs   sm:text-base leading-4 mr-2 text-black'>Recommendations for you</span>
                            <span>{clothesToggle ? <img src={toBottom} alt="next" /> : <img src={next} alt="next" />}</span></p>
                    </div>
                    <div className="flex items-center ss:justify-center md:justify-end ss:w-full xs:w-[48%] border ss:border-solid  md:border-none ss:border-borderColorCard ss:h-[44px] rounded">
                        <p className='flex items-center cursor-pointer select-none'>
                            <span className='not-italic font-medium ss:text-base xs:text-xs  sm:text-base leading-4 mr-2 text-black'>Stores closest to you</span>
                            <span><img src={next} alt="next" /></span> </p>
                    </div>

                </div>
                {
                    clothesToggle ?

                        <div className='flex flex-wrap justify-between items-center ss:mt-3 md:mt-12 gap-4 py-7'>
                            {/* 1 */}
                            <div className='lg:w-[32%] md:w-[48%] ss:w-[100%] ss:h-20 xs:h-32 bg-bgColor rounded-lg p-6 flex flex-wrap content-between cursor-pointer select-none border border-solid	border-borderColorCard'>
                                <div className='w-full'>
                                    <p className='not-italic font-normal ss:text-sm xs:text-base leading-4 text-black'>Strengthen Health</p>
                                </div>
                                <div className='w-full flex justify-between items-center'>
                                    <p className='not-italic font-semibold  ss:text-lg xs:text-2xl leading-7 text-black'>Sports clothes</p>
                                    <p><img src={category} alt="next" className='ss:w-[70%] xs:w-[100%]' /></p>
                                </div>
                            </div>
                            {/* 2 */}

                            <div className='lg:w-[32%] md:w-[48%] ss:w-[100%] ss:h-20 xs:h-32 bg-bgColor rounded-lg p-6 flex flex-wrap content-between cursor-pointer select-none border border-solid	border-borderColorCard'>
                                <div className='w-full'>
                                    <p className='not-italic font-normal ss:text-sm xs:text-base leading-4 text-black'>Based on your Interests</p>
                                </div>
                                <div className='w-full flex justify-between items-center'>
                                    <p className='not-italic font-semibold  ss:text-lg xs:text-2xl leading-7 text-black'>Muslim clothes</p>
                                    <p><img src={category} alt="next" className='ss:w-[70%] xs:w-[100%]' /></p>
                                </div>
                            </div>
                            {/* 3*/}

                            <div className='lg:w-[32%] md:w-[48%] ss:w-[100%] ss:h-20 xs:h-32 bg-bgColor rounded-lg p-6 flex flex-wrap content-between cursor-pointer select-none border border-solid	border-borderColorCard'>
                                <div className='w-full'>
                                    <p className='not-italic font-normal ss:text-sm xs:text-base leading-4 text-black'>Sort by your Money</p>
                                </div>
                                <div className='w-full flex justify-between items-center'>
                                    <b className='flex items-end'><span>40$</span><span><img src={arrowBottomFull} alt="arrowBottomFull" /></span><span className='not-italic font-normal xs:text-base ss:text-sm leading-4 text-gray-500'>Under price</span></b>
                                    <p><img src={category} alt="next" className='ss:w-[70%] xs:w-[100%]' /></p>
                                </div>
                            </div>
                        </div>
                        : null
                }

            </div>
        </div>
    )
}
