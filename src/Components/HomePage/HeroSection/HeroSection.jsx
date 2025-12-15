"use client"
import React from "react";
import "./HeroSection.css";
import uaelogo from "./../../../Images/UAE Embassy.png";
import Image from "next/image";
import key1 from "@/Images/KeyPts/24X7.png"
import key2 from "@/Images/KeyPts/ISO.png"
import key3 from "@/Images/KeyPts/expertise.png"
import key4 from "@/Images/KeyPts/govtApp.png"

import { MdKeyboardArrowRight } from "react-icons/md";

const HeroSection = () => {
    const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <div className="heroSection-container">
      <img
        src="https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg"
        alt="Background"
      />

      <div className="heroSection-content">
        <div className="heroSection-item">
          {/* Left Side - Text */}
          <div className="heroSection-wrapper text">
            <h4>Your Gateway to Hassle-Free</h4>
            <h2>UAE Attestation Services in Bangalore</h2>
            <p>
              We simplify the complex process, ensuring your documents are
              verified efficiently and promptly.
            </p>
            <span>
              <button onClick={handlePop}>
                Talk to Expert{" "}
                <MdKeyboardArrowRight className="heroSection-icon" />
              </button>
            </span>
            <div className="heroKeyPoints">
              <li><Image src={key1} alt=""/></li>
              <li><Image src={key2} alt=""/></li>
              <li><Image src={key3} alt=""/></li>
              <li><Image src={key4} alt=""/></li>
            </div>
          </div>

          {/* Right Side - Logo */}
          <div className="heroSection-wrapper logo">
            <Image src={uaelogo} alt="UAE Embassy Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
