"use client";
import React, { useState } from "react";
import "./NavBar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="menu-container">
      {/* Desktop Menu */}
      <ul>
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        </li>
        <li>
          <Link href="/attestation-services" className={pathname === "/attestation-services" ? "active" : ""}>Services</Link>
        </li>
        <li>
          <Link href="/about-us" className={pathname === "/about-us" ? "active" : ""}>About Us</Link>
        </li>
        <li>
          <Link href="/contact-us" className={pathname === "/contact-us" ? "active" : ""}>Contact Us</Link>
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
            <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setSidebarOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/attestation-services" className={pathname === "/attestation-services" ? "active" : ""} onClick={() => setSidebarOpen(false)}>Services</Link>
          </li>
          <li>
            <Link href="/about-us" className={pathname === "/about-us" ? "active" : ""} onClick={() => setSidebarOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link href="/contact-us" className={pathname === "/contact-us" ? "active" : ""} onClick={() => setSidebarOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
