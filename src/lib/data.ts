import React from "react";
import { LuGraduationCap } from "react-icons/lu";


export const experiencesData = [
  {
    title: "B.E. Computer Engineering",
    location: "Mumbai, India",
    description:
      "I completed my bachelor's degree from Datta Meghe College of Engineering, Navi Mumbai.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "General Secratary, CSI-DMCE",
    location: "Mumbai, India",
    description:
      "I led a team of 150 students and organized various seminars, workshops and competitions.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Freelance",
    location: "Mumbai. India",
    description:
      "Currently I am working as a freelancer web developer",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
] as const;


