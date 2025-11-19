import React, { useState } from 'react';
import '../styles/ScholarshipCard.css';

const ScholarshipCard = ({ scholarship }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="scholarship-card">
      <div className="card-header">
        <span className="scholarship-icon">{scholarship.icon}</span>
        <h3>{scholarship.name}</h3>
      </div>
      
      <div className="scholarship-amount">
        <strong>{scholarship.amount}</strong>
      </div>

      <p className="eligibility">{scholarship.eligibility}</p>
      
      <div className="card-footer">
        <span className="category-tag">{scholarship.category}</span>
        <span className="deadline">Deadline: {scholarship.deadline}</span>
      </div>

      <button 
        className="details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Details' : 'View Details'}
      </button>

      {showDetails && (
        <div className="scholarship-details">
          <p className="description">{scholarship.description}</p>
          
          <div className="documents">
            <h4>Documents Required:</h4>
            <ul>
              {scholarship.documentsRequired.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>

          <a 
            href={scholarship.applicationLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="apply-btn"
          >
            Apply Now →
          </a>
        </div>
      )}
    </div>
  );
};

export default ScholarshipCard;
