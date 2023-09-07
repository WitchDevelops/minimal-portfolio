import React from "react";

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
  return (
    <div className="about">
      <header className="home__intro padding-2">
        <picture className="img-fluid w-100">
          <source srcSet={desktopImage1x} media="(min-width: 1440px)" />
          <source srcSet={desktopImage2x} media="(min-width: 1440px)" />
          <source srcSet={tabletImage1x} media="(min-width: 768px)" />
          <source srcSet={tabletImage2x} media="(min-width: 768px)" />
          <source srcSet={tabletImage2x} media="(min-width: 576px)" />

          <img
            src={mobileImage}
            alt="desktop showing a beautiful, clean webpage"
            decoding="async"
            className="w-100"
          />
        </picture>
        <div className="home__inset">
          <h1 className="section__header">
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>
          <a href="#about-me" className="button button--primary">
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
            <p className="button__text">about me</p>
          </a>
        </div>
      </header>
      <main className="padding-2">
        <section className="home__about-me" id="about-me">
          <picture className="about-me__picture col-md-5">
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

          <div className="home__about-me__rightCtn mt-md-0">
            <h2 className="section__header">About Me</h2>
            <p className="about-me__text">
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
            <a href="portfolio.html" className="button button--secondary">
              Go to Portfolio
            </a>
          </div>
        </section>

        <section className="home__contact">
          <h2 className="section__header col-md-6">
            Interested in doing a&nbsp;project together?
          </h2>
          <hr className="section__break section__break--3 d-none d-md-block" />
          <a href="portfolio.html" className="button button--secondary CTA">
            Contact me
          </a>
        </section>
      </main>
    </div>
  );
}

export default About;
