import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';
import AOS from 'aos';

// Local image imports
import sample from '../assets/sample.jpg';
import samson from '../assets/samson.webp';
import yoga from '../assets/yoga.jpg';
import james from '../assets/james.jpg';
import keii from '../assets/keii.jpg';
import sakwa from '../assets/sakwa.jpg';

const TeamMembers = [
  {
    name: "James Munge ",
    description: "James Munge is a founding member of EDK whose love and passion for dance began while in high school ",
    detailedInfo: "A founding member of EDK whose love and passion for dance began while in high school where he participated in and won various dance competitions.James joined the Sarakasi Trust in 2015 and honed both his dancing technique and choreography skills before moving on in 2016 to be part of the Kenya Dance Academy where his innate creativity led him to start developing his own choreographed routines alongside other dance instructors. Today he is a highly accomplished and professional Dancer, Choreographer, and Content Creator whose dance genre specialty is Dance Hall and Breakdancing.",
    image: james,
    linkedin: "",
    tiktok: "https://www.tiktok.com/@munge.dancer?lang=en",
    instagram: "https://www.instagram.com/munge.dancer/",
    youtube: "https://www.youtube.com/@munge1",
    twitter: "",
  },
  //add members with similar structure
  {
    name: "Joshua Yoga",
    description: "His love and passion for dance from a young age has always been the guiding force that ultimately led him to become one of the co-founding members of Empire Dance Kenya.",
    detailedInfo: "His love and passion for dance from a young age has always been the guiding force that ultimately led him to become one of the co-founding members of Empire Dance Kenya.From the young age of 13, the stage has always been his second home, and it is during his years in primary and secondary school that he developed his talent as a dancer through participating in numerous talent shows and workshops in his hometown of Mombasa. He later relocated to Nairobi in 2015 to join the Sarakasi Trust Dance Troupe where he honed his dancing skills and technique before joining the Kenya Dance Academy as dance choreographer in 2016, and ultimately starting EDK with his fellow friends.Today, Joshua is an accomplished and highly sought after Choreographer, Professional Dancer, Blogger, and Fitness Instructor and Model. His dance genre specialty includes Afro Beats and Pop-Locking.Under EDK, Joshua continues to indulge in his passion for dance and at the same time impact positive change in his clients lives through dance and fitness.",
    image: yoga,
    linkedin: "",
    tiktok: "https://www.tiktok.com/@yoga.man?lang=en",
    instagram: "https://www.instagram.com/joshua_yoga/",
    youtube: "https://www.youtube.com/@joshuayoga",
    twitter: "",
  },
  {
    name: "Samson Gome",
    description: "Samson Gome is a founding member of EDK whose passion for dance led him to become a member of the Sarakasi Dance Troupe from 2015 -2016  .",
    detailedInfo: "A founding member of EDK whose passion for dance led him to become a member of the Sarakasi Dance Troupe from 2015 -2016 during which he trained intensively in a variety of dance genres. He later moved on to join the Kenya Dance Academy as a dance choreographer where he sharpened both his choreography and instructor skills.Samson is a highly skilled dance instructor who has personally experienced how dance can enhance one’s overall confidence and discipline; how it can truly allow one to reconnect with one’s body, learn to take control of it, and move it creatively.",
    image: samson,
    linkedin: "#",
    tiktok: "https://www.tiktok.com/@gomesamson?lang=en",
    instagram: "https://www.instagram.com/gomesamson/",
    youtube: "https://www.youtube.com/@samsongome5676",
    twitter: "#",
  },
  {
    name: "Ben O. Sakwa",
    description: "Ben Sakwa Okech is one of the co-founders of Empire Dance Kenya (EDK)",
    detailedInfo: "Ben Sakwa Okech is one of the co-founders of Empire Dance Kenya (EDK). He discovered his love and passion for dance at the age of 8. His journey in the world of dance has seen him take part in various dance workshops and competitions in his Mombasa hometown as well as in the neighboring counties. He moved to Nairobi in 2015 to join the Sarakasi Trust Troupe where he polished his dancing skills and technique, before joining the Kenya Dance Academy in 2016 as a dance choreographer.Ben loves to create content and is very passionate about dance choreography. He is experienced in a wide variety of dance genres, specializing mainly in Hip-Hop, Dance Hall, Afro Beats, and Contemporary Dance.",
    image: sakwa,
    linkedin: "",
    tiktok: "",
    instagram: "https://www.instagram.com/brownianbenjamin/",
    youtube: "https://www.youtube.com/@brownianbenjamin273",
    twitter: "",
  },
  {
    name: "Joshua Odhiambo",
    description: "Joshua Othiambo was a friend to the founder of the crew.",
    detailedInfo: "He met the founders of Empire Dance Kenya in 2015 and a strong friendship developed. It is this friendship and love for immortalizing special moments on camera that has seen Joshua (Kei) become the go-to person for everything regarding photography and especially for captivating videos. His keen attention to detail enables him to capture the EDK journey in all its different and ever-changing phases, and he is the primary custodian of EDK’s Photo and Video Gallery.",
    image: keii,
    linkedin: "",
    tiktok: "https://www.tiktok.com/@keizzatt25flow?lang=en",
    instagram: "https://www.instagram.com/keizzatt25flow/",
    youtube: "",
    twitter: "",
  },

];
//creating a sate 
const Choreographers = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openModal = (member) => {
    setSelectedMember(member);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="w-full bg-black py-8">
      <div className='text-3xl text-white font-bold text-center'>Meet Our Choreographers</div>
      <div className="w-full container mx-auto px-4 sm:px-6 lg:px-0 py-6 flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {TeamMembers.map((member, index) => (
            <div key={index}>
              <div data-aos="zoom-out-down" id="scene" className="col-span-1 rounded-xl relative overflow-hidden min-h-[27rem] bg-top bg-cover bg-no-repeat group" style={{ backgroundImage: `url(${member.image})` }}>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black px-6 py-10 flex gap-2 flex-col">
                  <div className="text-lg font-bold text-white">{member.name}</div>
                  <div className="text-sm text-white hidden group-hover:block transition duration-200 ease-linear">
                    {member.description}
                  </div>
                  <div className="hidden group-hover:block transition duration-200 ease-linear">
                    <button onClick={() => openModal(member)} type="button" className="rounded-lg py-1.5 text-sm flex flex-row items-center gap-1 text-white">
                      View Details
                      <svg className="h-5 w-5 flex-none text-white transform -rotate-90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
            {/** dialogue box pop up */}
          {modalIsOpen && selectedMember && (
            <div className="fixed inset-0 z-30 flex items-end justify-center bg-black/10 mt-10 p-4 pb-8 backdrop-blur-md sm:items-center lg:p-8" role="dialog" aria-modal="true" aria-labelledby="defaultModalTitle" onClick={closeModal}>
              <div onClick={(e) => e.stopPropagation()} className="flex max-w-4xl flex-col gap-4 overflow-hidden rounded-xl border border-slate-300 bg-black text-white p-8">
                <div className="flex items-center justify-end bg-black ">
                  <button onClick={closeModal} aria-label="close modal" className="bg-black hover:bg-green/80 text-white rounded-full p-1 h-6 w-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor" fill="none" strokeWidth="2" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="bg-primary w-12 h-12 flex justify-center items-center rounded-full">
                    <svg className="w-6 h-6 stroke-current text-yellow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-primary ">{selectedMember.name}</div>
                  <div className="text-base font-normal text-primary">Choreographer</div>
                </div>
                <div className="mt-3 font-sans leading-6 text-sm newsarticle">
                  <p>{selectedMember.detailedInfo}</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a target="_blank" rel="noopener noreferrer" href={selectedMember.linkedin} className="transform hover:scale-110 transition-all duration-300 rounded-lg py-1.5 text-sm flex flex-row items-center gap-1">
                    <svg className="h-5 w-5 flex-none fill-current text-primary dark:text-white" viewBox="0 0 20 20" fill="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.417.75a1.833 1.833 0 0 1 1.833 1.833v12.834a1.833 1.833 0 0 1-1.833 1.833H2.583A1.833 1.833 0 0 1 .75 15.417V2.583A1.833 1.833 0 0 1 2.583.75h12.834Zm-.459 14.208V10.1a2.988 2.988 0 0 0-2.988-2.988c-.78 0-1.687.476-2.127 1.191V7.286H7.286v7.672h2.557V10.44a1.28 1.28 0 1 1 2.558 0v4.52h2.557ZM4.307 5.847a1.54 1.54 0 0 0 1.54-1.54c0-.853-.688-1.55-1.54-1.55a1.55 1.55 0 0 0-1.55 1.55c0 .852.697 1.54 1.55 1.54Zm1.274 9.111V7.286H3.04v7.672h2.54Z" />
                    </svg>
                    LinkedIn
                    <svg className="h-5 w-5 flex-none text-primary dark:text-white transform -rotate-90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={selectedMember.tiktok} className="transform hover:scale-110 transition-all duration-300 rounded-lg py-1.5 text-sm flex flex-row items-center gap-1">
                    <svg className="h-5 w-5 flex-none fill-current text-primary dark:text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 15.27V9.05a4.26 4.26 0 0 0 2.89 1.09v1.47a5.72 5.72 0 0 1-2.89-.8v6.46a3.26 3.26 0 1 1-3.25-3.25h.26v1.54h-.26a1.72 1.72 0 1 0 1.71 1.71Z" />
                    </svg>
                    TikTok
                    <svg className="h-5 w-5 flex-none text-primary dark:text-white transform -rotate-90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={selectedMember.instagram} className="transform hover:scale-110 transition-all duration-300 rounded-lg py-1.5 text-sm flex flex-row items-center gap-1">
                    <svg className="h-5 w-5 flex-none fill-current text-primary dark:text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.16c3.22 0 3.59.01 4.85.07 1.17.05 1.97.24 2.43.4.61.23 1.04.5 1.49.95.45.45.72.88.95 1.49.16.46.35 1.26.4 2.43.06 1.26.07 1.63.07 4.85s-.01 3.59-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.1 4.1 0 0 1-.95 1.49 4.1 4.1 0 0 1-1.49.95c-.46.16-1.26.35-2.43.4-1.26.06-1.63.07-4.85.07s-3.59-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.1 4.1 0 0 1-1.49-.95 4.1 4.1 0 0 1-.95-1.49c-.16-.46-.35-1.26-.4-2.43-.06-1.26-.07-1.63-.07-4.85s.01-3.59.07-4.85c.05-1.17.24-1.97.4-2.43a4.1 4.1 0 0 1 .95-1.49c.45-.45.88-.72 1.49-.95.46-.16 1.26-.35 2.43-.4C8.41 2.17 8.78 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.12 4.78.32 3.96.66 3.06 1.05 2.27 1.68 1.64 2.31 1.01 2.94.38 3.73 0 4.63.36 5.45.16 6.45.07 7.72.01 9 .01 9.42.01 12c0 2.58.01 3.01.07 4.28.09 1.27.29 2.27.66 3.09.39.9 1.02 1.69 1.65 2.32.63.63 1.42 1.26 2.32 1.65.82.37 1.82.57 3.09.66 1.27.06 1.7.07 4.28.07s3.01-.01 4.28-.07c1.27-.09 2.27-.29 3.09-.66.9-.39 1.69-1.02 2.32-1.65.63-.63 1.26-1.42 1.65-2.32.37-.82.57-1.82.66-3.09.06-1.27.07-1.7.07-4.28s-.01-3.01-.07-4.28c-.09-1.27-.29-2.27-.66-3.09a4.1 4.1 0 0 0-1.65-2.32 4.1 4.1 0 0 0-2.32-1.65c-.82-.37-1.82-.57-3.09-.66C15.01.01 14.58 0 12 0z" />
                      <path d="M12 5.84a6.16 6.16 0 1 0 0 12.32A6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.44-10.5a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                    </svg>
                    Instagram
                    <svg className="h-5 w-5 flex-none text-primary dark:text-white transform -rotate-90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={selectedMember.youtube} className="transform hover:scale-110 transition-all duration-300 rounded-lg py-1.5 text-sm flex flex-row items-center gap-1">
                    <svg className="h-5 w-5 flex-none fill-current text-primary dark:text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M23.49 6.68a3.06 3.06 0 0 0-2.16-2.16C19.69 4 12 4 12 4s-7.69 0-9.33.52A3.06 3.06 0 0 0 .51 6.68 31.17 31.17 0 0 0 0 12a31.17 31.17 0 0 0 .51 5.32 3.06 3.06 0 0 0 2.16 2.16C4.31 20 12 20 12 20s7.69 0 9.33-.52a3.06 3.06 0 0 0 2.16-2.16A31.17 31.17 0 0 0 24 12a31.17 31.17 0 0 0-.51-5.32Zm-14.6 8.59V8.73l6.28 3.27-6.28 3.27Z" />
                    </svg>
                    YouTube
                    <svg className="h-5 w-5 flex-none text-primary dark:text-white transform -rotate-90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Choreographers;
