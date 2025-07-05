import React, { useState, useEffect } from 'react';
import NavigationButton from './components/common/NavigationButton';
import Courses from './components/career/Courses';
import Certificates from './components/career/Certificates';
import { courses, certificates } from '../assets/source';
import './Career.css';

const Career = () => {
  const [activeSection, setActiveSection] = useState('courses');
  const [showBanner, setShowBanner] = useState(true);

  const handleNavigationClick = (section) => {
    setActiveSection(section);
  };

  const handleBannerClick = () => {
    window.open('https://whatsapp.com/channel/0029VbAu37jE50Ud4uQDEx3F', '_blank');
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
  <div
    style={{
      background: 'linear-gradient(90deg, #e0f7fa 60%, #b2ebf2 100%)',
      color: '#006064',
      padding: '1.2rem 1rem',
      textAlign: 'center',
      position: 'relative',
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      margin: '1.5rem auto',
      maxWidth: 600,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem'
    }}
  >
    <span style={{
      fontWeight: 500,
      fontSize: '1.1rem',
      flex: '1 1 200px',
      // minWidth: 180
    }}>
      📢 Follow the ELNS whatsapp Student Help Desk
      <br />
      Get guidence at each step of your professional journey!
    </span>
    <button
      style={{
        background: 'linear-gradient(90deg, #006064 60%, #0097a7 100%)',
        color: '#fff',
        border: 'none',
        padding: '0.5rem 1.2rem',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        transition: 'background 0.2s'
      }}
      onClick={handleBannerClick}
    >
      Follow
    </button>
    <button
      style={{
        background: 'transparent',
        color: '#006064',
        border: 'none',
        fontWeight: 'bold',
        fontSize: '1.3rem',
        cursor: 'pointer',
        marginLeft: '0.5rem',
        lineHeight: 1
      }}
      aria-label="Close banner"
      onClick={() => setShowBanner(false)}
    >
      ×
    </button>
  </div>
)}

      <div className='careerMain'>
        <div className='careerContent'>
          <NavigationButton
            text='Courses'
            active={activeSection === 'certificates'}
            direction='left'
            onClick={() => handleNavigationClick('courses')}
          />
          <div className={`courses ${activeSection === 'courses' ? 'active' : 'inactive'}`}>
            <h2>Courses</h2>
            <Courses courses={courses} />
            
          </div>
          <NavigationButton
            text='Certificates'
            active={activeSection === 'courses'}
            direction='right'
            onClick={() => handleNavigationClick('certificates')}
          />
          <div className={`certificates ${activeSection === 'certificates' ? 'active' : 'inactive'}`}>
            <h2>Certificates</h2>
            <Certificates certificates={certificates} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;