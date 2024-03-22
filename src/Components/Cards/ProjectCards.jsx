import React from "react";

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <div
      onClick={() => setOpenModal({ state: true, project: project })}
      className="w-80 h-50 bg-black cursor-pointer rounded-xl shadow shadow-white overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-6 hover:shadow-xl"
    >
      <img
        src={project.image}
        className="w-full h-48 object-cover rounded-t-xl"
        alt="Project"
      />
      <div className="flex flex-wrap gap-2 justify-center items-center px-4 py-5">
        {project.tags?.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-semibold text-black bg-white px-2 py-1 rounded-xl"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-300 overflow-hidden overflow-ellipsis whitespace-nowrap">
          {project.title}
        </h2>
        <p className="text-xs text-gray-300 mt-1">{project.date}</p>
        <p className="text-sm text-gray-300 mt-2 line-clamp-3">
          {project.description}
        </p>
      </div>
      {/* Especially I made for members */}

      {/* <div className="flex items-center pl-4 py-4">
          {project.member?.map((member, index) => (
            <img key={index} src={member.img} className="w-9 h-9 rounded-full -ml-3 bg-white shadow-sm" alt="Member" />
          ))}
        </div> */}
      {/* <button className="w-full py-2 bg-white text-black text-sm font-semibold uppercase mt-auto transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none">View Project</button> */}
    </div>
  );
};

export default ProjectCards;
