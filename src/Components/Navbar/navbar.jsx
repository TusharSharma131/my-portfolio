import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { FaBars, FaTimes } from "react-icons/fa";
import { Bio } from "../../data/stuff";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20 sm:ml-20">
          <NavLink to="/" className="flex items-center text-white">
            <DiCssdeck size="3rem" />{" "}
            <span className="font-bold text-xl ml-2 hover:text-red-600 transition-all hover:text-2xl hover: transform duration-300">
              Portfolio
            </span>
          </NavLink>
          <div>
            <button
              className="flex text-3xl md:hidden cursor-pointer text-white justify-end"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <ul className="hidden md:flex items-center space-x-8">
              <li>
                <a
                  href="#about"
                  className="text-white font-medium hover:text-blue-500 
            hover:text-lg transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-white font-medium hover:text-blue-500 hover:text-lg transition-all duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white font-medium hover:text-blue-500 hover:text-lg transition-all duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-white font-medium hover:text-blue-500  hover:text-lg transition-all duration-300"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white font-medium hover:text-blue-500 hover:text-lg transition-all duration-300"
                >
                  Contact
                </a>
              </li>
              <a
                href={Bio.github} target="_blank"
                className="hidden md:block px-4 py-2 border border-indigo-500 text-white font-bold rounded-xl transition-all duration-300 hover:bg-purple-600 hover:text-white hover:text-lg hover:translate-x-3"
              >
                Github Profile
              </a>
            </ul>
          </div>
        </div>

        {isOpen && (
          <div className="container mx-auto md:hidden">
            <ul className="flex flex-col space-y-4 items-center mt-4">
              <li>
                <a
                  href="#about"
                  className="text-white font-medium hover:text-blue-500"
                >
                  {" "}
                  About{" "}
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-white font-medium hover:text-blue-500"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white font-medium hover:text-blue-500"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-white font-medium hover:text-blue-500"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white font-medium hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
              <a
                href={Bio.github}
                target="_blank"
                className="border-2 border-indigo-600 flex justify-center items-center max-h-14  px-4 rounded-full font-semibold text-indigo-600 hover:bg-purple-600 hover:text-white transition-all duration-500 ease-in-out"
              >
                Github Profile
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
