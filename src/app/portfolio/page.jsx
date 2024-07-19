"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "#4285f4",
    title: "Tech Blog",
    desc: "A full-stack blog application built with robust features and modern technologies.",
    link: "https://github.com/Hashirnkhan24/Tech-Blog",
    tags: ["MERN", "Redux", "Google OAuth", "JWT", "Docker", "WYSIWYG", "MongoDB", "Node.js", "Tailwind CSS" ]
  },
  {
    id: 2,
    color: "#ea4335",
    title: "Airbnb Clone",
    desc: "An AirBnb like website for booking destination homes in Nextjs.",
    link: "https://github.com/Hashirnkhan24/airbnb-clone",
    tags: ["Nextjs", "PostgreSQL", "Prisma", "shadcn", "Kinde Auth", "Tailwind CSS" ]
  },
  {
    id: 3,
    color: "#34a853",
    title: "Pagespeed Bot (Discord Bot)",
    desc: "A discord bot to generate pagespeed insights from your discord itself.",
    link: "https://github.com/Hashirnkhan24/pagespeed-bot",
    tags: ["Node.js", "Javascript", "Discord.js", "Google Pagespeed API" ]
  },
  {
    id: 4,
    color: "#fbc034",
    title: "Smart Download Organizer",
    desc: "Smart Download Organizer is a Chrome extension that automatically organizes your downloads into designated folders based on the file type. ",
    link: "https://github.com/Hashirnkhan24/docs-classify",
    tags: ["Javascript", "Chrome Extensions", "File read" ]
  },
  {
    id: 5,
    color: "#4285f4",
    title: "Jet Set Fly",
    desc: "Developed the website for Jet Set Fly Aviation.",
    link: "https://www.jetsetflyaviation.com/",
    tags: ["Nextjs", "Freelancing", "Aviation", "Framer Motion", "Email JS", "Tailwind CSS" ]
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.25%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl md:text-8xl text-center font-bold">
          Projects
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-[#34a853] py-20" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-[${item.color}]`}
                key={item.id}
              >
                <section className=" w-screen flex items-center justify-center ">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] items-center justify-center text-center gap-2 sm:gap-6 md:gap-8">
          <h3 className="text-3xl text-white font-bold md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h3>
          <p className="w-80 text-white md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] mb-4">
            {item.desc}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto items-center justify-center">
            {item.tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <button className="mt-4 p-3 rounded-lg ring-1 ring-black bg-black/[0.7] text-white">
          <Link href={item.link} target="_blank">
      Github / Demo
    </Link>
            </button>
        </div>
      </section>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className=" text-5xl lg:text-8xl font-bold w-[90%]">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Software Engineer
              </textPath>
            </text>
          </motion.svg>
          <Link href="/contact">
            <div className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 flex m-auto bg-[#fbc034] text-white rounded-full flex items-center justify-center font-semibold p-1">Hire Me</div></Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
