import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[3040px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-200">
            LET&apos;S BUILD SOMETHING TOGETHER
          </p>
          <AnimatedText
            text="Hi, I'm"
            secondaryText="Irvin"
            className="py-4 text-gray-700 dark:text-gray-300 items-center self-center justify-center"
            secondaryClassName="text-[#2e5dba] dark:text-[#378ee6]"
          />
          <AnimatedText
            text="A Computer Science Student"
            secondaryText=""
            className="py-4 text-gray-700 dark:text-gray-300"
            secondaryClassName=""
          />
          <p className="py-4 text-gray-600 dark:text-gray-300 max-w-[70%] m-auto">
            I&apos;m a Computer Science Major, concentrating in Cybersecurity &
            AI. During Summer of 2023, I interned for Google under the Avid Ads
            Infrastructure Team
          </p>
          <div className="flex items-center justify-between max-w-[290px] m-auto py-4">
            <IconContext.Provider
              value={{ className: "shared-class", size: "25px" }}
            >
              <a
                href="https://www.linkedin.com/in/irvinfavorsjr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-7 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href="https://github.com/IrvinFavors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </a>
              <a
                href="mailto:irvin.favors@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-7 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />{" "}
                </div>
              </a>
            </IconContext.Provider>
          </div>
          <div className="flex items-center justify-center max-w-[10%] m-auto py-4">
            <Link
              href="/Irvin_Favors_Jr_Resume.pdf"
              className="bg-gray-700 dark:bg-slate-200 text-white dark:text-black p-2.5 px-6 rounded-lg text-md font-semibold hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white border-2 border-solid border-transparent hover:border-black dark:hover:border-white flex items-center"
            >
              Resume <BiLinkExternal className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
