"use client";

import React from "react";
import "./HomeFaq.css";
import Accordion from "react-bootstrap/Accordion";
import faq from "@/Images/faq.png";
import Image from "next/image";

const HomeFaq = ({ data }) => {
  return (
    <div className="homeFaq-container">
      <div className="homeFaq-wrapper">

        <div className="homeFaq-content">

          <h2>{data?.title}</h2>

          <Accordion defaultActiveKey="0">

            {data?.faqs?.map((item, index) => (
              <Accordion.Item
                className="homeFaq-accItem"
                eventKey={index.toString()}
                key={index}
              >

                <Accordion.Header className="homeFaq-accHeader">
                  <h5>
                    {index + 1}. {item.question}
                  </h5>
                </Accordion.Header>

                <Accordion.Body className="homeFaq-body">
                  <p>{item.answer}</p>
                </Accordion.Body>

              </Accordion.Item>
            ))}

          </Accordion>

        </div>

        <div className="homeFaq-content">
          <Image src={faq} alt="Frequently Asked Questions" />
        </div>

      </div>
    </div>
  );
};

export default HomeFaq;
