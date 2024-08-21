import React from "react";
//component import
import Footer from "../components/Footer";
import Testimonials from "../components/testimonials";
// assets import
import team from '../assets/team.jpg';
import banner from '../assets/banner.jpg';
import about from '../assets/about.jpg';

const AboutPage = () => {
    return(
        <>
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mt-20 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                        <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                            <img className="rounded-lg" src={about} alt="about Us image" />
                        </div>
                        <img className="h-99 rounded-lg" src={banner} alt="about Us image" />
                    </div>
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Empowering you to Dance!</h2>
                                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">At Empire Dance Kenya, our mission is to empower individuals through the transformative power of dance. Since our founding in 2015, we have been dedicated to creating a space where people can express themselves, build confidence, and connect with others through the universal language of movement.</p>
                            </div>
                            <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                <div className="flex-col justify-start items-start inline-flex">
                                    <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">7+</h3>
                                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Years of Experience</h6>
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">60+</h4>
                                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Successful events</h6>
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">1000+</h4>
                                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Satisfied Clients</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/** Our Story section */}
            <div className="mx-auto mt-10 max-w-7xl lg:px-0 px-10 bg-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/** Our Story image */}
                    <div className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-xl mt-20">
                    <img
                        src={team} 
                        alt="Photo Thumbnail"
                        className="absolute inset-0 w-full rounded-lg h-full object-cover"
                    />
                    </div>
                    {/** Our Story text */}
                    <div className="flex flex-col justify-center mt-20">
                    <h2 className="text-6xl font-medium mb-4 dark:text-white">Our Story</h2>
                    <div className="mb-4 text-base text-white">
                    Empire Dance Kenya was founded in <span className="text-l text-orange-400">2015, almost a decade ago.</span> Our first members were dancers who had left a popular dance organization at that time called Sarakasi Dance Crew. Originally, we were known as <span className="text-orange-400 text-l">Kenya Dance Empire</span>, but we later changed our name to <span className="text-orange-400 text-l">Empire Dance Kenya,</span> inspired by the popular series <span className="italic">"Empire."</span>

                        We began teaching dance at Braeburn Academy before hosting our classes at AV Fitness, Pump Fitness, and ABC Place in Westlands, Nairobi. After seven years of hard work and dedication, we established our own studio on <span className="text-orange-400">February 16, 2024,</span> in Westlands. 

                        Our journey has been one of passion, resilience, and a commitment to the art of dance. We look forward to continuing to inspire and nurture dancers from all walks of life.
                    </div>
                    </div>
                </div>
            </div>
                 {/**Testimonials */}
        <Testimonials />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            href="/contact"
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
      < Footer className='bg-black'/>
        </>
        
    );
}
export default AboutPage;


