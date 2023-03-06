import React, { useState } from 'react'
import { discount, bucket, video, delivery, heart, shirt, addBag, cardImg, shortik, kastyum } from '../../assets/imgs'
import StarRatingComponent from 'react-star-rating-component'
export default function CollectionCards() {
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




    return (
        <div className="flex mt-3 box-border ">
            <div className={`max-w-[1440px] md:px-[130px] m-auto h-fit py-8 `}>

                <div className="w-full flex justify-between flex-col md:flex-row px-4 md:px-0">
                    <div className="not-italic font-medium text-2xl leading-9 text-black mb-6 md:mb-0">
                        Collections of clothes that suit you
                    </div>
                    <div className="rounded flex justify-between bg-slate-50 border border-solid border-searchBgColor mx-auto h-[42px] md:h-[52px] ss:w-full md:w-[308px] md:mx-0">
                        <button className='h-[42px] text-xs text-black text-center font-normal not-italic focus:bg-white focus:border focus:border-solid	focus:border-inheri focus:rounded w-1/2 md:w-[152px] md:h-[50px]'>Cards</button>
                        <button className='h-[42px] text-xs text-black text-center font-normal not-italic focus:bg-white focus:border focus:border-solid	focus:border-inheri focus:rounded w-1/2 md:w-[152px] md:h-[50px]'>Sets</button>
                    </div>
                </div>
                
            
                <div className="flex flex-row justify-between flex-wrap	mt-[25px] p-1 ls:gap ls:grid ls:gap-2 grid-cols-2  px-4 w-full md:px-0 mx-auto md:mx-0 md:mt-[50px] md:gap-5">
                    {
                        productList.map(data => {
                            return (

                                <div key={data.id} className="border border-solid border-borderColorCard overflow-hidden rounded-t-lg w-full h-auto mb-3 md:w-[298px] md:h-[470px] md:mb-0
                                ">
                                    
                                    <div className='relative w-full bg-white flex flex-wrap content-between items-center overflow-hidden border-b border-solid	border-borderColorCard ls:h-[210px] md:h-[340px]'>
                                        {
                                            data.ProducImg ?
                                                <img className='w-full m-auto ls:h-40% md:h-full' src={data.ProducImg} alt="ProducImg" />
                                                :
                                                <img className='w-full h-fit ls:h-40% md:h-full' src={data.noProductImg} alt="noProductImg" />
                                        }
                                        <div className='w-full flex justify-between absolute top-px p-2'>
                                            <div>
                                                {data?.discount ?
                                                
                                                <p className=" h-8  bg-white rounded flex items-center justify-around not-italic font-normal text-sm cursor-pointer leading-4  border border-solid	border-borderColorCard text-black w-[130px] md:w-[140px]">
                                                    <span><img src={discount} alt="discount" /></span>
                                                    <span>Discount</span>
                                                    <span style={{ color: "#D50000" }}>{data.discount}</span>
                                                </p> 
                                                : null
                                                }
                                                {data?.video ? <p className="w-[82px] h-8 mt-2 bg-white rounded flex items-center justify-around not-italic font-normal text-sm cursor-pointer leading-4  border border-solid	border-borderColorCard text-black"><span><img src={video} alt="video" /></span><span>{data.video}</span></p> : null}
                                                {data?.diliver ? <p className="w-[94px] h-8 mt-2 bg-white rounded flex items-center justify-around not-italic font-normal text-sm cursor-pointer leading-4  border border-solid	border-borderColorCard text-black"><span><img src={delivery} alt="delivery" /></span><span>Diliver</span></p> : null}
                                            </div>
                                            <div >
                                                {data?.like ? <p className="w-8 h-8 bg-white rounded flex items-center justify-center cursor-pointer p-1 border border-solid	border-borderColorCard"><img src={heart} alt="heart" /></p> : null}
                                                {data.buy ? <p className='w-8  mt-2 h-8 bg-white rounded flex items-center justify-center cursor-pointer p-1 border border-solid	border-borderColorCard'><img src={bucket} alt="bucket" /></p> : null}
                                            </div>
                                        </div>
                                        <div className="absolute w-full flex justify-between items-center px-4 bg-white bottom-0  border-t	 border-solid	border-borderColorCard ss:h-[40px] ls:h-[36px] md:h-[48px]">
                                            <label className='rounded-full  w-5 h-5 bg-purple-500 cursor-pointer  border	 border-solid border-borderColorCard md:w-7 md:h-7' htmlFor="Color1">
                                                <input className="hidden" type="radio" id="Color1" name="colors" value="1" />
                                            </label>
                                            <label className='rounded-full  w-5 h-5 bg-black cursor-pointer  border	 border-solid	border-borderColorCard md:w-7 md:h-7' htmlFor="Color2">
                                                <input className="hidden" type="radio" id="Color2" name="colors" value="1" />
                                            </label>
                                            <label className='rounded-full w-5 h-5 bg-white cursor-pointer  border	 border-solid	border-borderColorCard md:w-7 md:h-7' htmlFor="Color3">
                                                <input className="hidden" type="radio" id="Color3" name="colors" value="1" />
                                            </label>
                                            <label className='rounded-full  w-5 h-5 bg-zinc-500 cursor-pointer  border	 border-solid border-borderColorCard md:w-7 md:h-7' htmlFor="Color4">
                                                <input className="hidden" type="radio" id="Color4" name="colors" value="1" />
                                            </label>
                                            <label className='rounded-full  w-5 h-5 bg-sky-600 cursor-pointer  border	 border-solid border-borderColorCard md:w-7 md:h-7' htmlFor="Color5">
                                                <input className="hidden" type="radio" id="Color5" name="colors" value="1" />
                                            </label>
                                            <label className='rounded-full w-5 h-5 bg-amber-400 cursor-pointer  border	 border-solid border-borderColorCard md:w-7 md:h-7' htmlFor="Color6">
                                                <input className="hidden" type="radio" id="Color6" name="colors" value="1" />
                                            </label>

                                        </div>
                                    </div>
                                    
                                    <div className="w-full h-32 rounded-b-1xl bg-white flex flex-wrap content-between ls:py-1 ss:p-4 ls:px-3 md:p-4">
                                        <div className="w-full not-italic font-normal leading-4 text-black ss:text-base ls:text-xs md:text-base md:h-[18px]">
                                            {data?.title || "NoData"}
                                        </div>
                                        <div className="w-full flex justify-between items-center">
                                            <div className='flex items-center justify-between'>
                                                <StarRatingComponent
                                                    name="rate"
                                                    className="text-2xl ls:text-xs md:text-3xl"
                                                    starCount={5}
                                                    value={rating}
                                                    onStarClick={onStarClick}
                                                    emptyStarColor={"#c1c1c1"}
                                                />
                                                <span className='not-italic font-normal text-base leading-4 text-right text-gray-500 ml-1 flex items-center mt-2 ls:text-xs ls:mt-1'>({data?.starCount || 0})</span>

                                            </div>
                                            <div className="not-italic font-medium text-sm flex items-end leading-4 text-black md:text-base ls:text-sm">
                                                <b><span>{data?.shirtSize || 0}</span></b>

                                            </div>

                                        </div>
                                        <div className="w-full flex items-center justify-between">
                                            <div className='flex flex-col'>
                                                {
                                                    data.sale ?
                                                        <b className='not-italic ls:relative font-medium text-xl leading-7 text-red-700 ls:text-lg md:text-2xl'>{data?.sale}
                                                            <span className='not-italic line-through  text-sm leading-4 text-gray-500 ml-2 ls:absolute ls:left-0 ls:-top-3 ls:ml-0'>{data?.price}</span>
                                                        </b>
                                                        :<b style={{ color: "black" }}>{data?.price} </b>
                                                }
                                            </div>
                                            <div className="flex items-center">
                                                {
                                                    data.sale ?
                                                        <>  <span><img src={shirt} alt="user" /></span>
                                                            <span className='mx-[5px] ls:mx-[2px]'>+</span></> : null
                                                }
                                                <span><img src={addBag} alt="user" /></span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
