import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projectsData.js";
import styles from "./ProjectSlider.module.css";

function ProjectSlider() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const initialProjectIndex = projects.findIndex(
    (project) => project.id === projectId
  );
  const [currentProjectIndex, setCurrentProjectIndex] =
    useState(initialProjectIndex);

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
  const previousProjectIndex =
    (currentProjectIndex - 1 + projects.length) % projects.length;
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
      <div className={styles.nav_btns_wrapper}>
        <button className={styles.nav_btn} onClick={() => goToProject(previousProjectIndex)}>
          <svg
            className={styles.nav_arrow}
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
          >
            <path d="M9 1L1 9L9 17" stroke="#33323D" />
          </svg>
          <p className={styles.btn_title}>
            {previousProject.title}
          </p>
          
          <p className={styles.btn_nav_txt}>Previous Project</p>
        </button>
        <button className={styles.nav_btn} onClick={() => goToProject(nextProjectIndex)}>
          <svg
            className={styles.nav_arrow}
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
          >
            <path d="M1 1L9 9L1 17" stroke="#33323D" />
          </svg>
          <p className={styles.btn_title}>{nextProject.title}</p>
          <p className={styles.btn_nav_txt}>Next Project</p>
        </button>
      </div>
    </div>
  );
}

export default ProjectSlider;
