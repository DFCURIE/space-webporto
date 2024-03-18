import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center py-20" id="projects">
      <h1 className="text-4xl font-semibold text-white mb-10">My Projects</h1>
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-10 px-5 md:px-0">
        <ProjectCard
          src="/wip.jpg"
          title="Project 1 Title"
          description="Project 1 Description"
        />
        <ProjectCard
          src="/wip.jpg"
          title="Project 2 Title"
          description="Project 2 Description"
        />
        <ProjectCard
          src="/wip.jpg"
          title="Project 3 Title"
          description="Project 3 Description"
        />
      </div>
    </div>
  );
};

export default Projects;
