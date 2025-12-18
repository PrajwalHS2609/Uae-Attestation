import React from "react";
import "./HomeKeywords.css";

const keywords = [
  "UAE Attestation in Bangalore",
  "UAE Attestation Services Bangalore",
  "UAE Embassy Attestation in Bangalore",
  "UAE Certificate Attestation Bangalore",
  "Attestation for UAE in Bangalore",
  "UAE Attestation Near Me",
  "UAE Attestation Agency in Bangalore",
  "Government Approved UAE Attestation Bangalore",
  "Degree Certificate Attestation for UAE Bangalore",
  "Educational Certificate Attestation for UAE Bangalore",
  "HRD Attestation for UAE Bangalore",
  "MEA Attestation for UAE Bangalore",
  "Marriage Certificate Attestation for UAE Bangalore",
  "Birth Certificate Attestation for UAE Bangalore",
  "PCC Attestation for UAE Bangalore",
  "Personal Certificate Attestation UAE Bangalore",
  "Commercial Document Attestation for UAE Bangalore",
  "Power of Attorney Attestation for UAE Bangalore",
  "Company Document Attestation UAE Bangalore",
  "Business Document Attestation UAE Bangalore",
  "UAE Attestation Cost in Bangalore",
  "UAE Attestation Fees Bangalore",
  "UAE Attestation Price Bangalore",
  "UAE Attestation Time in Bangalore",
  "Fast UAE Attestation in Bangalore",
  "Doorstep UAE Attestation Bangalore",
  "Same Day UAE Attestation Bangalore",
  "UAE Attestation Consultants Bangalore",
  "UAE Attestation Office in Bangalore",
  "UAE Attestation Agents Bangalore",
  "How to Get UAE Attestation in Bangalore?",
  "UAE Attestation Process in Bangalore",
  "Best UAE Attestation Service in Bangalore",
  "Reliable UAE Attestation Bangalore",
  "Certified UAE Attestation Bangalore",
  "UAE Attestation Whitefield Bangalore",
  "UAE Attestation Electronic City Bangalore",
  "UAE Attestation Marathahalli Bangalore",
  "UAE Attestation Indiranagar Bangalore",
  "UAE Attestation Koramangala Bangalore",
];

const HomeKeywords = () => {
  return (
    <div className="keywords-container" id="">
      <ul className="acl-list">
        {keywords.map((country, index) => (
          <li key={index} className="acl-item">
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeKeywords;
