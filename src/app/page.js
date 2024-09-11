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
    <div className="root lg:h-screen">
      <AboutMe />
    
    </div>
  );
}
