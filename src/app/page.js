"use client";
import NavBar from "@/components/navbar";
import AboutMe from "@/components/aboutme";
import { useState } from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode)
  }
  return (
    <div className="root">
      <div className={`h-screen ${darkMode ? 'dark' : ''}`}>
        <div className=" mx-auto lg:px-80 px-10 dark:bg-neutral-900 dark:text-neutral-300 h-full w-full">
          <NavBar toggleDarkMode={toggleDarkMode} />
          <AboutMe />
        </div>
      </div>
    </div>
  );
}
