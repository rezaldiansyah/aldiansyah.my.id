import React, { useState } from 'react';
import './App.css';
import { profileData } from './data';

function App() {
  const { name, position, bio, photo_url, linkedin_url, email_url, about, achievements, experience, education, skills, languages } = profileData;

  return (
    <div className="container">
      <div className="header">
        <div className="logo">BIZUP.ID</div>
        <div className="menu-dots">&bull;&bull;&bull;</div>
      </div>

      <img src={photo_url} alt="Profile" className="profile-img" />

      <h1 className="name">{name}</h1>
      <p className="position">{position}</p>

      <div className="bio-box">
        {bio}
      </div>

      <a href="#" className="btn btn-gold">ADD TO CONTACT</a>

      {/* Social Icons Row */}
      <div className="social-row">
        <a href={linkedin_url} className="btn btn-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>

        <a href={email_url} className="btn btn-icon">
          <i className="fas fa-envelope"></i>
        </a>
      </div>

      {/* VIEW PROFILE BUTTON */}
      <a href="#profile-detail" className="btn btn-outline">View Profile</a>
      <div className="arrow-down"><i className="fas fa-chevron-down"></i></div>

      <div className="footer-logo">BIZUP.ID</div>

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
          <a href="#" className="back-link">Back to Top <i className="fas fa-arrow-up"></i></a>
        </div>
      </div>
    </div>
  );
}

export default App;
