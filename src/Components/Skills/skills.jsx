import React from "react";
import "../../App.css";
import { useState, useEffect } from "react";
import { skills } from "../../data/stuff";

const Skills = () => {
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
    <div
      id="skills"
      className={`flex flex-col justify-center items-center relative z-1 ${
        isVisible ? "animate-scale-in" : ""
      }`}
    >
      <div className="flex justify-between items-center flex-col relative w-full max-w-1100 gap-12">
        <div className="font-bold text-4xl text-center mt-20 md:mt-12 text-white">
          Skills
        </div>
        <div className="mx-3 text-center text-white text-xl font-bold">
          Here are some of my skills on which I have been working on during my
          college time.
        </div>
        <div className="w-4/5 flex flex-wrap justify-center mt-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-full max-w-600 bg-gray-900 border-2 border-purple-600 transform transition-all duration-500 hover:scale-110 rounded-xl py-6 md:p-4"
            >
              <h2 className="bg-gray-300 text-2xl font-semibold mb-4 text-center">
                {skill.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-5">
                {skill.skills.map((item, idx) => (
                  <div
                    key={idx}
                    className="text-white text-base border border-purple-600 rounded-md py-2 px-4 flex items-center gap-2 shadow shadow-orange-50"
                  >
                    <img
                      src={item.image}
                      alt="Skill Icon"
                      className="w-7 h-7"
                    />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
