"use client";
import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Menu from './Menu';
import Logo from './Logo';
const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  // Effect runs once when component mounts
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={scroll ? "navbar-container" : "navbar-container1"}>
        <Logo/>
        <Menu/>
    </div>
  );
};

export default NavBar;
