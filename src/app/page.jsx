"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import NavLink from "../components/navLink";

const Homepage = () => {
  const links = [
    { url: "/portfolio", title: "View My Work" },
    { url: "/contact", title: "Contact Me" },
  ];
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col items-center justify-center lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        {/* <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hashir-avatar.png" alt="" fill className="object-contain" />
        </div> */}
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I am Hashir!
          </h1>
          {/* DESC */}
          <p className="md:text-xl text-center">
          I'm a <span className="font-medium">software developer</span> passionate about solving problems and continuously learning new technologies. I love exploring new innovations in the tech world and pushing the boundaries of what's possible.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 items-center justify-center">
            <button className="p-4 rounded-md ring-1 ring-[#4285f4] bg-[#4285f4] text-white hover:scale-105">
            <NavLink link={links[0]} key={links[0].title} />
            </button>
            <button className="p-4 rounded-md ring-1 ring-[#4285f4] hover:scale-105">
            <NavLink link={links[1]} key={links[1].title} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
