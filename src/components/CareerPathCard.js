import React, { useState } from 'react';
import '../styles/CareerPathCard.css';

const CareerPathCard = ({ career }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="career-path-card">
      <div className="career-header">
        <span className="career-icon">{career.icon}</span>
        <div>
          <h3>{career.title}</h3>
          <span className="career-category">{career.category}</span>
        </div>
      </div>

      <p className="career-description">{career.description}</p>

      <div className="career-info">
        <div className="info-item">
          <strong>💰 Average Salary:</strong>
          <span>{career.averageSalary}</span>
        </div>
        <div className="info-item">
          <strong>📈 Growth:</strong>
          <span className={`growth-${career.growthProspects.toLowerCase().replace(' ', '-')}`}>
            {career.growthProspects}
          </span>
        </div>
      </div>

      <div className="career-skills">
        <strong>Key Skills:</strong>
        <div className="skills-list">
          {career.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      <button
        className="details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Less Details' : 'More Details'}
      </button>

      {showDetails && (
        <div className="career-details">
          <div className="detail-section">
            <h4>Required Education:</h4>
            <ul>
              {career.requiredEducation.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h4>All Skills Needed:</h4>
            <div className="skills-list">
              {career.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <h4>Top Employers:</h4>
            <ul>
              {career.companies.map((company, index) => (
                <li key={index}>{company}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPathCard;
