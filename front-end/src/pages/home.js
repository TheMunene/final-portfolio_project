import React, { useState } from 'react';
import CustomerCards from '../components/cards';
import Choreographers from '../components/team';
import PartnersSection from '../components/Partners';
import Footer from '../components/Footer';
//asset imports
import studio from '../assets/studio.jpg';
import sample from '../assets/sample.jpg';
import home from '../assets/home.webp';
import class1 from '../assets/class1.jpg';

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <img className="w-full" src={home} alt="Navigation Image" />
      <div className="absolute top-1/2 left-1/5 transform -translate-x-1/5 -translate-y-1/5 text-left  text-white">
        <h1 className="text-4xl text-white  font-bold"></h1>
        <p className="mt-2 text-lg"><span className="font-bold"></span></p>
      </div>
        {/** start of about empire dance kenya section */}
      <div className="mx-auto max-w-7xl  lg:px-0 px-10">
        <div className="grid grid-cols-1 mt-0 md:grid-cols-2 gap-20">
            {/** video column */}
          <div className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-xl mt-10">
            <img src={sample} alt="Video Thumbnail" className="absolute inset-0 w-full rounded-lg h-full object-cover cursor-pointer" />
            <button onClick={() => setModalIsOpen(true)} className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 cursor-pointer z-10">
              <svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5692 0.333374C25.8152 0.340374 28.9325 0.370707 32.2458 0.503707L33.4218 0.55504C36.7562 0.711374 40.0882 0.98204 41.7425 1.44171C43.9475 2.06237 45.6788 3.86837 46.2645 6.15971C47.1978 9.79971 47.3145 16.8977 47.3285 18.6174L47.3308 18.972V19.378C47.3145 21.0977 47.1978 28.198 46.2645 31.8357C45.6718 34.134 43.9382 35.9424 41.7425 36.5537C40.0882 37.0134 36.7562 37.284 33.4218 37.4404L32.2458 37.494C28.9325 37.6247 25.8152 37.6574 24.5692 37.662L24.0208 37.6644H23.4258C20.7892 37.648 9.76184 37.529 6.2525 36.5537C4.04984 35.933 2.31617 34.127 1.7305 31.8357C0.797171 28.1957 0.680504 21.0977 0.666504 19.378V18.6174C0.680504 16.8977 0.797171 9.79737 1.7305 6.15971C2.32317 3.86137 4.05684 2.05304 6.25484 1.44404C9.76184 0.466374 20.7915 0.347374 23.4282 0.333374H24.5692ZM19.3308 10.8334V27.1667L33.3308 19L19.3308 10.8334Z" fill="#FAFAFA"></path>
              </svg>
            </button>
          </div>
            {/** text column */}
          <div className="flex flex-col justify-center mt-10">
            <h2 className="text-4xl font-bold mb-4 dark:text-black">Why Empire Dance Kenya?</h2>
            <div className="mb-4 text-base text-black">
              Dance traverses generational, economic, cultural, and social spectra and is an obvious tool to achieve consensus and connectivity across all divides. Having recognized this truth, Empire Dance Kenya understands and works to offer solutions to the challenges presenting in the diverse spectra through dance; the world of dance is a peaceful one.
            </div>
            <a href="/about" className="text-white w-40 bg-black mt-4 focus:ring-4 focus:outline-none focus:ring-gray-100 font-normal rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center hover:bg-orange-400">
              <span className="mr-2">Read More</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
              </svg>
            </a>
          </div>
          {modalIsOpen &&(
            <div
            className="fixed inset-0 z-30 flex items-end justify-center bg-black/20 p-4 pb-8 backdrop-blur-md sm:items-center lg:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="defaultModalTitle"
            onClick={() => setModalIsOpen(false)}
          >
            <div
              className="flex w-full max-w-3xl flex-col gap-4 rounded-xl border border-slate-300 bg-white text-black relative overflow-visible"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -top-4 -right-5 w-8 h-8 z-20 bg-brandyellow rounded-md flex items-center justify-center">
                <button
                  onClick={() => setModalIsOpen(false)}
                  aria-label="close modal"
                  className="active:border-none focus:border-none"
                >
                  <svg
                    className="text-white fill-black w-8 h-10 ml-2 mt-"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="w-full relative">
                <iframe
                  className="rounded-xl"
                  width="100%"
                  height="450px"
                  src="https://youtube.com/embed/84S0sD3tJk4"
                  title="Pika na Power - Electric pressure cooker (EPC)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
      {/** End of about empire dance kenya section  */}
      <div className='mt-8'>
        <p className='text-4xl font-bold mb-4 dark:text-black text-center'>What We Do</p>
      </div>
      <CustomerCards activeTab={activeTab} />
      <div className="border-b border-black mt-8"></div>
      <div style={{ height: '380px' }} className="mx-auto max-w-7xl lg:px-0 px-10 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-xl mt-20">
            <img src={class1} alt="Photo Thumbnail" className="absolute inset-0 w-full rounded-lg h-full object-cover" />
          </div>
            {/** our classes section */}
          <div className="flex flex-col justify-center mt-20">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Our Classes</h2>
            <div className="mb-4 text-base text-white">
              Dance traverses generational, economic, cultural, and social spectra and is an obvious tool to achieve consensus and connectivity across all divides. Having recognized this truth, Empire Dance Kenya understands and works to offer solutions to the challenges presenting in the diverse spectra through dance; the world of dance is a peaceful one.
            </div>
            <a href="/classes" className="text-black w-40 bg-white mt-4 focus:ring-4 focus:outline-none focus:ring-grey-100 font-normal rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center hover:bg-orange-400">
              <span className="mr-2">View Plans</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl lg:px-0 mt-5 px-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center mt-20 order-last md:order-first ml-1">
            <h2 className="text-4xl font-bold mb-4 dark:text-black">Our Studio</h2>
            <div className="mb-4 text-base text-black">
              Dance traverses generational, economic, cultural, and social spectra and is an obvious tool to achieve consensus and connectivity across all divides. Having recognized this truth, Empire Dance Kenya understands and works to offer solutions to the challenges presenting in the diverse spectra through dance; the world of dance is a peaceful one.
            </div>
            <a href="/bookings" className="text-white w-40 bg-black mt-4 focus:ring-4 focus:outline-none focus:ring-grey-100 font-normal rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center ml-1 hover:bg-orange-400">
              <span className="mr-2">Book Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
              </svg>
            </a>
          </div>
          <div className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-xl mt-20 md:mt-0">
            <img src={studio} alt="Photo Thumbnail" className="absolute inset-0 w-full rounded-lg h-full object-cover" />
          </div>
        </div>
      </div>
      <Choreographers />
      <PartnersSection />  
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
      <Footer />
    </div>
  );
};

export default Home;