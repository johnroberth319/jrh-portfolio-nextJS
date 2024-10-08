import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectItemProps {
  title: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
  type: string;
}

const ProjectItem = ({
  title,
  backgroundImg,
  projectUrl,
  type,
}: ProjectItemProps) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2e5dba] to-[#709dff] dark:to-[#000000]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{type}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
