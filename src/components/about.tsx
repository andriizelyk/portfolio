import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Welcome to my portfolio! I'm a software engineer with a deep passion for solving problems and building applications that make a difference. 
      With a background in computer science, I love diving into challenges and creating solutions that are not only efficient but also enjoyable to use. 
      Most of my experience has been concentrated on building .NET applications, where I've honed my skills in developing robust and scalable software. 
      </p>
      <p className="mb-3">
      My curiosity and drive to learn new things recently led me to explore React, allowing me to create modern and comfortable user interfaces. 
      Here, you'll get a glimpse into my journey, the projects I've worked on, and the experiences that have shaped me as a developer. 
      I hope you enjoy exploring my work as much as I enjoyed creating it!
      </p>
    </motion.section>
  );
}