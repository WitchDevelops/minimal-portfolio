import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projectsData.js";

function ProjectSlider() {
    const { projectId } = useParams();
    const navigate = useNavigate();
  
    const initialProjectIndex = projects.findIndex((project) => project.id === projectId);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(initialProjectIndex);
  
    const goToProject = (index) => {
      const project = projects[index];
      setCurrentProjectIndex(index);
      navigate(`/portfolio/${project.id}`);
    };
  
    useEffect(() => {
      setCurrentProjectIndex(initialProjectIndex);
      window.scrollTo(0, 0);
    }, [projectId, initialProjectIndex]);
  
    const currentProject = projects[currentProjectIndex];
    const previousProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    const nextProjectIndex = (currentProjectIndex + 1) % projects.length;
    const previousProject = projects[previousProjectIndex];
    const nextProject = projects[nextProjectIndex];
  
    if (!currentProject) {
      return <div>Project not found</div>;
    }
  
    return (
      <div>
        <h1>{currentProject.title}</h1>
        
        {/* Add content specific to the current project */}
        <p>{currentProject.description}</p>
        <img src={currentProject.imageUrl} alt={currentProject.alt} />
  
        {/* Buttons for Previous and Next Project */}
        <div>
          <button onClick={() => goToProject(previousProjectIndex)}>
            &larr; {previousProject.title}
            <span>Previous Project</span>
          </button>
          <button onClick={() => goToProject(nextProjectIndex)}>
            {nextProject.title} &rarr;
            <span>Next Project</span>
          </button>
        </div>
      </div>
    );
  }
  
  export default ProjectSlider;
