import React from "react";
import Image from "next/image";

const ChooseUs = () => {
    return (
        <>
            <div className="choose-us-block md:pt-20 pt-14">
                <div
                    className="container flex max-lg:flex-col max-lg:gap-y-8 items-center justify-between"
                    style={{ paddingLeft: 0, marginLeft: 0 }}
                >
                    <div className="bg-img lg:w-7/12 lg:pr-[45px] md:w-1/2 w-5/6">
                        <Image
                            src={"/images/optical/chooseme.jpg"}
                            style={{ height: "none!important" }}
                            width={1200}
                            height={300}
                            alt="bg-img"
                            priority={true}
                            className=""
                        />
                    </div>

                    <div className="content lg:w-5/12 lg:pl-[45px]">
                        <div className="heading3">
                            Why Choose Us for Your Eyewear Needs
                        </div>

                        <div className="heading6 font-normal text-secondary mt-3">
                            See the world with clarity and confidence — from
                            fashion‑forward frames to precision‑crafted lenses,
                            we deliver eyewear solutions tailored to your unique
                            lifestyle and vision needs.
                        </div>

                        <div className="list-feature lg:mt-10 mt-6">
                            {/* 1 */}
                            <div className="item flex items-center gap-5">
                                <div className="icon bg-[#D1D0F9] rounded-full">
                                    <i className="icon-glasses md:text-3xl text-2xl flex items-center justify-center md:w-[68px] md:h-[68px] w-14 h-14"></i>
                                </div>
                                <div className="text-content">
                                    <div className="heading6">
                                        Premium Eyewear Collection
                                    </div>
                                    <div className="caption1 text-secondary mt-2">
                                        Choose from a wide range of high‑quality
                                        frames and lenses crafted for comfort
                                        and style.
                                    </div>
                                </div>
                            </div>

                            {/* 2 */}
                            <div className="item flex items-center gap-5 lg:mt-8 mt-4">
                                <div className="icon bg-[#D1D0F9] rounded-full">
                                    <i className="icon-eye md:text-3xl text-2xl flex items-center justify-center md:w-[68px] md:h-[68px] w-14 h-14"></i>
                                </div>
                                <div className="text-content">
                                    <div className="heading6">
                                        Certified Optometrists
                                    </div>
                                    <div className="caption1 text-secondary mt-2">
                                        Our experienced eye‑care professionals
                                        ensure accurate vision tests and
                                        personalized guidance.
                                    </div>
                                </div>
                            </div>

                            {/* 3 */}
                            <div className="item flex items-center gap-5 lg:mt-8 mt-4">
                                <div className="icon bg-[#D1D0F9] rounded-full">
                                    <i className="icon-lens md:text-3xl text-2xl flex items-center justify-center md:w-[68px] md:h-[68px] w-14 h-14"></i>
                                </div>
                                <div className="text-content">
                                    <div className="heading6">
                                        Customized Lens Solutions
                                    </div>
                                    <div className="caption1 text-secondary mt-2">
                                        From blue‑light filters to progressive
                                        lenses, we tailor every pair to your
                                        unique vision needs.
                                    </div>
                                </div>
                            </div>

                            {/* 4 - New */}
                            <div className="item flex items-center gap-5 lg:mt-8 mt-4">
                                <div className="icon bg-[#D1D0F9] rounded-full">
                                    <i className="icon-measure md:text-3xl text-2xl flex items-center justify-center md:w-[68px] md:h-[68px] w-14 h-14"></i>
                                </div>
                                <div className="text-content">
                                    <div className="heading6">
                                        Perfect Fit Guarantee
                                    </div>
                                    <div className="caption1 text-secondary mt-2">
                                        Enjoy frames adjusted precisely to your
                                        face shape for maximum comfort and
                                        long‑lasting wear.
                                    </div>
                                </div>
                            </div>

                            {/* 5 - New */}
                            <div className="item flex items-center gap-5 lg:mt-8 mt-4">
                                <div className="icon bg-[#D1D0F9] rounded-full">
                                    <i className="icon-shield md:text-3xl text-2xl flex items-center justify-center md:w-[68px] md:h-[68px] w-14 h-14"></i>
                                </div>
                                <div className="text-content">
                                    <div className="heading6">
                                        Warranty & After‑Care
                                    </div>
                                    <div className="caption1 text-secondary mt-2">
                                        We provide warranty coverage and
                                        complimentary adjustments to keep your
                                        eyewear in perfect condition.
                                    </div>
                                </div>
                            </div>

                            {/* 6 - New */}
                            <div className="item flex items-center gap-5 lg:mt-8 mt-4">
                                <div className="icon bg-[#D1D0F9] rounded-full">
                                    <i className="icon-delivery-truck md:text-3xl text-2xl flex items-center justify-center md:w-[68px] md:h-[68px] w-14 h-14"></i>
                                </div>
                                <div className="text-content">
                                    <div className="heading6">
                                        Fast & Secure Delivery
                                    </div>
                                    <div className="caption1 text-secondary mt-2">
                                        Get your eyewear delivered quickly with
                                        safe packaging and real‑time tracking.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseUs;
