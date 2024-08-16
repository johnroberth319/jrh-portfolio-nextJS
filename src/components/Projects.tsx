import React from "react";
import Image from "next/image";
import nestledImg from "../../public/assets/projects/nestled.png";
import shellImg from "../../public/assets/projects/shell.png";
import chessImg from "../../public/assets/projects/chess.png";
import portfolioImg from "../../public/assets/projects/portfolio.png";
import histogramImg from "../../public/assets/projects/histogram.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <a
          href="https://github.com/IrvinFavors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-xl tracking-widest uppercase text-[#2e5dba] flex items-center">
            Projects <FaExternalLinkAlt className="ml-2" />
          </p>
        </a>
        <h2>What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Webstore: Nestled"
            backgroundImg={nestledImg}
            projectUrl="/nestled"
            type="React TSX"
          />
          <ProjectItem
            title="Histogram Equalization"
            backgroundImg={histogramImg}
            projectUrl="/histogram"
            type="Parallel Program in C"
          />
          <ProjectItem
            title="Linux Shell"
            backgroundImg={shellImg}
            projectUrl="/shell"
            type="C"
          />
          <ProjectItem
            title="Character Themed Chess"
            backgroundImg={chessImg}
            projectUrl="/chess"
            type="Java"
          />
          <ProjectItem
            title="Portfolio Website"
            backgroundImg={portfolioImg}
            projectUrl="/portfolio"
            type="NextJS | JavaScript | TypeScript"
          />
          <ProjectItem
            title="Test JRH"
            backgroundImg={portfolioImg}
            projectUrl="/testjrh"
            type="NextJS | JavaScript | TypeScript"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
