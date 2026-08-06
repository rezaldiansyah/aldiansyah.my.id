import React, { useState, useEffect } from 'react';
import './App.css';
import { profileData } from './data';
import { FaLinkedinIn, FaEnvelope, FaChevronDown, FaArrowUp, FaDownload, FaQrcode, FaSun, FaMoon } from 'react-icons/fa';
import QRCode from 'qrcode';

function App() {
  const { name, position, bio, photo_url, linkedin_url, email_url, about, achievements, experience, education, skills, languages, phone } = profileData;

  // Theme Toggle State
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showQR, setShowQR] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const vCardString = React.useMemo(() => {
    const nameParts = name.split(',')[0].split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');
    const currentCompany = experience && experience.length > 0 ? experience[0].company : 'PT Shifr Asia Inovasi';

    return `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${name.split(',')[0]}
ORG:${currentCompany}
TITLE:${position.split('|')[0].trim()}
EMAIL:${email_url.replace('mailto:', '')}
${phone ? `TEL;TYPE=CELL:${phone}\n` : ''}URL:${linkedin_url}
NOTE:${bio.substring(0, 200)}...
END:VCARD`;
  }, [name, position, email_url, phone, linkedin_url, bio, experience]);

  // Generate vCard
  const generateVCard = React.useCallback(() => {
    const nameParts = name.split(',')[0].split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    const blob = new Blob([vCardString], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${firstName}_${lastName}.vcf`;
    link.click();
    URL.revokeObjectURL(url);
  }, [name, vCardString]);

  // Handle Auto-Download
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('action') === 'download') {
      generateVCard();
    }
  }, [generateVCard]);

  // Generate QR Code on mount
  useEffect(() => {
    const downloadUrl = window.location.origin + window.location.pathname + '?action=download';
    QRCode.toDataURL(downloadUrl, {
      width: 200,
      margin: 2,
      color: {
        dark: isDarkMode ? '#374da0' : '#374da0',
        light: isDarkMode ? '#1a1a2e' : '#ffffff'
      }
    }).then(url => setQrCodeUrl(url));
  }, [isDarkMode]);

  // Apply theme class to body
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>

      <div className="header">
        <div className="logo"></div>
        <div className="menu-dots">&bull;&bull;&bull;</div>
      </div>

      <img src={photo_url} alt="Profile" className="profile-img" />

      <h1 className="name">{name}</h1>
      <p className="position">{position}</p>

      <div className="bio-box">
        {bio}
      </div>

      {/* Action Buttons Row */}
      <div className="action-row">
        <button onClick={generateVCard} className="btn btn-primary">
          <FaDownload /> ADD TO CONTACT
        </button>
      </div>

      {/* Social Icons Row */}
      <div className="social-row">
        <a href={linkedin_url} className="btn btn-icon" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>

        <a href={email_url} className="btn btn-icon">
          <FaEnvelope />
        </a>

        <button onClick={() => setShowQR(!showQR)} className="btn btn-icon">
          <FaQrcode />
        </button>
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div className="qr-modal" onClick={() => setShowQR(false)}>
          <div className="qr-content" onClick={e => e.stopPropagation()}>
            <h3>Scan to Connect</h3>
            {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
            <p>aldiansyah.my.id</p>
            <button onClick={() => setShowQR(false)} className="btn btn-outline">Close</button>
          </div>
        </div>
      )}

      {/* VIEW PROFILE BUTTON */}
      <a href="#profile-detail" className="btn btn-outline">View Profile</a>
      <div className="arrow-down"><FaChevronDown /></div>


      {/* PROFILE DETAIL SECTION */}
      <div id="profile-detail">

        <h2 className="section-title">About Me</h2>
        <div className="detail-card center-text">
          <p>{about}</p>
        </div>

        <h2 className="section-title">Selected Achievements</h2>
        {achievements.map((ach, index) => (
          <div key={index} className="detail-card achievement-card">
            <h3>{ach.title}</h3>
            <p>{ach.desc}</p>
          </div>
        ))}

        <h2 className="section-title">Professional Experiences</h2>
        {experience.map((exp, index) => (
          <div key={index} className="detail-card">
            <h3>{exp.role}</h3>
            <div className="meta">{exp.company} | {exp.period}</div>
            <p>{exp.desc}</p>
          </div>
        ))}

        <h2 className="section-title">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="detail-card">
            <h3>{edu.degree}</h3>
            <div className="meta">{edu.school} | {edu.year}</div>
          </div>
        ))}

        <h2 className="section-title">Skills</h2>
        <div className="skills-container mb-30">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>

        <h2 className="section-title">Languages</h2>
        <div className="skills-container">
          {languages.map((lang, index) => (
            <span key={index} className="skill-badge lang-badge">{lang}</span>
          ))}
        </div>

        <div className="back-to-top">
          <a href="#" className="back-link">Back to Top <FaArrowUp /></a>
        </div>

        <a href="https://vouce.me" target="_blank" rel="noopener noreferrer" className="footer-logo">VOUCE.ME</a>
      </div>
    </div>
  );
}

export default App;
