import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectsData.js";
import styles from "./Portfolio.module.css";


function Portfolio() {
  return (
    <section className={styles.portfolio}>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;
