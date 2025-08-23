import React from "react";
import "./WhyChoose.css";
import govtAp from "./../../../Images/whyChoose/govtAppov.png";
import efficiency from "./../../../Images/whyChoose/efficiency.png";
import expertise from "./../../../Images/whyChoose/expertise.png";
import customer from "./../../../Images/whyChoose/24X7.png";
import intReach from "./../../../Images/whyChoose/international.png";
import Transparency from "./../../../Images/whyChoose/transparency.png";
import secure from "./../../../Images/whyChoose/secure.png";
import trust from "./../../../Images/whyChoose/trusted.png";
import price from "./../../../Images/whyChoose/pricing.png";
import online from "./../../../Images/whyChoose/tracking.png";
import legal from "./../../../Images/whyChoose/legal.png";
import time from "./../../../Images/whyChoose/timeDelivery.png";
import Image from "next/image";
const WhyChoose = () => {
  const card = [
    { id: 1, name: "Government Approved", icon: govtAp },
    { id: 2, name: "Efficiency", icon: efficiency },
    { id: 3, name: "Expertise", icon: expertise },
    { id: 4, name: "24x7 Customer Support", icon: customer },
    { id: 5, name: "International Reach", icon: intReach },
    { id: 6, name: "Transparency", icon: Transparency },
    { id: 7, name: "Secure Handling", icon: secure },
    { id: 8, name: "Trusted by Clients", icon: trust },
    { id: 9, name: "Competitive Pricing", icon: price },
    { id: 10, name: "Online Tracking", icon: online },
    { id: 11, name: "Legal Compliance", icon: legal },
    { id: 12, name: "Free Home Pickup and Timely Delivery", icon: time },
  ];
  return (
    <div className="whyChoose-container">
      <div className="whyChoose-content">
        <div className="whyChoose-item">
          <img
            src="https://images.pexels.com/photos/3214995/pexels-photo-3214995.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="whyChoose-content">
        <h2>The Trusted Choice: Why People Rely on Goodway Attestation</h2>
        <div className="whyChoose-wrapper">
          {card.map((x) => (
            <div className="whyChoose-cardContainer" key={x.id}>
              <Image src={x.icon} alt={x.name} />
              <h5>{x.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
