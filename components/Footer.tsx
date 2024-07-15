import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/constants";
import BorderMagicButton from "./ui/border-magic-button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full h-full absolute left-0 bottom-0">
        <Image
          width={100}
          height={100}
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-70"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-white">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:chandsagar314@gmail.com">
          <BorderMagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-white">
          Copyright © 2024 Sagar Chand
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              target="_blank"
              href={info.link}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
