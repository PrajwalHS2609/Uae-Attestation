"use client";
import React from "react";
import "./HomeStats.css";
import CountUp from "react-countup";

const HomeStats = () => {
  const metric = [
    { id: "1", number: 2600, category: "Educational Certificate", duration: 8, suffix: "+" },
    { id: "2", number: 1285, category: "Marriage Certificate", duration: 8, suffix: "+" },
    { id: "3", number: 2180, category: "Birth Certificate", duration: 8, suffix: "+" },
    { id: "4", number: 315, category: "Commercial Documents", duration: 8, suffix: "+" },
  ];

  return (
    <div className="stats-container">
      <div className="stats-content">
        {metric.map((x) => (
          <div className="stats-item" key={x.id}>
            <span>
              <CountUp start={0} end={x.number} duration={x.duration} suffix={x.suffix} />
            </span>
            <h6>{x.category}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeStats;
