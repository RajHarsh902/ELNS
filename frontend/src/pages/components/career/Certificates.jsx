import React from "react";
import "./Certificates.css"; // Importing the improved CSS file

const Certificates = ({ certificates }) => {
  const certificatesList = certificates.map((certificate, index) => (
    <li key={index} className="certificateItem">
      <a
        href={certificate.link}
        target="_blank"
        rel="noopener noreferrer"
        className="certificateLink"
      >
        {certificate.name}
      </a>
    </li>
  ));
  return (
    <div className="certificatesContainer">
      <h2 className="certificatesTitle">📜 Free Certification</h2>
      <ul className="certificatesList">
        {certificatesList}
      </ul>
    </div>
  );
};

export default Certificates;
