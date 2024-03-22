import React, { useState, useEffect } from 'react';
import { education } from '../../data/stuff';
import EducationCard from '../Cards/EducationCards';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="education" className={`flex flex-col relative z-10 ${isVisible ? "animate-scale-in" : ""}`}>
      <div className="max-w-7xl w-full px-4 md:px-0 py-12 ">
        <h1 className="mt-6 text-4xl text-white font-bold text-center mb-4">
          Education
        </h1>
        <p className="text-lg text-white text-center mb-8 lg:mb-12">
        My education has been an incredible journey of self-discovery and progress. My educational details are as follows.
        </p>
        <div className="max-w-6xl w-full  lg:mx-24 ">
          {education.map((edu, index) => (
             <div key={index} className={`flex ${index % 2 === 0 ? 'justify-center md:justify-center lg:justify-start' : 'justify-center md:justify-center lg:justify-end'} my-7 transform transition-all duration-300 hover: translate-x-5`}>
              <EducationCard education={edu} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;