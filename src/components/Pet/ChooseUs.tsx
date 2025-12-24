import React from "react";
import Image from "next/image";
import Link from "next/link";

const ChooseUs = () => {
    return (
        <>
            <div className="md:mt-20 mt-10 relative overflow-hidden">
                <div className="container relative z-[1]">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:py-20 md:py-16 py-10">
                        {/* Left Content */}
                        <div className="text-content px-4 lg:px-8">
                            <div className="mb-3">
                                <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-sm font-semibold rounded-full mb-4">
                                    Why Choose Us
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                Experience Excellence in Eyewear
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                                Discover premium optical solutions backed by certified experts and exceptional service standards.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                                <div className="group bg-white border border-gray-100 hover:border-red-100 rounded-xl p-5 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-50 group-hover:bg-red-100 rounded-lg flex items-center justify-center transition-colors">
                                            <i className="icon-glasses text-red-600 text-2xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-gray-900 font-semibold text-base mb-1">
                                                Premium Collection
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                Curated designer frames
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group bg-white border border-gray-100 hover:border-red-100 rounded-xl p-5 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-50 group-hover:bg-red-100 rounded-lg flex items-center justify-center transition-colors">
                                            <i className="icon-eye text-red-600 text-2xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-gray-900 font-semibold text-base mb-1">
                                                Certified Experts
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                Professional opticians
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group bg-white border border-gray-100 hover:border-red-100 rounded-xl p-5 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-50 group-hover:bg-red-100 rounded-lg flex items-center justify-center transition-colors">
                                            <i className="icon-lens text-red-600 text-2xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-gray-900 font-semibold text-base mb-1">
                                                Custom Solutions
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                Tailored to your needs
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group bg-white border border-gray-100 hover:border-red-100 rounded-xl p-5 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-50 group-hover:bg-red-100 rounded-lg flex items-center justify-center transition-colors">
                                            <i className="icon-shield text-red-600 text-2xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-gray-900 font-semibold text-base mb-1">
                                                Warranty Coverage
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                Complete protection
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group bg-white border border-gray-100 hover:border-red-100 rounded-xl p-5 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-50 group-hover:bg-red-100 rounded-lg flex items-center justify-center transition-colors">
                                            <i className="icon-measure text-red-600 text-2xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-gray-900 font-semibold text-base mb-1">
                                                Perfect Fit
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                Precision adjustments
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group bg-white border border-gray-100 hover:border-red-100 rounded-xl p-5 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-50 group-hover:bg-red-100 rounded-lg flex items-center justify-center transition-colors">
                                            <i className="icon-delivery-truck text-red-600 text-2xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-gray-900 font-semibold text-base mb-1">
                                                Fast Delivery
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                Quick turnaround time
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link href={'/shop/breadcrumb-img'} className='inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors mt-8'>
                                Explore Collection
                            </Link>
                        </div>

                        {/* Right Image */}
                        <div className="relative lg:block hidden">
                            <div className="relative h-[600px] rounded-2xl overflow-hidden">
                                <Image
                                    src={'/images/optical/glass.png'}
                                    width={800}
                                    height={600}
                                    alt='Professional eyewear service'
                                    className='w-full h-full object-cover'
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            
                            {/* Floating stats card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-xl shadow-2xl p-6">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-red-600">500+</div>
                                        <div className="text-sm text-gray-600 mt-1">Designs</div>
                                    </div>
                                    <div className="text-center border-x border-gray-200">
                                        <div className="text-2xl font-bold text-red-600">10K+</div>
                                        <div className="text-sm text-gray-600 mt-1">Customers</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-red-600">15+</div>
                                        <div className="text-sm text-gray-600 mt-1">Years</div>
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