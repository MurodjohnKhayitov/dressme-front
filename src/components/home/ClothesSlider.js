import React, { useState } from 'react'
import { next, category, arrowBottomFull, mouse, toBottom } from '../../assets/imgs'
import { discount, bucket, video, delivery, heart, shirt, addBag, cardImg, shortik, kastyum } from '../../assets/imgs'
import StarRatingComponent from 'react-star-rating-component'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ClothesSlider() {
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const [productList, setProductList] = useState([
        {
            id: 1,
            discount: "-30%",
            video: "video",
            diliver: true,
            like: true,
            buy: true,
            ProducImg: kastyum,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 2,
            discount: "",
            video: "video",
            diliver: false,
            buy: true,
            like: false,
            ProducImg: shortik,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 3,
            discount: "",
            video: "video",
            diliver: true,
            buy: false,
            like: true,
            ProducImg: "",
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "",
            price: "70.000",
        },
        {
            id: 4,
            discount: "-30%",
            video: "video",
            diliver: true,
            buy: true,
            like: true,
            ProducImg: shortik,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 5,
            discount: "-30%",
            video: "video",
            diliver: false,
            buy: true,
            like: true,
            ProducImg: kastyum,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 6,
            discount: "",
            video: "",
            diliver: true,
            buy: true,
            like: true,
            ProducImg: "",
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 7,
            discount: "-30%",
            video: "video",
            diliver: true,
            buy: true,
            like: true,
            ProducImg: "",
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 8,
            discount: "-30%",
            video: "video",
            diliver: false,
            buy: true,
            like: true,
            ProducImg: kastyum,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 9,
            discount: "",
            video: "",
            diliver: true,
            buy: true,
            like: true,
            ProducImg: "",
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "15.000",
            price: "70.000",
        },
        {
            id: 10,
            discount: "-30%",
            video: "video",
            diliver: false,
            buy: true,
            like: true,
            ProducImg: shortik,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 11,
            discount: "-30%",
            video: "video",
            diliver: true,
            buy: true,
            like: true,
            ProducImg: kastyum,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "",
            price: "75.000",
        },
        {
            id: 12,
            discount: "",
            video: "video",
            diliver: true,
            buy: true,
            like: true,
            ProducImg: "",
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 13,
            discount: "",
            video: "video",
            diliver: true,
            buy: true,
            like: true,
            ProducImg: "",
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "45.000",
            price: "70.000",
        },
        {
            id: 14,
            discount: "",
            video: "",
            diliver: true,
            buy: true,
            like: true,
            ProducImg: shortik,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "",
            price: "140.000",
        },
        {
            id: 15,
            discount: "",
            video: "",
            diliver: true,
            buy: false,
            like: true,
            ProducImg: kastyum,
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "",
            price: "70.000",
        },
        {
            id: 16,
            discount: "-40%",
            video: "video",
            diliver: false,
            buy: true,
            like: false,
            ProducImg: "",
            noProductImg: cardImg,
            title: "Line-Pattern Zipper Sweatshirt ",
            starCount: 256,
            shirtSize: "M | 3XL",
            sale: "35.000",
            price: "70.000",
        },

    ])
    const [rating, setRating] = useState(0);

    const onStarClick = (nextValue, prevValue, name) => {

        setRating(nextValue);
    }
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
                { id: 1, type: "All", name: "All" },
                { id: 2, type: "icons", name: "Cotegory 1" },
                { id: 3, type: "icons", name: "Cotegory2" },
                { id: 4, type: "icons", name: "Cotegory3" },
                { id: 5, type: "icons", name: "Cotegory4" },
                { id: 6, type: "icons", name: "Cotegory5" },
                { id: 7, type: "icons", name: "Cotegory6" },
                { id: 8, type: "icons", name: "Cotegory7" },
                { id: 9, type: "icons", name: "Cotegory8" },
                { id: 10, type: "icons", name: "Cotegory9" },
                { id: 11, type: "icons", name: "Cotegory10" },
                { id: 12, type: "icons", name: "Cotegory11" },
                { id: 13, type: "icons", name: "Cotegory12" },
                { id: 14, type: "icons", name: "Cotegory13" },
                { id: 15, type: "icons", name: "Cotegory14" },


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
            items: 4,
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
    const responsive2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1280 },
            items: 8,
        },
        desktop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 4,
        },
        XlMobile: {
            breakpoint: { max: 768, min: 568 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 568, min: 0 },
            items: 2,
        },
    };


    return (
        <div className='flex flex-col  box-border'>
            <div className='  max-w-[1440px] h-fit md:px-[130px]  m-auto xs:px-[100px] ss:px-[36px]  box-border '>

                <div className=' flex ss:flex-col xs:flex-row xs:justify-between ss:justify-center items-center h-fit py-7'>
                    <div className="flex items-center ss:justify-center md:justify-start ss:w-full xs:w-[48%] border ss:border-solid  md:border-none ss:border-borderColorCard ss:h-[44px] rounded ">
                        <p className='flex items-center cursor-pointer select-none'>
                            <span className='not-italic font-normal xs:text-lg md:text-2xl ss:text-xl leading-7 text-black'>Deals under:</span>
                            <span className='flex mr-2  not-italic md:font-bold ss:font-bold xs:font-bolder xs:text-base md:text-2xl ss:text-2xl leading-7 text-black'>100$<img className='mt-1' src={arrowBottomFull} alt="next" /></span> </p>
                    </div>
                    <div className="flex items-center ss:justify-center md:justify-end ss:w-full xs:w-[48%] ss:mt-4 xs:mt-0 border ss:border-solid  md:border-none ss:border-borderColorCard ss:h-[44px] rounded">
                        <p className='flex items-center cursor-pointer select-none'>
                            <span className='not-italic font-medium mr-2 md:text-base ss:text-base xs:text-sm leading-4 text-right text-black'>Stores closest to you</span>
                            <span><img src={next} alt="next" /></span> </p>
                    </div>

                </div>
                <div className='w-full h-fit py-7 '>
                    <Carousel
                        responsive={responsive2}
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        containerClass="container"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite={false}
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        autoPlay={true}


                        className='w-[100%] flex justify-between py-3 '
                    >
                        {
                            carosuelData?.map(data => {
                                return (
                                    data.campany.map(data => {
                                        return (
                                            <div key={data.id} className='ss:w-30 ls:w-40 flex flex-col justify-center items-center h-fit ml-[-10px]'>
                                                <div className='ls:h-32 ls:w-32 ss:py-5 ss:px-10 ls:p-0 bg-gray-100 rounded-lg flex justify-center items-center cursor-pointer  '>
                                                    <p className='not-italic font-medium text-base leading-4 text-center text-black'>{data?.type || "0"}</p>
                                                </div>
                                                <div >
                                                    <p className='not-italic font-medium ss:text-sm xs:text-base leading-4 text-center ls:mt-5 ss:mt-2 text-black '>{data?.name || "type"}</p>
                                                </div>
                                            </div>

                                        )
                                    })

                                )
                            })
                        }

                    </Carousel>
                </div>
            </div>
            <div className='w-full h-fit my-7 border-y	border-solid	border-borderColorCard'>
                <div className='h-fit md:px-[130px]  m-auto  max-w-[1440px] xs:px-[100px] ss:px-[36px]  box-border '>
                    <div className='w-full flex items-center xs:h-[560px] ss:h-[400px] xs:py-7 ss:py-1'>
                        <div className='w-full 		xs:my-5 xs:py-7 '>
                            <Carousel
                                responsive={responsive1}
                                autoPlay={true}


                                autoPlaySpeed={5000}
                                infinite={true}
                                className='w-[100%] flex xs:justify-between ss:pl-5 xs:pl-0'
                            >
                                {
                                    productList.map(data => {
                                        return (
                                            <div key={data.id} className="xs:w-[95%] ss:w-[85%] ss:h-[320] xs:h-[470px] border border-solid	border-borderColorCard overflow-hidden rounded-t-lg		">
                                                <div className='relative w-full  ss:h-[206px] xs:h-[340px] bg-white flex flex-wrap content-between items-center overflow-hidden border-b border-solid	border-borderColorCard'>
                                                    {
                                                        data.ProducImg ?
                                                            <img className='w-full h-full m-auto' src={data.ProducImg} alt="ProducImg" />
                                                            :
                                                            <img className='w-full h-fit' src={data.noProductImg} alt="noProductImg" />
                                                    }
                                                    <div className='w-full flex justify-end absolute top-px p-2'>


                                                        {data?.like ? <p className="w-8 h-8 bg-white rounded flex items-center justify-center cursor-pointer p-1 border border-solid	border-borderColorCard"><img src={heart} alt="heart" /></p> : null}

                                                    </div>
                                                    <div className="absolute w-full h-[48px] flex justify-between items-center px-4 bg-white bottom-0  border-t	 border-solid	border-borderColorCard">
                                                        <label className='rounded-full  w-7 h-7 bg-purple-500 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color1">
                                                            <input className="hidden" type="radio" id="Color1" name="colors" value="1" />
                                                        </label>
                                                        <label className='rounded-full  w-7 h-7 bg-black cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color2">
                                                            <input className="hidden" type="radio" id="Color2" name="colors" value="1" />
                                                        </label>
                                                        <label className='rounded-full  w-7 h-7 bg-white cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color3">
                                                            <input className="hidden" type="radio" id="Color3" name="colors" value="1" />
                                                        </label>
                                                        <label className='rounded-full  w-7 h-7 bg-zinc-500 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color4">
                                                            <input className="hidden" type="radio" id="Color4" name="colors" value="1" />
                                                        </label>
                                                        <label className='rounded-full  w-7 h-7 bg-sky-600 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color5">
                                                            <input className="hidden" type="radio" id="Color5" name="colors" value="1" />
                                                        </label>
                                                        <label className='rounded-full  w-7 h-7 bg-amber-400 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color6">
                                                            <input className="hidden" type="radio" id="Color6" name="colors" value="1" />
                                                        </label>

                                                    </div>
                                                </div>
                                                <div className="w-full xs:h-32 ss:h-[114px] rounded-b-1xl bg-white p-4 flex flex-wrap content-between ">
                                                    <div className="w-full h-[18px] not-italic font-normal ss:text-xs sm:text-xs ll:text-base leading-4 text-black">
                                                        {data?.title || "NoData"}
                                                    </div>
                                                    <div className="w-full flex justify-between items-center">
                                                        <div className='flex items-center justify-between'>
                                                            <StarRatingComponent
                                                                name="rate"
                                                                className="ss:text-xl ll:text-3xl sm:text-lg"
                                                                starCount={5}
                                                                value={rating}
                                                                onStarClick={onStarClick}
                                                                emptyStarColor={"#c1c1c1"}
                                                            />
                                                            <span className='not-italic font-normal ss:text-xs ll:text-base  sm:text-xs leading-4 text-right text-gray-500 ml-1 flex items-center ss:mt-1 sm:mt-[1px]   ll:mt-2'>({data?.starCount || 0})</span>

                                                        </div>
                                                        <div className="not-italic font-medium  ss:text-sm  sm:text-xs  ll:text-base leading-4 text-black">
                                                            <b><span>{data?.shirtSize || 0}</span></b>

                                                        </div>

                                                    </div>
                                                    <div className="w-full flex items-center justify-between">
                                                        <div >
                                                            <b style={{ color: "black" }}>{data?.price} </b>
                                                        </div>
                                                        <div className="flex items-center">

                                                            <span><img src={addBag} alt="user" /></span>

                                                        </div>

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
            </div>
        </div>
    )
}
