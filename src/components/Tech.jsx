import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const TechCard = ({ name, icon, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.5)}
    className='flex flex-col items-center gap-2 group'
  >
    <div className='w-28 h-28 rounded-full bg-tertiary flex items-center justify-center shadow-card green-pink-gradient p-[2px]'>
      <div className='w-full h-full rounded-full bg-tertiary flex items-center justify-center'>
        <img
          src={icon}
          alt={name}
          className='w-14 h-14 object-contain'
        />
      </div>
    </div>
    <p className='text-secondary text-[12px] font-medium text-center'>{name}</p>
  </motion.div>
);

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <TechCard key={technology.name} index={index} {...technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
