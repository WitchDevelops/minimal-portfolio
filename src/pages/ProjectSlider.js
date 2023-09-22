import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projectsData.js";

function ProjectSlider() {
    const { projectId } = useParams();
    const project = projects.find((p) => p.id === projectId);
  
    if (!project) {
      return <div>Project not found</div>;
    }
  
    return (
      <div>
        {/* Render your project slider here using project data */}
        <h1>{project.title} Slider</h1>
        {/* Add slider and buttons here */}
      </div>
    );
  }
  
  export default ProjectSlider;