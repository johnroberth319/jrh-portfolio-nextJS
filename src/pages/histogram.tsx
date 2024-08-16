import React, { useEffect, useState } from "react";
import "../app/globals.css";
import Image from "next/image";
import histogramImg from "../../public/assets/projects/histogram.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import GitHubCodePreview from "@/components/GitHubCodePreview";
import { FaExternalLinkAlt } from "react-icons/fa";

const Histogram = () => {
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
          src={histogramImg}
          alt=""
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] righ-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Histogram Equalization </h2>
          <h3>C / OpenMP </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="">Overview</h2>
          <p>
            <br />
            The goal of this project was to enhance the histogram equalization
            method for image processing. Histogram equalization is a technique
            used in digital image processing to improve the contrast in images.
            The primary objective was to optimize this method to more
            effectively distribute the intensity levels of an image, thereby
            utilizing the full spectrum of available intensity values. This
            improvement is especially beneficial in cases where images have
            areas of low contrast, allowing for the amplification of details in
            both overexposed and underexposed photographs. The refined histogram
            equalization method also contributes to clearer imaging in medical
            applications, such as providing enhanced visualization of bone
            structures in X-ray images.
          </p>

          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/IrvinFavors/omp_histogram_equalization"
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
                repoUrl={
                  "https://github.com/IrvinFavors/omp_histogram_equalization"
                }
                filePath={"omp_histogram_equalization.c"}
                language="c"
              />
            </div>
          )}
        </div>
        <div className="col-span-4 md:col-span-1 md:max-h-[200px] shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />C
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                OpenMP
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

export default Histogram;
