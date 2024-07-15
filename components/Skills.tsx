"use client";
import { motion } from "framer-motion";
import { fadeInAnimationVariants, technologies } from "@/constants";
import BallCanvas from "./canvas/Ball";

const Skills = () => {
  return (
    <section className="py-20">
      <div className="heading">
        <span className="text-white">My </span>
        <span className="text-purple">Skills</span>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology, index) => (
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="w-28 h-28"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
