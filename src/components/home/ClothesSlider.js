import React, { useState } from 'react'
import { next, category, arrowBottomFull, nextItem, prevItem, star } from '../../assets/imgs'
import { discount, bucket, video, delivery, heart, shirt, addBag, cardImg, shortik, kastyum } from '../../assets/imgs'
import StarRatingComponent from 'react-star-rating-component'
import { CiHeart } from 'react-icons/ci';

import { GrNext, GrPrevious } from 'react-icons/gr';
import Slider from "react-slick";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from './clothers.module.css'
export default function ClothesSlider() {
    const [productList, setProductList] = useState([
        {
            id: 1,
            discount: "-30%",
            video: "video",
            diliver: true,
            buy: true,
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cfrous7hj8j9g698ann0/t_product_540_high.jpg#1677854670106",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompresslangan futbolka-longsliv ",
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

            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cfvjvm7hj8j9g698q1qg/t_product_540_high.jpg#1677854670118",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompresslangan futbolka-longsliv ",
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
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cee9lmov1htd23aj6gjg/t_product_540_high.jpg#1677855157929",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompresslangan futbolka-longsliv ",
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
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cfh16dd40v9uauhi42hg/t_product_540_high.jpg#1677855222081",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompresslangan futbolka-longsliv ",
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
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cfmebc7hgiopn8lcdoh0/t_product_540_high.jpg#1677855264045",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompresslangan futbolka-longsliv ",
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
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cf557s8l08k0o9qi31gg/t_product_540_high.jpg#1677855329602",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompresslangan futbolka-longsliv ",
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
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cfmebc7hgiopn8lcdoh0/t_product_540_high.jpg#1677855264045",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompresslangan futbolka-longsliv ",
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
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cf2h9jqvtie1lhbgt6mg/t_product_540_high.jpg#1677855329588",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompresslangan futbolka-longsliv ",
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
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cf53ng0v1htd23al4sqg/t_product_540_high.jpg#1677855423341",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompresslangan futbolka-longsliv ",
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
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cf5vfb2vtie1lhbh7h50/t_product_540_high.jpg#1677855423352",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompresslangan futbolka-longsliv ",
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
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cf53ng0v1htd23al4sqg/t_product_540_high.jpg#1677855423341",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompresslangan futbolka-longsliv ",
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
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cf8g3tivtie1lhbhf1p0/t_product_540_high.jpg#1677855423420",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompresslangan futbolka-longsliv ",
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
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cfcdqlavtie1lhbhs490/t_product_540_high.jpg#1677855423521",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompresslangan futbolka-longsliv ",
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
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cfcgam8l08k07f16n0ag/t_product_540_high.jpg#1677855423623",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompresslangan futbolka-longsliv ",
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
            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cfcdvh0l08k0o9qiqgcg/t_product_540_high.jpg#1677855423619",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompresslangan futbolka-longsliv ",
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

            star: "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
            ProducImg: "https://images.uzum.uz/cf9ldv0v1htd23aljs7g/t_product_540_high.jpg#1677855423555",
            noProductImg: cardImg,
            title: "Erkaklar uchun kompresslangan futbolka-longsliv ",
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
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={styles.NextArrow} onClick={onClick}>
                <button className="next">
                    <GrNext />
                </button>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={styles.PrevArrow} onClick={onClick}>
                <button className="prev">
                    <GrPrevious />
                </button>
            </div>
        );
    };
    let settings1 = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    let settings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className="carousel-button-group my-4 mt-[] z-1 relative gap-4 flex  justify-between
            items-center w-full ">
                <button className='p-3 rounded-full bg-CarosueIcons' onClick={() => previous()}> <GrPrevious className='text-lg' /></button>
                <button onClick={() => next()} className='p-3 rounded-full bg-CarosueIcons border border-solid border-borderColor2'><GrNext className='text-lg' /></button>
            </div>

        );
    };


    return (
        <div className='flex flex-col  box-border'>
            <div className=' max-w-[1440px] h-fit md:px-[80px]  m-auto xs:px-[50px] ss:px-[36px]  box-border border border-solid border-black'>

                <div className='w-full h-fit border border-solid border-green-800'>
                    <div className=' flex ss:flex-col xs:flex-row xs:justify-between ss:justify-center items-center h-fit py-7 border border-solid border-red-800'>
                        <div className="flex items-center ss:justify-center md:justify-start ss:w-full xs:w-[48%] md:w-fit border ss:border-solid  md:border-none ss:border-borderColorCard ss:h-[44px] rounded ">
                            <p className='flex items-center cursor-pointer select-none'>
                                <span className='not-italic font-normal xs:text-base md:text-base ss:text-base leading-7 text-black'>Deals under:</span>
                                <span className='flex items-center not-italic font-medium text-xl leading-6 text-black'>100$<img className='mt-1' src={arrowBottomFull} alt="next" /></span> </p>
                        </div>
                        <div className="flex items-center ss:justify-center md:justify-end ss:w-full xs:w-[48%]  md:w-fit ss:mt-4 xs:mt-0 border ss:border-solid  md:border-none ss:border-borderColorCard ss:h-[44px] rounded">
                            <p className='flex items-center cursor-pointer select-none'>
                                <span className='not-italic font-medium mr-2 md:text-base ss:text-base xs:text-sm leading-4 text-right text-black'>Stores closest to you</span>
                                <span><img src={next} alt="next" /></span> </p>
                        </div>

                    </div>
                    <div className='w-full h-fit py-7 '>
                        <Slider {...settings1} className='w-[100%] flex xs:justify-between ss:pl-5 xs:pl-0 border border-solid border-red-800'
                        >
                            {
                                carosuelData?.map(data => {
                                    return (
                                        data.campany.map(data => {
                                            return (
                                                <div key={data.id} className='w-[full] h-full border border-solid border-red-800'>
                                                    <div className='w-[110px] h-[110px] m-auto ss:py-5 ss:px-10 ls:p-0 bg-gray-100 rounded-lg flex justify-center items-center cursor-pointer  '>
                                                        <p className='not-italic font-medium text-xs leading-4 text-center text-black'>{data?.type || "0"}</p>
                                                    </div>
                                                    <div >
                                                        <p className='not-italic font-medium ss:text-sm xs:text-xs leading-4 text-center ls:mt-5 ss:mt-2 text-black '>{data?.name || "type"}</p>
                                                    </div>
                                                </div>

                                            )
                                        })

                                    )
                                })
                            }

                        </Slider>
                    </div>
                </div>
            </div>

            <div className='w-full h-fit  border-y	border-solid	border-borderColorCard'>
                <div className='h-fit md:px-[80px]  m-auto  max-w-[1440px] xs:px-[50px] ss:px-[36px]  box-border border border-solid border-red-700'>
                    <div className='w-full flex items-center xs:h-[560px] ss:h-[400px] xs:py-7 ss:py-1 border border-solid border-red-400'>
                        <Slider {...settings} className='w-[100%] flex xs:justify-between ss:pl-5 xs:pl-0'
                        >
                            {
                                productList.map(data => {
                                    return (
                                        <div key={data.id} id={styles.forwidt} className="!w-[95%]  ml-1 cursor-pointer transition ease-in-out delay-150 hover:shadow-md   xs:h-[456px] border border-solid	borderColorCard overflow-hidden rounded-t-lg	"   >
                                            <div className='relative w-full  ss:h-[206px] xs:h-[309px] bg-white flex flex-wrap content-between items-center overflow-hidden border-b border-solid	border-borderColorCard'>
                                                {
                                                    data.ProducImg ?
                                                        <img className='w-full h-full m-auto' src={data.ProducImg} alt="ProducImg" />
                                                        :
                                                        <img className='w-full h-fit' src={data.noProductImg} alt="noProductImg" />
                                                }
                                                <div className='w-full flex justify-between absolute top-px p-2'>


                                                    <p className='w-8 h-8 rounded bg-white flex items-center justify-center border border-solid border-searchBgColor'><img src={delivery} alt="" /></p>
                                                    <p className='w-8 h-8 rounded bg-white flex items-center justify-center border border-solid border-searchBgColor'><CiHeart className='text-[20px] text-black hover:text-slate-800 	' /></p>

                                                </div>
                                                <div className="absolute w-full h-[38px] flex justify-between items-center px-4 bg-white bottom-0  border-t	 border-solid	border-borderColorCard">
                                                    <label className='rounded-full  w-5 h-5 bg-purple-500 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color1">
                                                        <input className="hidden" type="radio" id="Color1" name="colors" value="1" />
                                                    </label>
                                                    <label className='rounded-full  w-5 h-5 bg-black cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color2">
                                                        <input className="hidden" type="radio" id="Color2" name="colors" value="1" />
                                                    </label>
                                                    <label className='rounded-full  w-5 h-5 bg-white cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color3">
                                                        <input className="hidden" type="radio" id="Color3" name="colors" value="1" />
                                                    </label>
                                                    <label className='rounded-full  w-5 h-5 bg-zinc-500 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color4">
                                                        <input className="hidden" type="radio" id="Color4" name="colors" value="1" />
                                                    </label>
                                                    <label className='rounded-full  w-5 h-5 bg-sky-600 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color5">
                                                        <input className="hidden" type="radio" id="Color5" name="colors" value="1" />
                                                    </label>
                                                    <label className='rounded-full  w-5 h-5 bg-amber-400 cursor-pointer  border	 border-solid	border-borderColorCard' htmlFor="Color6">
                                                        <input className="hidden" type="radio" id="Color6" name="colors" value="1" />
                                                    </label>

                                                </div>
                                            </div>
                                            <div className="w-full xs:h-[147px] ss:h-[114px] py-3 px-2 rounded-b-1xl bg-white  flex flex-wrap content-between ">
                                                <div className='w-full'>

                                                    <div className="w-full  not-italic font-normal text-[14px] leading-4 text-black">
                                                        {data?.title || "NoData"}
                                                    </div>
                                                    <div className="w-full flex justify-between items-center mt-3">
                                                        <div className='flex items-center justify-between'>
                                                            <span>   <img src={star} alt="" /></span>
                                                            {/* <span><img src={} alt=""/></span> */}
                                                            <span className='not-italic font-normal ss:text-xs ll:text-xs  sm:text-xs leading-4 text-right text-gray-500 ml-1  flex items-center  '><span className='font-medium text-xs not-italic mx-1 text-black'>5.0 </span> ({data?.starCount || 0} baho) </span>

                                                        </div>
                                                        <div className="not-italic font-medium  ss:text-sm  sm:text-xs  ll:text-base leading-4 text-black">
                                                            <b><span>{data?.shirtSize || 0}</span></b>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="w-full flex items-center justify-between">
                                                    <div >
                                                        <p className='text-black not-italic font-medium text-lg leading-7'>{data?.price} so'm</p>
                                                    </div>
                                                    <div className="flex items-center">

                                                        <span className='overflow-hidden '><img src={addBag} alt="user" /></span>

                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>




        </div>
    )
}
