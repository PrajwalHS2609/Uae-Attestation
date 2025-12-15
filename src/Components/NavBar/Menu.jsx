"use client";
import React, { useState } from "react";
import "./NavBar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Menu = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <div className="menu-container">
      {/* Desktop Menu */}
      <ul>
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>

        {/* Desktop Dropdown */}
        <li className="services">
          <Link
            href="#services"
            className={pathname === "#services" ? "active" : ""}
          >
            Services
          </Link>
          <div className="serviceDropDown">
            <Link href="#services">Educational Certificates</Link>
            <Link href="#services">Marriage Certificates</Link>
            <Link href="#services">Birth Certificates</Link>
            <Link href="#services">HRD Attestation</Link>
            <Link href="#services">Commercial Documents</Link>
            <Link href="#services">Legal Documents</Link>
          </div>
        </li>

        <li>
          <Link
            href="#about-us"
            className={pathname === "#about-us" ? "active" : ""}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="#contact-us"
            className={pathname === "#contact-us" ? "active" : ""}
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Hamburger (Mobile) */}
      <div onClick={() => setSidebarOpen(true)} className="mainMenu">
        <FaBars className="hamIcon" />
      </div>

      {/* Mobile Sidebar */}
      <div className={`respMenu ${sidebarOpen ? "show" : ""}`}>
        <FaTimes className="closeBtn" onClick={() => setSidebarOpen(false)} />
        <ul>
          <li>
            <Link
              href="/"
              className={pathname === "/" ? "active" : ""}
              onClick={() => setSidebarOpen(false)}
            >
              Home
            </Link>
          </li>
          {/* Mobile Dropdown */}
          <li
            className="mobileServices"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            <div className="mobileServices-header">
              <Link
                href="#services"
                className={pathname === "#services" ? "active" : ""}
              >
                Services
              </Link>
              <MdKeyboardArrowDown
                className={`arrow ${mobileServicesOpen ? "rotate" : ""}`}
              />
            </div>
            <ul
              className={`mobileServiceDropDown ${
                mobileServicesOpen ? "open" : ""
              }`}
            >
              <li><Link href="/">Educational Certificates</Link></li>
              <li><Link href="/">Marriage Certificates</Link></li>
              <li><Link href="/">Birth Certificates</Link></li>
              <li><Link href="/">HRD Attestation</Link></li>
              <li><Link href="/">Commercial Documents</Link></li>
              <li><Link href="/">Legal Documents</Link></li>
            </ul>
          </li>

          <li>
            <Link
              href="#about-us"
              className={pathname === "#about-us" ? "active" : ""}
              onClick={() => setSidebarOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#contact-us"
              className={pathname === "#contact-us" ? "active" : ""}
              onClick={() => setSidebarOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
