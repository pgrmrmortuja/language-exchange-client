import React, { useState, useEffect } from 'react';
import Banner from "../assets/banner.jpg";
import { Fade } from 'react-awesome-reveal';

const Slider = ({ onGetStartedClick }) => {

    return (
        <div className="mt-10 mb-14">
            <div
                className="hero h-64 md:h-[350px] lg:h-[550px]"
                style={{
                    backgroundImage: `url(${Banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
                {/* <div className="hero-overlay bg-opacity-10"></div> */}
                <div className="hero-content text-neutral-content text-center">
                    <div className="w-full px-1 md:px-8 lg:px-12 xl:px-20">
                        <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                            Welcome to LinguaConnect
                        </h1>
                        <p className="mb-5 text-sm md:text-lg lg:text-xl text-gray-800">
                            Unlock a world of possibilities with LinguaConnect. Explore diverse languages, connect globally, and learn in a supportive environment.
                        </p>
                        <button
                            onClick={onGetStartedClick}
                            className="btn bg-green-500 text-black hover:text-green-300 border-none px-6 py-2 md:px-8 md:py-3"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;

