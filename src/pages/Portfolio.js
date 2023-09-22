import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projectsData.js";
import styles from "./Portfolio.module.css";


function Project({
  title,
  description,
  path,
  desktop,
  tablet,
  mobile,
  imageUrl,
  alt,
}) {
  return (
    <div className={`${styles.project}`}>
      <picture className={`${styles.col_md_5} ${styles.project_img}`}>
        <source srcset={desktop} media="(min-width: 768px)" />
        <source srcset={tablet} media="(min-width: 576px)" />
        <source srcset={mobile} media="(max-width: 575px)" />
        <img src={imageUrl} alt={alt} />
      </picture>
      <div className={styles.project_card_wrapper}>
        <article className={styles.project_card}>
          <h2 className={styles.section__header}>{title}</h2>
        <p className={styles.section__text}>{description}</p>
        <Link
          to={`${path}`}
          className={`${styles.button} ${styles.button_secondary}`}
        >
          view project
        </Link>
      </article>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <section className="portfolio">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;
