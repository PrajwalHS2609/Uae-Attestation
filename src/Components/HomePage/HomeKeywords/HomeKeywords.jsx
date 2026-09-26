import React from "react";
import "./HomeKeywords.css";

const HomeKeywords = ({ data }) => {
  return (
    <div className="keywords-container" id="">
      <ul className="acl-list">
        {data?.keywords?.map((keyword, index) => (
          <li key={index} className="acl-item">
            {keyword}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeKeywords;
