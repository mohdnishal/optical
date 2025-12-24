import React from 'react'
import Image from 'next/image'

const WhyChooseUs = () => {
    return (
        <>
            <div className="flash-sale-block bg-surface md:mt-20 mt-10 relative overflow-hidden">
                <div className="container relative z-[1]">
                    <div className="grid lg:grid-cols-2 gap-12 items-center lg:py-28 md:py-20 py-12">
                        {/* Left Side - Content */}
                        <div className="text-content px-6 lg:px-10 lg:pr-16">
                            {/* Heading */}
                            <h2 className="text-3xl mt-6 md:text-4xl lg:text-3xl font-bold text-black leading-[1.15] mb-10 tracking-tight">
                                <span className='text-5xl tracking-tight text-[#ba3f38]'>Benefits and Reasons</span>  You Should Choose Us as Your Guide
                            </h2>
                            {/* Feature List */}
                          <div className="text-black/80 text-base leading-relaxed space-y-6 mb-8">
                    <p>
                        Experience exceptional vision care with our comprehensive optical services. Our certified optometrists provide thorough eye examinations using state-of-the-art equipment, ensuring accurate prescriptions and early detection of eye health issues.
                    </p>
                    <p>
                        Browse our extensive collection of designer frames from renowned brands, complemented by advanced lens technology including anti-glare coatings, blue light protection, and progressive lenses. We pride ourselves on personalized service, helping you find eyewear that perfectly matches your style, face shape, and lifestyle needs.
                    </p>
                   
                </div>

                            {/* Icon Grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                {/* <div className="group flex items-center justify-center bg-white/[0.03] backdrop-blur-sm rounded-xl p-4 hover:bg-red-600/10 transition-all duration-300 cursor-pointer border border-white/[0.05] hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10">
                                    <div className="text-white text-sm font-medium text-center group-hover:text-red-400 transition-colors duration-300">
                                        Premium Collection
                                    </div>
                                </div>

                                <div className="group flex items-center justify-center bg-white/[0.03] backdrop-blur-sm rounded-xl p-4 hover:bg-red-600/10 transition-all duration-300 cursor-pointer border border-white/[0.05] hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10">
                                    <div className="text-white text-sm font-medium text-center group-hover:text-red-400 transition-colors duration-300">
                                        Expert Consultation
                                    </div>
                                </div>

                                <div className="group flex items-center justify-center bg-white/[0.03] backdrop-blur-sm rounded-xl p-4 hover:bg-red-600/10 transition-all duration-300 cursor-pointer border border-white/[0.05] hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10">
                                    <div className="text-white text-sm font-medium text-center group-hover:text-red-400 transition-colors duration-300">
                                        Custom Solutions
                                    </div>
                                </div> */}

                                {/* <div className="group flex items-center justify-center bg-white/[0.03] backdrop-blur-sm rounded-xl p-4 hover:bg-red-600/10 transition-all duration-300 cursor-pointer border border-white/[0.05] hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10">
                                    <div className="text-white text-sm font-medium text-center group-hover:text-red-400 transition-colors duration-300">
                                        Lifetime Warranty
                                    </div>
                                </div> */}

                                {/* <div className="group flex items-center justify-center bg-white/[0.03] backdrop-blur-sm rounded-xl p-4 hover:bg-red-600/10 transition-all duration-300 cursor-pointer border border-white/[0.05] hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10">
                                    <div className="text-white text-sm font-medium text-center group-hover:text-red-400 transition-colors duration-300">
                                        Perfect Fitting
                                    </div>
                                </div>

                                <div className="group flex items-center justify-center bg-white/[0.03] backdrop-blur-sm rounded-xl p-4 hover:bg-red-600/10 transition-all duration-300 cursor-pointer border border-white/[0.05] hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10">
                                    <div className="text-white text-sm font-medium text-center group-hover:text-red-400 transition-colors duration-300">
                                        Express Delivery
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        
                        {/* Right Side - Empty space for background image */}
                        <div className="hidden lg:block"></div>
                    </div>
                </div>
                
                {/* Background Image - Enhanced visibility */}
                <div className="bg-img w-full h-full absolute top-0 left-0 z-[0]">
                    <Image
                        src={'/images/optical/ck.png'}
                        width={3000}
                        height={10000}
                        alt='bg-img'
                        className='w-full h-full object-cover'
                    />
                    {/* Refined gradient overlay - more photo visibility */}
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-l from-red-600/15 via-transparent to-transparent"></div> */}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-64 h-64 bg-red-600/5 rounded-full blur-3xl z-[0] max-lg:hidden"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-red-600/5 rounded-full blur-3xl z-[0] max-lg:hidden"></div>
            </div>
        </>
    );
}

export default WhyChooseUs