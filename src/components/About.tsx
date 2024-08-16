import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#2e5dba] font-bolc">
            About
          </p>
          <h2 className="py-4">Background</h2>
          <p className="py-2 text-gray-600 dark:text-gray-300">
            I am a Junior Computer Science major with a concentration in
            Cybersecurity and AI. I am also obtaining a minor in Political
            Science and completing a certificate program in entrepreneurship as
            a member of the Delaware Innovation Fellows organization of the
            University of Delaware. Currently I am an Undegraduate Teaching
            Assisant for Introduction to Systems Programming at the University
            of Delaware. The course is designed to introduce the
            university&apos;s CS students to the C programming language, version
            control and programming within embedded systems. In Summer 2023, I
            joined Google as an intern on their Avid Ads Infrastructure
            Team in Mountain View, CA.
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-300">
            I started programming my freshman year of college and have dedicated
            a significant amount of time since, to honing my skills and
            continuosely looking for ways to improve as an aspiring Software
            Developer. Technology has always fascinated me; the many intricate
            yet simple ways we interact with it on a daily basis led me to want
            to learn how to program and have the tools to be able to contribute
            to this technology myself.
          </p>
          <Link href="/#projects" scroll={false}>
            <p className="py-2 text-gray-600 dark:text-gray-300 underline cursor-pointer">
              Checkout out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={`/assets/nyc-contrast.jpg`}
            alt="/"
            width="250"
            height="250"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
