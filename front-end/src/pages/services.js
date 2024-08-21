import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

import corporate from '../assets/corporate.jpg';
import class2 from '../assets/class2.jpg';
import event from '../assets/event.jpg';
import class4 from '../assets/class4.jpg';
import service from '../assets/service.jpg';


const ServicesPage = ()=> {

const location = useLocation();

useEffect(()=> {
    if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
}, [location]);

    return(
        <>
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mt-20 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img className="rounded-lg" src={class2} alt="about Us image" />
                            </div>
                            <img className="h-99 rounded-lg" src={class4} alt="about Us image" />
                        </div>
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2 className="text-black text-5xl font-bold  leading-normal lg:text-start text-center">Find out what we offer</h2>
                                    <p className="text-gray-500 text-m font-normal leading-relaxed lg:text-start text-center">Our diverse range of services is designed to cater to the unique needs of corporate teams, individuals, and communities alike. Whether you're looking to energize your corporate events, enhance your personal dance journey, or support local street talent, Empire has something for everyone. Explore our offerings and let us bring the joy of dance into your world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
                {/** Sphere1 */}
            <div id="corporate" className="mx-auto mt-0 max-w-7xl lg:px-0 px-10 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/** sphere1 image */}
                    <div className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-xl mt-20">
                    <img
                        src={corporate} 
                        alt="Photo Thumbnail"
                        className="absolute inset-1 w-full rounded-lg h-full object-cover cursor-pointer"
                    />
                    </div>
                    {/** sphere1 text */}
                    <div className="flex flex-col justify-center mt-20">
                        <h2 className="text-5xl font-medium mb-4 text-black">corporate services</h2>
                        <div className="mb-4 text-base text-gray-500 font-normal text-black">
                        In the corporate world, we understand the importance of creativity, team building, and brand presence. That's why at Empire, we offer a range of services designed to infuse your corporate events with energy and style. Whether you're planning a grand event, looking to enhance your brand awareness, or want to offer dance classes as a corporate wellness initiative, we've got you covered. Our professional team can also provide top-notch entertainment to make your corporate gatherings unforgettable.   
                        </div>
                    </div>     
             </div>
            </div>
            {/** sphere2 */}   
            <div id="personal" className="mx-auto mt-0 max-w-7xl lg:px-0 px-10 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/** sphere2 image */}
                    <div className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-xl mt-20">
                    <img
                        src={service} 
                        alt="Photo Thumbnail"
                        className="absolute inset-0 w-full rounded-lg h-full object-cover cursor-pointer"
                    />
                    </div>
                    {/** sphere2 text */}
                    <div className="flex flex-col justify-center mt-20">
                        <h2 className="text-5xl font-medium mb-4 text-black">Personal Dance</h2>
                        <div className="mb-4 text-base text-gray-500 font-normal text-black">
                        For those who live and breathe dance, or even if you're just starting, Empire is the perfect place to nurture your passion. Join us for daily dance classes that cater to all skill levels, from beginners to advanced dancers. Our workshops are designed to challenge and inspire, helping you grow as a dancer. And don't miss our exclusive meet and greet sessions, where you can connect with fellow dance enthusiasts and learn from the best in the industry.   
                        </div>
                    </div>     
                </div>
            </div>
            {/**sphere 3 */}
            <div id="community" className="mx-auto mt-0 max-w-7xl lg:px-0 px-10 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/** sphere3 image */}
                    <div className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-xl mt-20">
                    <img
                        src={event} 
                        alt="Photo Thumbnail"
                        className="absolute inset-0 w-full rounded-lg h-full object-cover cursor-pointer"
                    />
                    </div>
                    {/** sphere3 text */}
                    <div className="flex flex-col justify-center mt-20">
                        <h2 className="text-5xl font-medium mb-4 text-black">Community Engagements</h2>
                        <div className="mb-4 text-base text-gray-500 font-normal text-black">
                        At Empire Dance Kenya, we are committed to making a positive impact in our community. Every Sunday, we offer free dance classes at Nairobi CBD, providing a space for everyone to express themselves through movement, regardless of their background or experience level. These classes are more than just a way to share our love for dance—they're a platform to bring people together, foster creativity, and promote physical and mental well-being.
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
export default ServicesPage;