"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  BsFillPersonLinesFill,
  BsFillMoonFill,
  BsFillSunFill,
} from "react-icons/bs";
import { useRouter } from "next/router";

if (typeof window !== "undefined") {
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const moonIcon = document.querySelector("#moon");
  const sunIcon = document.querySelector("#sun");

  const themeIconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
  };

  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      if (moonIcon !== null) moonIcon.classList.add("display-none");
      return;
    }
    if (sunIcon !== null) sunIcon.classList.add("display-none");
  };

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      themeIconToggle();
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeIconToggle();
  };

  if (moonIcon !== null) {
    moonIcon.addEventListener("click", () => {
      themeSwitch();
    });
  }

  if (sunIcon !== null) {
    sunIcon.addEventListener("click", () => {
      themeSwitch();
    });
  }

  themeCheck();
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      ["/nestled", "/shell", "/histogram", "/portfolio", "/chess"].includes(
        router.asPath
      )
    ) {
      setNavBg("transparent");
      setLinkColor("#f8f8f8");
    } else {
      if (
        (localStorage.getItem("theme") == "light" ||
          !window.matchMedia("(prefers-color-scheme: dark)").matches) &&
        !["/nestled", "/shell", "/histogram", "/portfolio", "/chess"].includes(
          router.asPath
        )
      ) {
        setNavBg("#ecf0f3");
        setLinkColor("#1f2937");
      } else if (
        !["/nestled", "/shell", "/histogram", "/portfolio", "/chess"].includes(
          router.asPath
        )
      ) {
        setNavBg("black");
        setLinkColor("white");
      }
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 100) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNavBg = () => {
    if (
      localStorage.getItem("theme") == "dark" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !["/nestled", "/shell", "/histogram", "/portfolio", "/chess"].includes(
        router.asPath
      )
    ) {
      setNavBg("black");
      setLinkColor("white");
    } else if (
      localStorage.getItem("theme") == "dark" &&
      !window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !["/nestled", "/shell", "/histogram", "/portfolio", "/chess"].includes(
        router.asPath
      )
    ) {
      setNavBg("black");
      setLinkColor("white");
    } else if (
      (localStorage.getItem("theme") == "light" ||
        !window.matchMedia("(prefers-color-scheme: dark)").matches) &&
      !["/nestled", "/shell", "/histogram", "/portfolio", "/chess"].includes(
        router.asPath
      )
    ) {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    } else {
      setNavBg("transparent");
      setLinkColor("white");
    }
  };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
      id="navbar"
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#home" scroll={false}>
          <div className="cursor-pointer">
            {linkColor === "#1f2937" ? (
              <Image
                src={`/assets/jf-logo.png`}
                alt="/"
                width="100"
                height="100"
              />
            ) : (
              <Image
                src={`/assets/jf-logo-white.png`}
                alt="/"
                width="100"
                height="100"
              />
            )}
          </div>
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <div id="moon" className="cursor-pointer" onClick={handleNavBg}>
              <BsFillMoonFill />
            </div>
            <div id="sun" className="cursor-pointer" onClick={handleNavBg}>
              <BsFillSunFill />
            </div>
            <Link href="/#home" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          style={{ backgroundColor: `${navBg}` }}
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home" scroll={false}>
                <div className="cursor-pointer">
                  {linkColor === "#1f2937" ? (
                    <Image
                      src={`/assets/jf-logo.png`}
                      alt="/"
                      width="100"
                      height="100"
                    />
                  ) : (
                    <Image
                      src={`/assets/jf-logo-white.png`}
                      alt="/"
                      width="100"
                      height="100"
                    />
                  )}
                </div>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s Build Something Legendary Together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#home" scroll={false}>
                <li
                  className="py-4 text-sm"
                  onClick={() => {
                    setNav(false);
                  }}
                >
                  Home
                </li>
              </Link>
              <Link href="/#about" scroll={false}>
                <li
                  className="py-4 text-sm"
                  onClick={() => {
                    setNav(false);
                  }}
                >
                  About
                </li>
              </Link>
              <Link href="/#skills" scroll={false}>
                <li
                  className="py-4 text-sm"
                  onClick={() => {
                    setNav(false);
                  }}
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects" scroll={false}>
                <li
                  className="py-4 text-sm"
                  onClick={() => {
                    setNav(false);
                  }}
                >
                  Projects
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#2e5dba]">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-5 w-full sm:w-[70%]">
                <IconContext.Provider
                  value={{ className: "shared-class", size: "20px" }}
                >
                  <a
                    href="https://www.linkedin.com/in/irvinfavorsjr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/IrvinFavors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href="mailto:irvin.favors@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </a>
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
