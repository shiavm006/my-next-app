"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export const products = [
  {
    title: "NETFLIX-GPT",
    link: "https://netflix-gpt-eosin-eta.vercel.app",
    thumbnail: "/courses/Netflix.png",
  },
  {
    title: "Chess-Game",
    link: "https://github.com/shiavm006/chess.com-clone",
    thumbnail: "/courses/chess2.png",
  },
  {
    title: "Configure-Bike",
    link: "https://bike-cutsom-configuration.vercel.app",
    thumbnail: "/courses/Bike.png",
  },

  {
    title: "2048-Game",
    link: "https://2048x.vercel.app/",
    thumbnail: "/courses/2048.png",
  },
  {
    title: "Dinning-App",
    link: "https://dinning-my9urjkyk-shivam-mittals-projects-88b449ed.vercel.app/",
    thumbnail: "/courses/Dining.png",
  },
  {
    title: "NOTE-GINIE",
    link: "https://note-genie-seven.vercel.app/",
    thumbnail: "/courses/Note.png",
  },
  {
    title: "Netflix-GPT",
    link: "https://netflix-gpt-eosin-eta.vercel.app",
    thumbnail: "/courses/Netflix.png",
  },  
  
  {
    title: "DINNING-APP",
    link: "https://dinning-my9urjkyk-shivam-mittals-projects-88b449ed.vercel.app/",
    thumbnail: "/courses/Dining.png",
  },
  {
    title: "NOTE-GINIE",
    link: "https://note-genie-seven.vercel.app/",
    thumbnail: "/courses/Note.png",
  },
  {
    title: "Chess-Game",
    link: "https://github.com/shiavm006/chess.com-clone",
    thumbnail: "/courses/chess2.png",
  },

  {
    title: "2048-Game",
    link: "https://2048x.vercel.app/",
    thumbnail: "/courses/2048.png",
  },
  {
    title: "Dinning-App",
    link: "https://dinning-my9urjkyk-shivam-mittals-projects-88b449ed.vercel.app/",
    thumbnail: "/courses/Dining.png",
  },
  {
    title: "Bike-Configuration",
    link: "https://bike-cutsom-configuration.vercel.app",
    thumbnail: "/courses/Bike.png",
  },
  {
  title: "Chess-Game",
  link: "https://github.com/shiavm006/chess.com-clone",
  thumbnail: "/courses/chess2.png",
  },  

];

function HomeProjects() {
  return <HeroParallax products={products} />;
}

export default HomeProjects;
