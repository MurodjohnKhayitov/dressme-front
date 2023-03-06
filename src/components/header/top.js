import React from "react";
import { Link } from "react-router-dom";
import { business, eng, glasses, help, location, order, shop } from "../../assets/imgs";
import { styles } from "../../util/style";

const TopHeader = () => {
    return(
        <div className="top bg-bgColor hidden md:block">
            <div className="w-full max-w-[1440px] ss:px-4 md:px-[130px] mx-auto ">
                <div className={`${styles.container} mx-auto  text-[15px]`}>
                    <div className={`${styles.flexBetween} py-[2px]`}>
                        <div className="left flex items-center">
                            <Link to="/" className="flex items-center">
                                <img src={location} alt="location" className="mr-2" />
                                <span className="text-textColor mr-[6px] font-medium">Location:</span>
                                <span className="font-medium border-b border-slate-900 text-black mr-[45px]">Tashkent</span>
                            </Link>
                            <div className="flex items-center bg-white rounded px-3 py-[6px] cursor-pointer mr-3">
                                <img src={eng} alt="eng" className="mr-[6px]" />
                                <span className="font-medium">English</span>
                            </div>
                            <div className="flex items-center bg-white rounded px-3 py-[6px] cursor-pointer mr-3">
                                <img src={glasses} alt="glasses" className="mr-2" />
                                <span className="font-medium">Accessibility</span>
                            </div>
                        </div>
                        <div className="right flex items-center">
                            <Link to="#" className="flex items-center mr-[25.5px]">
                                <img src={help} alt="help" className="mr-2" />
                                <span className="text-textColor font-medium">Help</span>
                            </Link>
                            <Link to="#" className="flex items-center">
                                <img src={business} alt="business" className="mr-2" />
                                <span className="text-textColor font-medium">Business</span>
                            </Link>
                            <div className="line h-5 border text-textColor ml-6"></div>
                            <Link to="#" className="flex items-center ml-[26.25px]">
                                <img src={order} alt="my orders" className="mr-2" />
                                <span className="text-textColor font-medium">My orders</span>
                            </Link>
                            <button className="flex items-center bg-white rounded px-3 py-[6px] cursor-pointer ml-6">
                                <img src={shop} alt="shop" className="mr-2" />
                                <span className="font-medium">Shop</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopHeader