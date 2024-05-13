"use client";
import React, { useState, useEffect } from "react";

function AppBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsExpanded(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`appbar ${isExpanded ? "expanded" : ""}`}>
      <div className="appbar-content">
        <h1 className="app-title">Grokking Nick</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#media">Media</a>
            </li>
            <li>
              <a href="/contact">Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default AppBar;
