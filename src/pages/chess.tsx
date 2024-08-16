import React, { useEffect, useState } from "react";
import "../app/globals.css";
import chessImg from "../../public/assets/projects/chess.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import GitHubCodePreview from "@/components/GitHubCodePreview";
import { FaExternalLinkAlt } from "react-icons/fa";

const Chess = () => {
  const [showCodePreview, setShowCodePreview] = useState(false);

  useEffect(() => {
    // This function now runs only on the client-side
    function isDesktopOS() {
      const platform = window.navigator.platform;
      const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
      const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
      const linuxPlatforms = [
        "Linux",
        "Linux i686",
        "Linux armv7l",
        "Linux aarch64",
        "Linux x86_64",
      ];

      if (macosPlatforms.includes(platform)) {
        return true;
      } else if (windowsPlatforms.includes(platform)) {
        return true;
      } else if (linuxPlatforms.includes(platform)) {
        return true;
      }

      return false;
    }

    setShowCodePreview(isDesktopOS());
  }, []);

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={chessImg}
          alt=""
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] righ-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Character Themed Chess</h2>
          <h3>Java</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            <br />
            The goal of this project was to develop a chess game using the
            fundamentals of object-oriented programming in Java. Each of the
            game pieces have characteristics and abilities unique to those of
            popular animated characters. Some may have the ability to “fly”,
            attack other pieces, recruit, become invisible, freeze enemy pieces,
            etc. Interactions such as a bonus square have also been added.
          </p>
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/IrvinFavors/CharacterChess"
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
            {showCodePreview && (
              <p className="text-xl font-bold">Code Preview :</p>
            )}
          </div>
          {showCodePreview && (
            <div className="">
              <GitHubCodePreview
                repoUrl={"https://github.com/IrvinFavors/CharacterChess"}
                filePath={"src/main/java/Controller.java"}
                language="java"
              />
            </div>
          )}
        </div>
        <div className="col-span-4 md:col-span-1 md:max-h-[200px] shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Java
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

export default Chess;
