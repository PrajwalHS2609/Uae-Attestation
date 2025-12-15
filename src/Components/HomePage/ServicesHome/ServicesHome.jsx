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
        <h2>UAE Embassy Attestation Services in Bangalore</h2>
        <p>
          Embark on a smooth and reliable journey through the attestation
          process for your documents destined for the UAE with Goodway
          Attestation – your trusted partner for UAE Embassy Attestation
          Services in Bangalore. We specialize in providing seamless and
          efficient attestation services, ensuring that your documents meet all
          the stringent requirements set by the UAE Embassy.
        </p>
        <p>
          Navigating the intricacies of document attestation can be a complex
          task, but with Goodway Attestation, we simplify the entire process for
          you. Whether you require attestation for educational, personal, or
          commercial documents, our dedicated team is well-equipped to handle
          your specific needs with precision and expertise.
        </p>
        <p>
          {" "}
          At Goodway Attestation, we prioritize accuracy, reliability, and
          promptness, making us the preferred choice for UAE Embassy Attestation
          Services in Bangalore. Trust us to manage your document attestation
          efficiently, allowing you to pursue your plans and opportunities in
          the UAE with confidence. Your documents are safe in our hands, and our
          commitment is to deliver exceptional attestation services tailored to
          your requirements.
        </p>
        <p></p>
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
    </div>
  );
};

export default ServicesHome;
