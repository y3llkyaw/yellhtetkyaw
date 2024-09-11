"use client";

import { useState } from "react";
import NavBar from "@/components/navbar";

export default function ClientRootLayout({ children, geistSans, geistMono }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.body.classList.remove("dark");
        } else {
            document.body.classList.add("dark");
        }
    };

    return (
        <div className="root ">
            <div className="mx-auto lg:px-80 px-10 dark:bg-neutral-900 dark:text-neutral-300 w-full">
                <NavBar toggleDarkMode={toggleDarkMode} />
                {children}
            </div>

        </div>
    );
}