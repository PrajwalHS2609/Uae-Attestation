import React from "react";

const HomeHeaderContent = ({ data }) => {
  return (
    <div>
      <div className="services-content">
        <h1>{data?.heading}</h1>

        {data?.paragraphs?.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
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
            experience ensure faster turnaround with
            <strong>guaranteed delivery</strong>.
          </p>
        </div>

        {/* Pickup Highlight */}
        <div className="highlight-card">
          <h3>⚡ 1-Hour Document Collection across Bangalore</h3>
          <p>
            We offer express document pickup within <strong>1 hour</strong> from
            60+ localities, including: <br />
            Whitefield, Electronic City, Marathahalli, Bellandur, Indiranagar,
            Jayanagar, Yelahanka, Rajajinagar, Hebbal, Malleshwaram, BTM, HSR,
            Banashankari & more.
          </p>
          <p className="highlight-text">
            No travel. No waiting. Complete convenience.
          </p>
        </div>
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

export default HomeHeaderContent;
