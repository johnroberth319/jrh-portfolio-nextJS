import React from "react";
import "../app/globals.css";
import nestledImg from "../../public/assets/projects/nestled.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const Testjrh = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={nestledImg}
          alt=""
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] righ-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">JRH</h2>
          <h3>React TSX / CSS / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            <br />
            The goal of this project was to teach the agile development
            methodology through the creation of a webstore in sprints, using
            product and sprint backlogs to manage tasks. The webstore was
            programmed using the React Library and TypeScript, while using
            JavaScript configuration, Tailwind CSS/CSS for styling, Firebase for
            user authentication and a Firestore database for data management.
          </p>
          <div className="flex items-center">
            <a
              href="https://irvinfavors.github.io/webstore/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                style={{ maxWidth: "100px" }}
                className="bg-gray-700 dark:bg-slate-200 text-white dark:text-black p-2.5 px-6 rounded-lg text-md font-semibold 
            border-2 border-solid border-transparent flex items-center z-10 m-4"
              >
                Site <FaExternalLinkAlt className="ml-2" />
              </div>
            </a>
            <a
              href="https://github.com/IrvinFavors/webstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                style={{ maxWidth: "150px" }}
                className="bg-gray-700 dark:bg-slate-200 text-white dark:text-black p-2.5 px-6 rounded-lg text-md font-semibold 
            border-2 border-solid border-transparent flex items-center z-10 m-4"
              >
                Full Code <FaExternalLinkAlt className="ml-2" />
              </div>
            </a>
          </div>

          <iframe
            src="https://irvinfavors.github.io/webstore/"
            width="100%"
            height="600px"
            style={{ border: "4px solid grey" }}
          />
        </div>
        <div className="col-span-4 md:col-span-1 md:max-h-[320px] shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                GitHub Pages
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects" scroll={false}>
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Testjrh;
