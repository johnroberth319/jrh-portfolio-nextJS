import Head from "next/head";
import Image from "next/image";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="">
      <Main />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
