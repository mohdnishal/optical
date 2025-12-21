"use client";

import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import PrimaryButton from "../common/Button/PrimaryButton";

const SliderOne = () => {
    return (
        <>
            <div
                className={`slider-block style-three xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[340px] w-full`}
            >
                <div className="slider-main h-full w-full">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className="h-full relative"
                        autoplay={{
                            delay: 4000,
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="slide-wrapper w-full h-full flex items-center bg-cover bg-center bg-no-repeat">
                                    <div className="container w-full h-full flex items-center">
                                        <div className="text-content basis-full md:basis-1/2 flex flex-col justify-center h-full md:px-6 px-4 py-14">
                                            {/* Top Section - Tags and Description */}
                                            <div className="flex flex-col gap-2 sm:gap-6">
                                                {/* Tags */}

                                                {/* Description */}
                                                {/* <p className="text-gray-900 text-xs sm:text-sm md:text-base leading-relaxed max-w-xs">
                                                    Discover eyewear that
                                                    defines your identity —
                                                    combining precision design,
                                                    cutting-edge comfort, and a
                                                    bold fashion statement.
                                                </p> */}
                                            </div>

                                            {/* Bottom Section - Headline and CTA */}
                                            <div className="flex flex-col gap-6 sm:gap-8">
                                                <div className="flex gap-2 sm:gap-3">
                                                    <span className="text-xs sm:text-sm px-3 sm:px-4 md:px-5 py-2 bg-gray-400 text-white rounded-full font-medium tracking-wide whitespace-nowrap">
                                                        Modern
                                                    </span>
                                                    <span className="text-xs sm:text-sm px-3 sm:px-4 md:px-5 py-2 bg-gray-400 text-white rounded-full font-medium tracking-wide whitespace-nowrap">
                                                        Quirky
                                                    </span>
                                                    <span className="text-xs sm:text-sm px-3 sm:px-4 md:px-5 py-2 bg-gray-400 text-white rounded-full font-medium tracking-wide whitespace-nowrap">
                                                        Luxurious
                                                    </span>
                                                </div>
                                                {/* Main Headline */}
                                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                                                    SEE THE WORLD
                                                    <br />
                                                    THROUGH <br />
                                                    LENS
                                                </h1>

                                                {/* CTA Button */}
                                                <div className="w-1/2">
                                                    <PrimaryButton />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* <SwiperSlide>
                            <div className="slider-item h-full w-full relative bg-[#ACB99B]">
                                <div className="container w-full h-full flex items-center relative">
                                    <div className="text-content basis-1/2">
                                        <div className="text-sub-display">
                                            Sale! Up To 50% Off!
                                        </div>
                                        <div className="text-display md:mt-4 mt-2">
                                            Find Your Style with Us
                                        </div>
                                        <Link
                                            href="/shop/breadcrumb-img"
                                            className="button-main bg-white text-black md:mt-8 mt-3"
                                        >
                                            Shop Now
                                        </Link>
                                    </div>
                                    <div className="sub-img absolute sm:w-1/2 w-3/5 2xl:-right-[60px] -right-4 bottom-0">
                                        <Image
                                            src={"/images/slider/bg3-2.png"}
                                            width={1000}
                                            height={2000}
                                            alt="bg3-2"
                                            priority={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative bg-[#B19696]">
                                <div className="container w-full h-full flex items-center relative">
                                    <div className="text-content basis-1/2">
                                        <div className="text-sub-display">
                                            Sale! Up To 50% Off!
                                        </div>
                                        <div className="text-display md:mt-4 mt-2">
                                            Get Ready to Turn Heads
                                        </div>
                                        <Link
                                            href="/shop/breadcrumb-img"
                                            className="button-main md:mt-8 mt-3"
                                        >
                                            Shop Now
                                        </Link>
                                    </div>
                                    <div className="sub-img absolute sm:w-[52%] w-2/3 2xl:-right-[100px] -right-[40px] bottom-0">
                                        <Image
                                            src={"/images/slider/bg1-3.png"}
                                            width={1000}
                                            height={2000}
                                            alt="bg1-3"
                                            priority={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide> */}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default SliderOne;
