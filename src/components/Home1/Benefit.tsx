import React from "react";

interface Props {
    props: string;
}

const Benefit: React.FC<Props> = ({ props }) => {
    return (
        <>
            <div className="container">
                <div className={`benefit-block ${props}`}>
                    <div className="list-benefit grid items-start lg:grid-cols-4 grid-cols-2 gap-[30px]">
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-phone-call lg:text-7xl text-5xl"></i>
                            <div className="heading6 text-center mt-5">
                                24/7 Vision Support
                            </div>
                            <div className="caption1 text-secondary text-center mt-3">
                                Our team is always available to assist with
                                frame selection, lens guidance, or eye‑care
                                questions.
                            </div>
                        </div>

                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-return lg:text-7xl text-5xl"></i>
                            <div className="heading6 text-center mt-5">
                                14‑Day Easy Exchange
                            </div>
                            <div className="caption1 text-secondary text-center mt-3">
                                Not happy with the fit or style? Exchange your
                                eyewear within 14 days for a better match.
                            </div>
                        </div>

                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-guarantee lg:text-7xl text-5xl"></i>
                            <div className="heading6 text-center mt-5">
                                Quality Lens Guarantee
                            </div>
                            <div className="caption1 text-secondary text-center mt-3">
                                We ensure premium lenses and durable frames
                                backed by our satisfaction guarantee.
                            </div>
                        </div>

                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-delivery-truck lg:text-7xl text-5xl"></i>
                            <div className="heading6 text-center mt-5">
                                Worldwide Delivery
                            </div>
                            <div className="caption1 text-secondary text-center mt-3">
                                Get your favorite eyewear delivered anywhere
                                across the globe with secure packaging.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Benefit;
