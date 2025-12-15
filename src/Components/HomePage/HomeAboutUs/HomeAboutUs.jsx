import React from "react";
import "./HomeAboutUs.css";

const HomeAboutUs = () => {
  return (
    <section className="about-section" id="about-us">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-text">
          <h6>ABOUT US</h6>
          <h2>Bangalore's Top Choice for UAE Document Verification</h2>
          <p>
            Goodway Attestation is a trailblazing company specializing in
            Certificate Attestation & Apostille services. With 15+ years of
            dedicated experience, our professional team ensures efficient,
            speedy, and reliable document attestation.  
            <br />
            <br />
            We are a REGISTERED and ISO-certified (ISO 9001:2015) company,
            endorsed by government bodies and embassies, offering attestation,
            authentication, and legalization services for Educational and
            Non-Educational certificates, including Marriage and Birth
            certificates. Count on us for 100% genuine attestation at
            competitive rates, surpassing market standards.
          </p>
          <button className="about-btn">Learn More</button>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <img
            src="https://images.pexels.com/photos/1467300/pexels-photo-1467300.jpeg"
            alt="About Us"
          />
          <div className="about-image-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
