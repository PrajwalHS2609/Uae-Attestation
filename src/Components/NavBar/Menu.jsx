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
            href="/attestation-services"
            className={pathname === "/attestation-services" ? "active" : ""}
          >
            Services
          </Link>
          <div className="serviceDropDown">
            <Link href="/">Educational Certificates</Link>
            <Link href="/">Marriage Certificates</Link>
            <Link href="/">Birth Certificates</Link>
            <Link href="/">HRD Attestation</Link>
            <Link href="/">Commercial Documents</Link>
            <Link href="/">Legal Documents</Link>
          </div>
        </li>

        <li>
          <Link
            href="/about-us"
            className={pathname === "/about-us" ? "active" : ""}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/contact-us"
            className={pathname === "/contact-us" ? "active" : ""}
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
                href="/attestation-services"
                className={pathname === "/attestation-services" ? "active" : ""}
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
              href="/about-us"
              className={pathname === "/about-us" ? "active" : ""}
              onClick={() => setSidebarOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className={pathname === "/contact-us" ? "active" : ""}
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
