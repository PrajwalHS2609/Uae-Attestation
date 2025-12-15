"use client";
import React from "react";
import "./PopupForm.css";
import { HiMiniXMark } from "react-icons/hi2";
import Swal from "sweetalert2";
import Image from "next/image";
import popupImg from "@/Images/popupImg.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const PopupForm = () => {
  const handleExit = () => {
    document.querySelector(".popup-container").style.display = "none";
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // ✅ Add your Web3Forms access key
    formData.append("access_key", "f333e4b3-a1ed-4165-a06a-0db699456e2d");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mail Sent successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
  };
  return (
    <div className="popup-container">
      <div className="popup-wrapper">
        {/* Left Side - Image */}
        <div className="popup-content">
          <Image src={popupImg} alt="popup" width={400} height={500} />
        </div>

        {/* Right Side - Form */}
        <div className="popup-content form-side">
          <div className="popup-exit">
            <HiMiniXMark className="popup-exitIcon" onClick={handleExit} />
          </div>
          <h2>Book Now</h2>
          <form className="popup-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Full Name" name="name" required />

            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />
            <input
              type="text"
              name="booking-subject"
              placeholder="Enter subject"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
            ></textarea>
            <button type="submit">
              Submit{" "}
              <MdKeyboardArrowRight className="heroSection-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
