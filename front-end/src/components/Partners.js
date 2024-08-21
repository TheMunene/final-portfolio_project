import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sample from '../assets/sample.jpg'
import britam from '../assets/britam.webp';
import mydawa from '../assets/mydawa.png';
import pakakumi from '../assets/pakakumi.png';
import bio  from '../assets/bio.jpeg';
import forest from '../assets/forest.png';
import piea from '../assets/piea.png';
import stanbic from '../assets/stanbic.jpg';
import vivo from '../assets/vivo.png';
import tropical from '../assets/tropical.webp';
import ketraco from '../assets/ketraco.jpg';
import decathlon from '../assets/decathlon.webp';
import harriets from '../assets/harriets.png';



const partners = [
  {
    img:  britam,
    alt: ''
  },
  {
    img: mydawa,
    alt: ''
  },
  {
    img: piea,
    alt: ''
  },
  {
    img: bio,
    alt: ''
  },
  {
    img: forest,
    alt: ''
  },
  {
    img: pakakumi,
    alt: ''
  },
  {
    img: stanbic,
    alt: ''
  },
  {
    img: vivo,
    alt: ''
  },
  {
    img: tropical,
    alt: ''
  },
  {
    img: ketraco,
    alt: ''
  },
  {
    img: harriets,
    alt:''
  },
  {
    img: decathlon,
    alt:''
  }
 
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const PartnersSection = () => {
  return (
    <div className="mx-auto max-w-6xl lg:px-0 px-10 bg-white pb-10">
      <div className="flex flex-wrap justify-start items-center -left-20 -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <h2 className="text-3xl lg:text-4xl my-6 font-bold lg:py-0">
            Brands we have worked with
          </h2>
        </div>
      </div>

      <Slider {...settings}>
        {partners.map((partner, index) => (
          <div key={index} className="item gap-x-8">
            <div className="border-2 rounded-lg border-gray-300 bg-white p-4 text-center hover:border-black">
              <img src={partner.img} className="h-28 object-contain mx-auto" alt={partner.alt} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersSection;
