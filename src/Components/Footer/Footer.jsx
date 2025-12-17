"use client";
import React from "react";
import "./Footer.css";
import logo from "./../../Images/logo.png";

import Link from "next/link";
import Image from "next/image";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-content">
          <Image src={logo} alt="nav logo" />
          <p>
            At Goodway Attestation, we pride ourselves on being a leading expert
            in certificate attestation and apostille services. With 15+ years of
            experience and a team of dedicated professionals, we've earned a
            reputation for delivering fast, efficient, and reliable solutions.
          </p>
        </div>
        <ul>
          <h4>Quick Links</h4>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Attestation Services</Link>
          </li>
          <li>
            <Link href={"/"}>About Us</Link>
          </li>
          <li>
            <Link href={"/"}>Contact Us</Link>
          </li>
        </ul>
        <ul>
          <h4>Services</h4>
          <li>
            <Link href={"/"}>Birth Certificate</Link>
          </li>
          <li>
            <Link href={"/"}>Marriage Certificate</Link>
          </li>
          <li>
            <Link href={"/"}>Educational Certificate</Link>
          </li>
          <li>
            <Link href={"/"}>Commercial Document</Link>
          </li>
          <li>
            <Link href={"/"}>Hrd Attestation</Link>
          </li>
        </ul>
        <ul className="footer-contactContainer">
          <h4>Contact Us</h4>
          <li>
            <div className="footer-contactWrapper">
              <MdOutlinePhoneInTalk className="footer-contactIcon" />
            </div>
            <div className="footer-contactContent">
              <div className="footer-contactText">
                <h5>Phone</h5>
              </div>
              <div className="footer-contactLink">
                <a href="tel:9148889666">+91 9148889666</a>
              </div>
            </div>
          </li>
          <li>
            <div>
              <BsEnvelope className="footer-contactIcon" />
            </div>
            <div>
              <div className="footer-contactText">
                <h5>Email</h5>
              </div>
              <div className="footer-contactLink">
                <a href="mailto:info@goodwayattestation.com">
                  info@goodwayattestation.com
                </a>
              </div>
            </div>
          </li>
          <li>
            <div>
              <IoLocationOutline className="footer-contactIcon" />
            </div>
            <div>
              <div className="footer-contactText">
                <h5>Address</h5>
              </div>
              <div className="footer-contactLink">
                <a href="https://maps.app.goo.gl/ttkcb8w8fSW8AHTH9">
                  #134 (Shop No. 2), 1st Floor, K.N Complex, 11th Cross, Temple
                  Street, Opp. Canara Bank, Malleshwaram, Bengaluru - 560003
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="footer-line">
        <span></span>
        <li>
          <a href="https://www.instagram.com/goodwayattestation.india/">
            <FaInstagram className="footer-lineIco" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/goodwayattestation">
            <FaFacebook className="footer-lineIco" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Goodway_India">
            <BsTwitterX className="footer-lineIco" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/goodway-attestation/">
            <FaLinkedinIn className="footer-lineIco" />
          </a>
        </li>
        <span></span>
      </div>
      <div className="footer-wrapper">
        <p>Copyright © 2025 Goodway Attestation</p>
      </div>
    </div>
  );
};

export default Footer;
