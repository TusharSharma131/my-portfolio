import React from "react";
import ProjectCards from "../Cards/ProjectCards";
import { projects } from "../../data/stuff";

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <div
      id="projects"
      className="bg-gradient-to-br from-primary-light to-primary-dark py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mt-16 text-4xl font-bold text-center text-white mb-4">
          Projects
        </h1>
        <p className="text-lg text-center text-white mb-8">
        I have dedicated my time to developing various web applications, primarily focusing on frontend development with some backend involvement. Here are some of my projects.
        </p>
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-center text-white my-4">
              My Web Applications
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => (
            <ProjectCards
              key={index}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
