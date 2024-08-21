import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Correct import statement

import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 bg-white mt-6 lg:px-8">
            <div className="max-w-3xl mt-2 mx-auto">
                <Link to="/" className="flex text-black justify-center">
                    <img className="h-16 w-auto" src={logo} alt="Your Company" />
                </Link>
                <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
                    <li><Link to="/about" className="text-black hover:text-orange-400">About Us</Link></li>
                    <li><Link to="/classes" className="text-black hover:text-orange-400">Our Classes</Link></li>
                    <li><Link to="/services" className="text-black hover:text-orange-400">Our Services</Link></li>
                    <li><Link to="/bookings" className="text-black hover:text-orange-400">Bookings</Link></li>
                    <li><Link to="/contact" className="text-black hover:text-orange-400">Contact Us</Link></li>
                </ul>
                {/** Social Media Icons */}
                <div className="flex space-x-10 justify-center items-center mb-14">
                    {/** twitter */}
                    <a href="https://www.linkedin.com/company/empire-dance-kenya" className="block text-black transition-all duration-500 hover:text-orange-600">
                        <svg className="w-[1.688rem] h-[1.688rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                            <path d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="currentColor" />
                        </svg>
                    </a>
                    {/** instagram */}
                    <a href="https://www.instagram.com/empiredancekenya/" className="block text-black transition-all duration-500 hover:text-orange-600">
                        <svg className="w-[1.688rem] h-[1.688rem]" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.76556 14.8811C9.76556 12.3243 11.8389 10.2511 14.3972 10.2511C16.9555 10.2511 19.03 12.3243 19.03 14.8811C19.03 17.4379 16.9555 19.5111 14.3972 19.5111C11.8389 19.5111 9.76556 17.4379 9.76556 14.8811ZM7.26117 14.8811C7.26117 18.82 10.456 22.0129 14.3972 22.0129C18.3385 22.0129 21.5333 18.82 21.5333 14.8811C21.5333 10.9422 18.3385 7.7493 14.3972 7.7493C10.456 7.7493 7.26117 10.9422 7.26117 14.8811ZM20.1481 7.46652C20.148 7.79616 20.2457 8.11843 20.4288 8.39258C20.6119 8.66674 20.8723 8.88046 21.177 9.00673C21.4817 9.133 21.8169 9.16614 22.1405 9.10196C22.464 9.03778 22.7612 8.87916 22.9945 8.64617C23.2278 8.41318 23.3868 8.11627 23.4513 7.79299C23.5157 7.46972 23.4829 7.13459 23.3568 6.83C23.2307 6.5254 23.017 6.26502 22.7428 6.08178C22.4687 5.89853 22.1463 5.80065 21.8164 5.80052H21.8158C21.3737 5.80073 20.9497 5.9763 20.637 6.28867C20.3243 6.60104 20.1485 7.02467 20.1481 7.46652ZM8.78274 26.1863C7.42782 26.1246 6.69138 25.8991 6.20197 25.7085C5.55314 25.4561 5.0902 25.1554 4.60346 24.6696C4.11672 24.1839 3.81543 23.7216 3.56395 23.0732C3.37317 22.5843 3.14748 21.8481 3.08588 20.494C3.01851 19.03 3.00506 18.5902 3.00506 14.8812C3.00506 11.1722 3.01962 10.7336 3.08588 9.26841C3.14759 7.9143 3.37495 7.17952 3.56395 6.68919C3.81654 6.04074 4.11739 5.57808 4.60346 5.09163C5.08953 4.60519 5.55203 4.30408 6.20197 4.05274C6.69116 3.86208 7.42782 3.63652 8.78274 3.57497C10.2476 3.50763 10.6877 3.49419 14.3972 3.49419C18.1068 3.49419 18.5473 3.50874 20.0134 3.57497C21.3683 3.63663 22.1035 3.86385 22.5941 4.05274C23.243 4.30408 23.7059 4.60585 24.1926 5.09163C24.6794 5.57741 24.9796 6.04074 25.2322 6.68919C25.4229 7.17808 25.6486 7.9143 25.7102 9.26841C25.7776 10.7336 25.7911 11.1722 25.7911 14.8812C25.7911 18.5902 25.7776 19.0287 25.7102 20.494C25.6485 21.8481 25.4217 22.5841 25.2322 23.0732C24.9796 23.7216 24.6787 24.1843 24.1926 24.6696C23.7066 25.155 23.243 25.4561 22.5941 25.7085C22.105 25.8992 21.3683 26.1247 20.0134 26.1863C18.5485 26.2536 18.1084 26.2671 14.3972 26.2671C10.686 26.2671 10.2472 26.2536 8.78274 26.1863ZM8.66768 1.0763C7.24603 1.13847 6.38147 1.35997 5.63035 1.6637C4.81938 1.99336 4.11568 2.46666 3.45764 3.1249C2.79961 3.78313 2.32629 4.48683 1.99664 5.2978C1.69291 6.04891 1.47142 6.91348 1.40925 8.33514C1.34142 9.80109 1.32812 10.2405 1.32812 14.8812C1.32812 19.5219 1.34158 19.9613 1.40925 21.4273C1.47142 22.849 1.69319 23.7135 1.99692 24.4646C2.32712 25.2756 2.79961 25.9793 3.45764 26.6375C4.11568 27.2957 4.81938 27.769 5.63035 28.0987C6.38147 28.4024 7.24603 28.6239 8.66768 28.686C10.134 28.7534 10.5735 28.7666 14.3972 28.7666C18.2209 28.7666 18.6604 28.7534 20.1267 28.686C21.5483 28.6238 22.4129 28.4024 23.164 28.0987C23.9749 27.769 24.6786 27.2957 25.3369 26.6375C25.9949 25.9793 26.4682 25.2756 26.7984 24.4646C27.1021 23.7135 27.3236 22.849 27.3858 21.4273C27.4532 19.9613 27.4667 19.5219 27.4667 14.8812C27.4667 10.2405 27.4534 9.80109 27.3858 8.33514C27.3236 6.91348 27.1021 6.04891 26.7984 5.2978C26.4682 4.48683 25.9957 3.78313 25.3369 3.1249C24.6786 2.46666 23.9749 1.99336 23.164 1.6637C22.4129 1.35997 21.5483 1.13847 20.1267 1.0763C18.6604 1.00914 18.2209 0.99585 14.3972 0.99585C10.5735 0.99585 10.134 1.00914 8.66768 1.0763Z" fill="currentColor" />
                        </svg>
                    </a>
                    {/** Youtube */}
                    <a href="https://www.youtube.com/@empiredancekenya7242" className="block  text-black transition-all duration-500 hover:text-orange-600 ">
                            <svg className="w-[1.875rem] h-[1.375rem]" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3106 1.27838C27.5782 1.62071 28.5745 2.61957 28.9113 3.88573C29.524 6.18356 29.524 10.9809 29.524 10.9809C29.524 10.9809 29.524 15.7782 28.9113 18.076C28.5698 19.3469 27.5735 20.3457 26.3106 20.6834C24.0186 21.2977 14.8226 21.2977 14.8226 21.2977C14.8226 21.2977 5.63122 21.2977 3.33456 20.6834C2.06695 20.3411 1.07063 19.3422 0.73385 18.076C0.121094 15.7782 0.121094 10.9809 0.121094 10.9809C0.121094 10.9809 0.121094 6.18356 0.73385 3.88573C1.07531 2.61488 2.07162 1.61602 3.33456 1.27838C5.63122 0.664062 14.8226 0.664062 14.8226 0.664062C14.8226 0.664062 24.0186 0.664062 26.3106 1.27838ZM19.5234 10.9809L11.885 15.403V6.55872L19.5234 10.9809Z" fill="currentColor"/>
                                </svg>
                     </a>
                    {/** Facebook */}
                     <a href='https://www.facebook.com/dopesana' className="block  text-black transition-all duration-500 hover:text-orange-600 ">
                            <svg className="w-[0.938rem] h-[1.625rem]" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7926 14.4697L14.5174 9.86889H10.0528V6.87836C10.0528 5.62033 10.6761 4.39105 12.6692 4.39105H14.7275V0.473179C13.5289 0.282204 12.3177 0.178886 11.1037 0.164062C7.42917 0.164062 5.0302 2.37101 5.0302 6.36077V9.86889H0.957031V14.4697H5.0302V25.5979H10.0528V14.4697H13.7926Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                </div>
                <p className="text-center mb-2 text-sm text-black">&copy; 2024. Empire Dance Kenya. All rights reserved.</p>
                <p className="text-center mb-8 text-xs text-black"> Developed by <a href="https://github.com/TheMunene" target={'_blank'} rel="nooppener noreferrer" className="text-black font-semibold hover:text-orange-400">Josphat Munene</a> </p>
            </div>
        </div>
    );
};

export default Footer;
