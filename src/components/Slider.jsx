import React, { useState, useEffect } from 'react';
import Slide1 from "../assets/slide1.jpg";
import Banner from "../assets/banner.jpg";
import Slide2 from "../assets/slide2.jpg";
import Slide3 from "../assets/slide3.jpg";
import { Fade } from 'react-awesome-reveal';

const Slider = ({ onGetStartedClick }) => {
    // const slides = [Slide1, Slide2, Slide3];
    // const [currentSlide, setCurrentSlide] = useState(0);


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, [slides.length]);

    return (
        <div className="w-11/12 mx-auto mb-14">

            {/* <div className="relative w-full overflow-hidden rounded-lg shadow-lg h-56 md:h-[400px] lg:h-[650px]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <Fade>
                            <img
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </Fade>
                    </div>
                ))}
            </div>

           
            <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div> */}


            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${Banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20">
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

