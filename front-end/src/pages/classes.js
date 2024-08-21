import React from "react";
import Footer from "../components/Footer";
import Table from "../components/table";

import class2 from '../assets/class2.jpg';
import event2 from '../assets/event2.jpg';
import class4 from '../assets/class4.jpg';

const ClassesPage = () => {
    return(
        <>
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mt-20 mx-auto">
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img className="rounded-lg" src={event2} alt="about Us image" />
                            </div>
                            <img className="h-99 rounded-lg" src={class2} alt="about Us image" />
                        </div>
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal lg:text-start text-center">Time to meet our choreographers</h2>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">We offer a variety of dance classes tailored to meet the needs of every dancer, from beginners to seasoned professionals. Our experienced instructors are dedicated to providing high-quality instruction in a supportive and inspiring environment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-4xl text-center font-bold">
                Class Plans
                </div>
                {/* class table */}
                <Table />

                {/* Annual plan*/}
                <div className="mx-auto mt-0 max-w-7xl lg:px-0 px-10 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/** sphere1 image */}
                    <div className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-xl mt-20">
                    <img
                        src={class4} 
                        alt="Photo Thumbnail"
                        className="absolute inset-0 w-full rounded-lg h-full object-cover cursor-pointer"
                    />
                    </div>
                    {/** sphere1 text */}
                    <div className="flex flex-col justify-center mt-20">
                        <h2 className="text-5xl font-medium font-bold mb-4 text-black">Unlock Your Dance Potential with Our Annual Plan</h2>
                        <div className="mb-4 text-base text-gray-500 font-normal text-black">
                        Take your dance journey to the next level with Empire's exclusive Annual Plan, now available for just <span className="text-orange-400">30,000 KES.</span> This comprehensive package offers unparalleled access to our wide range of classes, workshops, and special events throughout the year. Whether you're aiming to refine your skills, explore new dance styles, or immerse yourself in our vibrant dance community, the Annual Plan provides the ultimate value and convenience. Join us and experience a year filled with growth, creativity, and unforgettable dance moments.
                        </div>
                    </div>     
             </div>
            </div>
            </div>

            <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
             <div
                className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-black from-indigo-600 to-violet-600 flex items-center justify-between flex-col lg:flex-row"
                >
                <div className="block text-center mb-5 lg:text-left lg:mb-0">
                    <h2
                    className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2 "
                    >
                    Connect with us
                    </h2>
                    <p className="text-xl text-white">
                    Contact us with any query or any idea.
                    </p>
                </div>
                    <a
                        href="#"
                        className="flex items-center gap-2 bg-orange-400 rounded-full shadow-sm text-lg text-black font-semibold py-4 px-8 transition-all duration-500 hover:bg-gray-300"
                        >Get In Touch
                        <svg
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                            stroke="black"
                            stroke-width="2.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </svg>
                    </a>
                </div>
             </div>
             <Footer />
            
     </>
    );
}
export default ClassesPage;