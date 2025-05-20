"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Google Developer Group, Core Committee",
    description1:
      "I actively contribute to fostering a vibrant tech community by organizing impactful developer events, workshops, and hands-on sessions focused on Google technologies and beyond.",
    description2:
      "Collaborate with fellow committee members to identify relevant topics, onboard speakers, manage outreach, and ensure seamless event execution.",
    description3:
      "Being part of the GDG Core Team has strengthened my leadership, teamwork, and technical communication — and allows me to stay connected with the ever-evolving developer ecosystem while making a tangible impact on my campus tech culture.",
    techstack: "Event Management, Community Building, Technical Leadership, Workshop Facilitation",
    content: (
      <span className="text-white">
        January 2025 - Present
      </span>
    ),
  },
  {
    title: "E-Cell, Core Committee",
    description1:
      "Leading initiatives to foster entrepreneurship and innovation within the campus community through workshops, speaker sessions, and startup competitions.",
    description2:
      "Organizing and managing entrepreneurship-focused events, including ideation workshops, pitch competitions, and networking sessions with industry leaders.",
    description3:
      "Developing strategic partnerships with startups, incubators, and industry mentors to create valuable opportunities for student entrepreneurs.",
    techstack: "Event Management, Entrepreneurship, Leadership, Community Building, Strategic Planning",
    content: (
      <span className="text-white">
        March 2025 - Present
      </span>
    ),
  },
];

function WorkEx() {
  return (
    <div className="p-10">
      <h1 className="mt-20 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Work Experience
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}

export default WorkEx;
