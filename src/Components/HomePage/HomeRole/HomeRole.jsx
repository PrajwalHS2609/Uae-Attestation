import React from "react";
import { FaShieldAlt, FaClock, FaFileAlt, FaLayerGroup, FaBell } from "react-icons/fa";
import "./HomeRole.css";

const HomeRole = () => {
  return (
    <section className="role-section">
      {/* Heading */}
      <div className="role-header">
        <h2>
          The Role of <span>UAE Attestation Services</span> in Bangalore
        </h2>
        <p>
          Navigating document attestation in a foreign country can be
          overwhelming. UAE attestation services act as your trusted partner,
          simplifying the process with expertise and care.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="role-grid">
        <div className="role-card">
          <FaShieldAlt className="role-icon" />
          <h3>Expertise</h3>
          <p>
            Our team understands the UAE’s attestation requirements, rules, and
            embassy protocols, ensuring correctness every step.
          </p>
        </div>

        <div className="role-card">
          <FaClock className="role-icon" />
          <h3>Time-Saving</h3>
          <p>
            We streamline the process, saving you valuable time and eliminating
            stress by handling formalities on your behalf.
          </p>
        </div>

        <div className="role-card">
          <FaFileAlt className="role-icon" />
          <h3>Document Verification</h3>
          <p>
            Each document is meticulously reviewed to meet UAE criteria,
            preventing costly delays or rejections.
          </p>
        </div>

        <div className="role-card">
          <FaLayerGroup className="role-icon" />
          <h3>End-to-End Support</h3>
          <p>
            From collection to submission and delivery, our full-cycle service
            ensures a smooth journey for you.
          </p>
        </div>

        <div className="role-card">
          <FaBell className="role-icon" />
          <h3>Updates & Communication</h3>
          <p>
            Stay informed with real-time updates and clear communication
            throughout the attestation process.
          </p>
        </div>
      </div>

      {/* Conclusion */}
      <div className="role-conclusion">
        <p>
          <strong>In conclusion</strong>, UAE attestation services in Bangalore
          play a vital role in simplifying the documentation journey for those
          moving to the Emirates. With expertise, efficiency, and reliable
          support, they ensure your documents are legally recognized without the
          hassle.
        </p>
      </div>
    </section>
  );
};

export default HomeRole;
