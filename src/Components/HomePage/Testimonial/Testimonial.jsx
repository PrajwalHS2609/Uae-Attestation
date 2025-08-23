"use client";
import React from "react";
import "./Testimonial.css";
import { Carousel } from "react-bootstrap";

const Testimonial = () => {
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Krishna Sham",
      role: "Marketing Manager",
      feedback:
        "Staffs are very impressive they have done my company related power of attorneys in 5 working days. Status updated properly intime delivery doorstep pick up and drop Moreover they are know the process very much. Highly recommended, Keep it up man",
    },
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Mamatha Yogesh",
      role: "Entrepreneur",
      feedback:
        "Highly recommended. I was required UAE attestation i got reference my friend so submitted to them. The entire process was explained from Mr Nagesh very well with so much easy. Very promptly I got my certificate with attestation. I appreciate all the support and followups from Goodway Attestation. Thank you",
    },
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Skanda Shrihari",
      role: "Software Engineer",
      feedback:
        "Excellent service provided by team Goodway. Done attestation with Goodway finished the process within 7 days and delivered to my residence with proper manner. Payment taken after the workdone Very much impressed Thank you.",
    },
  ];

  return (
    <div className="testimonial-container">

      <div className="testimonial-content1">
        <img
          src="https://images.pexels.com/photos/2103130/pexels-photo-2103130.jpeg"
          alt="testimonial"
        />
      </div>

      {/* Center Carousel */}
      <div className="testimonial-content2">
        <Carousel indicators={false} interval={3000} pause="hover">
          {testimonials.map((t, i) => (
            <Carousel.Item key={i}>
              <div className="testimonial-card">
                <img src={t.img} alt={t.name} className="testimonial-avatar" />
                <h4>{t.name}</h4>
                {/* <span>{t.role}</span> */}
                <p>"{t.feedback}"</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Right Image */}
      <div className="testimonial-content3">
        <img
          src="https://images.pexels.com/photos/3873672/pexels-photo-3873672.jpeg"
          alt="testimonial"
        />
      </div>
    </div>
  );
};

export default Testimonial;
