import React, { useState, useEffect } from "react";
import axios from "axios";
import DomainList from "./DomainList";
import pin from "../../../../assets/images/boardPin.png";
import "./Domain.css";

const Domain = (props) => {
  const domains = [
    { name: "Marketing", data: props.domains.MarketingDomain },
    { name: "Finance", data: props.domains.FinanceDomain },
    { name: "HR", data: props.domains.HRDomain },
  ];

  const colors = ["#FFD3B6", "#97E16D", "#FFEB3B"]; // Sticky Note Colors: Pink, Green, Yellow
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTearing, setIsTearing] = useState(false);
  const [noteColor, setNoteColor] = useState(colors[Math.floor(Math.random() * colors.length)]); // Pick once per render
  const [announcement, setActiveSection] = useState([])

  const handleTear = () => {
    setIsTearing(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % domains.length);
      setNoteColor(colors[Math.floor(Math.random() * colors.length)]); // Change color when switching notes
      setIsTearing(false);
    }, 800); // Matches CSS animation duration
  };

  const handleClick = (e) => {
    const selection = window.getSelection();
    if (selection.toString().length === 0) {
      handleTear();
    }
  };

  // Function to handle announcement updates
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('/api/updates');
        setActiveSection(response.data.map(item => item.heading));
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    }
    fetchAnnouncements();
  }, []);

  return (
    <div className="domainContainer">
      <div className="domainMain">
      <img src={pin} alt="pin" className="pin" />

{/* Front Note - Current Domain */}
<div
  className={`domain front-domain ${isTearing ? "tear" : ""}`}
  onMouseEnter={handleTear}
  onClick={handleClick}
  style={{ backgroundColor: noteColor }} // Uses persistent color
>
  <h3>{domains[currentIndex].name}</h3>
  <DomainList domain={domains[currentIndex].data} />
</div>

{/* Back Note - Next Domain */}
<div className="domain back-domain" style={{ backgroundColor: noteColor }}>
  <h3>{domains[(currentIndex + 1) % domains.length].name}</h3>
  <DomainList domain={domains[(currentIndex + 1) % domains.length].data} />
</div>
      </div>

      {/* Extra Note - Positioned to the right */}
      <div
        className="extra-domain"

      >
            <img src={pin} alt="pin" className="pin" />

        <div className="domain">
        <h3>Important Updates</h3>
        <ul className="domainListContainer">
          {announcement.length > 0 ? (
            announcement.map((item, index) => (
                <li key={index} className="domainListItem">{item}</li>
            ))
          ) : (
            <>
              <li>🚀 Exciting New Opportunities</li>
              <li>📢 Stay Tuned for Announcements</li>
            </>
          )}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Domain;
