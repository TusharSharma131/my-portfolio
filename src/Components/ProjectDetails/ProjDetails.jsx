import React from "react";
import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";

const index = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-70 flex items-start justify-center overflow-y-scroll transition duration-500 ease">
        <div className="max-w-2xl w-full rounded-lg mx-6 my-12 bg-gray-900 text-gray-100 p-6 relative">
          <CloseRounded
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <img
            src={project?.image}
            className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
            alt="Project"
          />
          <h1 className="text-2xl font-semibold mb-2">{project?.title}</h1>
          <p className="text-sm font-medium text-gray-300 mb-2">
            {project.date}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project?.tags.map((tag, index) => (
              <div
                key={index}
                className="text-xs font-semibold text-black bg-white px-2 py-1 rounded-xl"
              >
                {tag}
              </div>
            ))}
          </div>
          <p className="text-base font-normal text-gray-100 mb-6">
            {project?.description}
          </p>
          {project.member && (
            <>
              <h2 className="text-lg font-semibold mb-2">Members</h2>
              <div className="flex flex-col gap-2">
                {project?.member.map((member, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img
                      src={member.img}
                      className="w-12 h-12 rounded-full object-cover shadow-md"
                      alt="Member"
                    />
                    <div className="flex items-center gap-2">
                      <p className="text-base font-semibold">{member.name}</p>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHub className="ml-8 w-6 h-6 text-white transform transition-all duration-300 hover:text-blue-400 hover:scale-125" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedIn className="ml-1 w-6 h-6 text-white transform transition-all duration-300 hover:text-blue-400 hover:scale-125" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="mt-9 grid grid-cols-2 justify-end gap-4">
            <a
              href={project?.github}
              className="text-base text-center font-bold py-2 px-4 rounded-xl bg-purple-600 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
            <a
              href={project?.webapp}
              className="text-base text-center font-bold py-2 px-4 rounded-xl bg-purple-600 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live App
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default index;
