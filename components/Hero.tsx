"use client";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";

import BorderMagicButton from "./ui/border-magic-button";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="pt-36 pb-24">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex_center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.png"
              alt="Sagar Chand"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <div className="flex justify-center relative mb-20 mt-5 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <motion.h1
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg text-white"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-medium">Hi, I&apos;m Sagar Chand.</span> I&apos;m a{" "}
            <span className="font-medium">Frontend developer</span> with{" "}
            <span className="font-medium">3 years</span> of experience. I enjoy
            building <span className="italic">web apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>
          </motion.h1>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 px-4 text-lg font-medium w-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <a href="#about">
              <BorderMagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="/CV.pdf" download>
              <BorderMagicButton
                title="Download CV"
                icon={<HiDownload />}
                position="right"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
