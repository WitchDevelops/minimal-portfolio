import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./About.module.css";

import desktopImage1x from "../assets/images/homepage/desktop/image-homepage-hero.jpg";
import desktopImage2x from "../assets/images/homepage/desktop/image-homepage-hero@2x.jpg";
import tabletImage1x from "../assets/images/homepage/tablet/image-homepage-hero.jpg";
import tabletImage2x from "../assets/images/homepage/tablet/image-homepage-hero@2x.jpg";
import mobileImage from "../assets/images/homepage/mobile/image-homepage-hero.jpg";
import desktopProfileImage1x from "../assets/images/homepage/desktop/image-homepage-profile.jpg";
import desktopProfileImage2x from "../assets/images/homepage/desktop/image-homepage-profile@2x.jpg";
import tabletProfileImage1x from "../assets/images/homepage/tablet/image-homepage-profile.jpg";
import tabletProfileImage2x from "../assets/images/homepage/tablet/image-homepage-profile@2x.jpg";
import mobileProfileImage2x from "../assets/images/homepage/mobile/image-homepage-profile@2x.jpg";
import mobileProfileImage from "../assets/images/homepage/mobile/image-homepage-profile.jpg";

function About() {
  const navigate = useNavigate();
  const handlePortfolioLinkClick = () => {
    window.scrollTo(0,0);
    navigate("/portfolio");
  }
  return (
    <div className={styles.about}>
      <header className={`${styles.home__intro} ${styles.padding_2}`}>
        <picture className={`${styles.img_fluid} ${styles.w_100} `}>
          <source srcSet={desktopImage1x} media="(min-width: 1440px)" />
          <source srcSet={desktopImage2x} media="(min-width: 1440px)" />
          <source srcSet={tabletImage1x} media="(min-width: 768px)" />
          <source srcSet={tabletImage2x} media="(min-width: 768px)" />
          <source srcSet={tabletImage2x} media="(min-width: 576px)" />

          <img
            src={mobileImage}
            alt="desktop showing a beautiful, clean webpage"
            decoding="async"
            className={styles.w_100}
          />
        </picture>
        <div className={styles.home__inset}>
          <h1 className={styles.home__header}>
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>
          <a
            href="#about-me"
            className={`${styles.button} ${styles.button_primary}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <g id="Group 6">
                <rect
                  id="Rectangle Copy 3"
                  opacity="0.1"
                  width="48"
                  height="48"
                  fill="black"
                />
                <g id="Group 3">
                  <path
                    id="Path 6"
                    d="M16 26L24 30L32 26"
                    stroke="#5FB4A2"
                    fill="none"
                  />
                  <path
                    id="Path 6 Copy"
                    opacity="0.5"
                    d="M16 22L24 26L32 22"
                    stroke="#5FB4A2"
                    fill="none"
                  />
                  <path
                    id="Path 6 Copy 2"
                    opacity="0.25"
                    d="M16 18L24 22L32 18"
                    stroke="#5FB4A2"
                    fill="none"
                  />
                </g>
              </g>
            </svg>
            <p className={styles.button__text}>about me</p>
          </a>
        </div>
      </header>
      <main className={styles.padding_2}>
        <section className={styles.home__about} id="about-me">
          <picture className={`${styles.about__picture} ${styles.col_md_5} `} loading="lazy">
            <source
              srcSet={desktopProfileImage1x}
              media="(min-width: 1440px)"
            />
            <source
              srcSet={desktopProfileImage2x}
              media="(min-width: 1440px)"
            />
            <source srcSet={tabletProfileImage1x} media="(min-width: 768px)" />
            <source srcSet={tabletProfileImage2x} media="(min-width: 768px)" />
            <source srcSet={mobileProfileImage2x} media="(min-width: 576px)" />

            <img
              src={mobileProfileImage}
              alt="right profile of a white man in blazer"
            />
          </picture>

          <div className={`${styles.home__about__rightCtn} ${styles.mt_md_0}`}>
            <h2 className={styles.section__header}>About Me</h2>
            <p className={styles.about__text}>
              I’m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I’m based in London, UK, but I’m happy working
              remotely and have experience in remote teams. When I’m not coding,
              you’ll find me outdoors. I love being out in nature whether that’s
              going for a walk, run or cycling. I’d love you to check out my
              work.
            </p>
            <Link
              as={Link}
              to="/portfolio"
              onClick={handlePortfolioLinkClick}
              className={`${styles.button} ${styles.button_secondary}`}
            >
              Go to Portfolio
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
