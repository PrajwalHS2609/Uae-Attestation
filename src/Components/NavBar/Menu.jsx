"use client";
import React, { useState } from "react";
import "./NavBar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

const Menu = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  const showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
  };

  const hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    sideBar.style.transform = "translateX(620px)";
  };

  const handleDropDown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
  return (
    <div className="menu-container">
      <ul>
        <li>
          <Link href={"/"} className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/attestation-services"}
            className={pathname === "/attestation-services" ? "active" : ""}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href={"/about-us"}
            className={pathname === "/about-us" ? "active" : ""}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href={"/contact-us"}
            className={pathname === "/contact-us" ? "active" : ""}
          >
            Contact Us
          </Link>
        </li>
      </ul>

      <ul onClick={showSideBar} className="mainMenu">
        <FaBars className="hamIcon" />
      </ul>
      <div className="respMenu">
        <div className="respMenuScroll" id="respMenuScrollId">
          <ul id="respMenuScrollUl">
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
