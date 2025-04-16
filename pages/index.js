import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import SequentialTypewriter from "../components/SequentialTypewriter";

// Components
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Cursor from "../components/Cursor";

// Utilities
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";

// Data
import data from "../data/portfolio.json";

export default function Home() {
  const workRef = useRef(null);
  const aboutRef = useRef(null);
 

  const scrollTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative ${data.showCursor ? "cursor-none" : ""}`}>
      {data.showCursor && <Cursor />}

      <Head>
        <title>{data.name}</title>
      </Head>

      {/* Background Gradients */}
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Header
          handleWorkScroll={() => scrollTo(workRef)}
          handleAboutScroll={() => scrollTo(aboutRef)}
        />

        {/* Hero Section */}
       {/* Hero Section */}
<section className="mt-16 lg:mt-24 px-4 sm:px-8 lg:px-24">
  <SequentialTypewriter
    lines={[
      data.headerTaglineOne,
      data.headerTaglineTwo,
      data.headerTaglineThree,
      data.headerTaglineFour
    ]}
    classNameMap={[
      "text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 text-transparent bg-clip-text dark:from-purple-300 dark:via-fuchsia-400 dark:to-indigo-400",
      "text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 text-transparent bg-clip-text dark:from-purple-300 dark:via-fuchsia-400 dark:to-indigo-400",
      "text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 text-transparent bg-clip-text dark:from-purple-300 dark:via-fuchsia-400 dark:to-indigo-400",
      "text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-medium mt-4"
    ]}
    speed={50}
    delayBetween={1000}
  />

  <Socials className="mt-8" />
</section>



<section ref={workRef} className="mt-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-full">
    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-sky-400 mb-2">
      Selected Projects
    </h2>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
      A curated selection of works exploring AI, UX, and intelligent systems.
    </p>

    {/* Scrollable Projects */}
    <div className="flex overflow-x-auto gap-6 pb-2 scroll-smooth mask-gradient">
      {data.projects.map((project) => (
       <a
       key={project.id}
       href={project.url}
       target="_blank"
       rel="noopener noreferrer"
       className="relative bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 
                  transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl 
                  hover:border-sky-400 hover:bg-sky-50 dark:hover:bg-slate-700 cursor-pointer 
                  min-w-[280px] max-w-[320px] flex-shrink-0 group"
     >
       <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-100 via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
     
       <div className="w-full aspect-square mb-4 overflow-hidden rounded-xl border border-gray-100">
         <img
           src={project.imageSrc}
           alt={project.title}
           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
         />
       </div>
     
       <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-sky-700 dark:group-hover:text-sky-300">
         {project.title}
       </h3>
     
       <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-300">
         {project.description}
       </p>
     </a>
     
      ))}
    </div>

  </div>
</section>

 {/* HONORS & AWARDS */}
<section className="mt-24">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-sky-400 mb-8">
    Honor and Awards
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {data.awards.map((award, index) => (
      <div
        key={index}
        className="relative flex flex-col gap-4 p-6 bg-white dark:bg-slate-800 border border-red-100 dark:border-red-700 
                   rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:border-red-400 hover:bg-red-50 
                   dark:hover:bg-slate-700 hover:-translate-y-1 group pl-5"
      >
        <div className="absolute left-0 top-6 h-10 w-1 bg-red-500 rounded-r-md" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors duration-300">
          {award.title}
        </h3>
        <div className="w-10 h-1 bg-red-400 rounded-md my-2" />
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
          {award.description}
        </p>
      </div>
    ))}
  </div>
</section>

{/* EXPERIENCES */}
<section className="mt-24">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-amber-400 mb-8">
    Experiences
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {data.services.map((service, index) => (
      <div
        key={index}
        className="relative flex flex-col gap-4 p-6 bg-white dark:bg-slate-800 border border-amber-100 dark:border-amber-700 
                   rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:border-amber-400 hover:bg-amber-50 
                   dark:hover:bg-slate-700 hover:-translate-y-1 group pl-5"
      >
        <div className="absolute left-0 top-6 h-10 w-1 bg-amber-400 rounded-r-md" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors duration-300">
          {service.title}
        </h3>
        <div className="w-10 h-1 bg-amber-400 rounded-md my-2" />
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
          {service.description}
        </p>
      </div>
    ))}
  </div>
</section>

{/* EXTRACURRICULARS */}
<section className="mt-24">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-sky-400 mb-8">
    Extracurriculars
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {data.leadership.map((item, index) => (
      <div
        key={index}
        className="relative flex flex-col gap-4 p-6 bg-white dark:bg-slate-800 border border-sky-100 dark:border-sky-700 
                   rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:border-sky-400 hover:bg-sky-50 
                   dark:hover:bg-slate-700 hover:-translate-y-1 group pl-5"
      >
        <div className="absolute left-0 top-6 h-10 w-1 bg-sky-400 rounded-r-md" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors duration-300">
          {item.title}
        </h3>
        <div className="w-10 h-1 bg-sky-400 rounded-md my-2" />
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
          {item.description}
        </p>
      </div>
    ))}
  </div>
</section>



<section ref={aboutRef} className="mt-24 relative">
  <div className="absolute left-0 top-3 h-8 w-1 bg-gradient-to-b from-sky-400 to-indigo-500 rounded-r" />

  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pl-4">
    <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 text-transparent bg-clip-text">
      About me
    </span>
  </h2>

  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl pl-4 transition-all duration-500 animate-fade-in">
    {data.aboutpara}
  </p>
</section>


        <Footer className="mt-20" />
      </main>
    </div>
  );
}
