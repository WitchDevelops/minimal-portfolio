import desktopManage2x from "../assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg";
import tabletManage from "../assets/images/portfolio/tablet/image-portfolio-manage.jpg";
import mobileManage from "../assets/images/portfolio/mobile/image-portfolio-manage.jpg";

import desktopBookmark2x from "../assets/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg";
import tabletBookmark from "../assets/images/portfolio/tablet/image-portfolio-bookmark.jpg";
import mobileBookmark from "../assets/images/portfolio/mobile/image-portfolio-bookmark.jpg";

import desktopInsure2x from "../assets/images/portfolio/desktop/image-portfolio-insure@2x.jpg";
import tabletInsure from "../assets/images/portfolio/tablet/image-portfolio-insure.jpg";
import mobileInsure from "../assets/images/portfolio/mobile/image-portfolio-insure.jpg";

import desktopFylo2x from "../assets/images/portfolio/desktop/image-portfolio-fylo@2x.jpg";
import tabletFylo from "../assets/images/portfolio/tablet/image-portfolio-fylo.jpg";
import mobileFylo from "../assets/images/portfolio/mobile/image-portfolio-fylo.jpg";


const projects = [
    {
      id: "manage",
      title: "Manage",
      description:
        "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
      path: "/manage",
      desktop: `${desktopManage2x}`,
      tablet: `${tabletManage}`,
      mobile: `${mobileManage}`,
      imageUrl: `${mobileManage}`,
      alt: "dashboard project preview",
    },
    {
      id: "bookmark",
      title: "Bookmark",
      description:
        "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
      path: "/bookmark",
      desktop: `${desktopBookmark2x}`,
      tablet: `${tabletBookmark}`,
      mobile: `${mobileBookmark}`,
      imageUrl: `${mobileBookmark}`,
      alt: "bookmark manager project preview",
    },
    {
      id: "insure",
      title: "Insure",
      description:
        "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
      path: "/insure",
      desktop: `${desktopInsure2x}`,
      tablet: `${tabletInsure}`,
      mobile: `${mobileInsure}`,
      imageUrl: `${mobileInsure}`,
      alt: "insurance service landing page project preview",
    },
    {
      id: "fylo",
      title: "Fylo",
      description:
        "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
      path: "/fylo",
      desktop: `${desktopFylo2x}`,
      tablet: `${tabletFylo}`,
      mobile: `${mobileFylo}`,
      imageUrl: `${mobileFylo}`,
      alt: "file manager project preview",
    },
    
  ];

  export default projects;