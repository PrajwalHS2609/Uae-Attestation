import React from "react";
import "./ServicesHome.css";
import { FaUserGraduate } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBaby } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
const ServicesHome = () => {
  const cards = [
    {
      id: 1,
      title: "Educational Certificates",
      description:
        "Reliable educational certificate attestation for UAE. Ensure your qualifications are acknowledged and valid for academic or professional pursuits in the UAE.",
      icon: FaUserGraduate,
    },
    {
      id: 2,
      title: "Marriage Certificates",
      description:
        "Seamless marriage certificate attestation services for UAE. We make the process hassle-free, so your documents are recognized without a hitch.",
      icon: FaHeart,
    },
    {
      id: 3,
      title: "Birth Certificates",
      description:
        "Swift and reliable birth certificate attestation services for UAE. We handle the entire process, ensuring your documents are accepted with ease.",
      icon: FaBaby,
    },
    {
      id: 4,
      title: "HRD Attestation",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,modi qui repellat officiis esse magnam reprehenderit recusandae!Expedita quibusdam rerum, placeat prov",
      icon: FaFileAlt,
    },
    {
      id: 5,
      title: "Commercial Documents",
      description:
        "Streamlined commercial document attestation for UAE. Ensure your business documents are legally recognized for trade, investments, and partnerships in the UAE.",
      icon: FaBuilding,
    },
    {
      id: 6,
      title: "Legal Documents",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,modi qui repellat officiis esse magnam reprehenderit recusandae!Expedita quibusdam rerum, placeat prov",
      icon: FaBriefcase,
    },
  ];
  const gradients = [
    "linear-gradient(45deg, #00f2fe, #4facfe)",
    "linear-gradient(45deg, #7873f5, #4ade80)",
    "linear-gradient(45deg, #ff6ec4, #185a9d)",
    "linear-gradient(45deg, #f7971e, #ffd200)",
  ];
  return (
    <div className="services-container" id="services">
      <div className="services-content">
        <h2>
          {" "}
          UAE Attestation in Bangalore – Government Approved & Guaranteed
          Delivery
        </h2>
        <p>
          If you are planning to work, study, start a business, or move your
          family to the UAE, completing{" "}
          <a href="https://uaeattestationbangalore.com/">
            UAE Attestation in Bangalore
          </a>{" "}
          is a mandatory legal requirement. Goodway Attestation is a
          government-approved attestation agency with 16 years of process
          expertise, offering fast, secure, and guaranteed UAE attestation
          services trusted by 12,000+ happy customers and 28+ top Indian MNC
          partners in Bangalore.
        </p>
        <p>
          We provide end-to-end{" "}
          <a href="https://uaeattestationbangalore.com">
            UAE Attestation in Bangalore
          </a>{" "}
          for Educational, Personal, and Commercial Certificates, strictly
          following Ministry of External Affairs (MEA – India) and UAE Embassy /
          MOFA guidelines.
        </p>
        <p></p>
      </div>
      <div className="highlight-section">
        {/* Duration Highlight */}
        <div className="highlight-card">
          <h3>🚀 Duration – UAE Attestation in Just 5 Days</h3>
          <ul>
            <li>
              <strong>Standard Processing Time:</strong> 5 Working Days
            </li>
            <li className="note">
              (Duration may vary depending on document type & issuing authority)
            </li>
          </ul>
          <p>
            Our strong coordination with government departments and 16+ years of
            experience ensure faster turnaround with{" "}
            <strong>guaranteed delivery</strong>.
          </p>
        </div>

        {/* Pickup Highlight */}
        <div className="highlight-card">
          <h3>⚡ 1-Hour Document Collection across Bangalore</h3>
          <p>
            We offer express document pickup within <strong>1 hour</strong> from
            60+ localities, including:
          </p>
          <p className="locations">
            Whitefield, Electronic City, Marathahalli, Bellandur, Indiranagar,
            Jayanagar, Yelahanka, Rajajinagar, Hebbal, Malleshwaram, BTM, HSR,
            Banashankari & more.
          </p>
          <p className="highlight-text">
            No travel. No waiting. Complete convenience.
          </p>
        </div>
      </div>
      <div className="services-content">
        {cards.map((x, index) => (
          <div
            key={x.id}
            className="services-cardContainer"
            style={{
              "--card-gradient": gradients[index % gradients.length],
            }}
          >
            <div className="services-cardContent">
              <div className="services-cardWrapper1">
                <div className="services-cardItem">
                  <x.icon className="serviceIcons" />
                </div>
                <div className="services-cardItem">
                  <h2>{x.id}</h2>
                </div>
              </div>
              <div className="services-cardWrapper2">
                <h3>{x.title}</h3>
                <p>{x.description}</p>
                <button>View More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="usp-section">
  <h2 className="usp-heading">
    Our USPs – Why Goodway Attestation Is #1 in Bangalore
  </h2>

  <div className="usp-column">
    {[
      "16 Years of Process Expertise",
      "Government Approved Attestation Agency",
      "Authorized by MEA & UAE Authorities",
      "Trusted by 12,000+ Happy Customers",
      "Exclusive Partner of 28+ Top Indian MNCs in Bangalore",
      "Secure Document Handling & Confidentiality",
      "Live Progress Tracking & Regular Updates",
      "Guaranteed Delivery Commitment",
      "1-Hour Document Collection from 60+ Bangalore Localities",
      "Dedicated Relationship Manager for Every Case",
    ].map((item, index) => (
      <div key={index} className="usp-card">
        <span className="usp-icon">✔</span>
        <p>{item}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default ServicesHome;
