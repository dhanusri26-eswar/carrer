import React, { useState } from 'react';
import '../styles/ExamCard.css';

const ExamCard = ({ exam }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="exam-card">
      <div className="exam-header">
        <span className="exam-icon">{exam.icon}</span>
        <div>
          <h3>{exam.name}</h3>
          <p className="full-name">{exam.fullName}</p>
        </div>
      </div>

      <div className="exam-info">
        <div className="info-item">
          <strong>Category:</strong>
          <span className="category-tag">{exam.category}</span>
        </div>
        <div className="info-item">
          <strong>Exam Date:</strong>
          <span>{exam.examDate}</span>
        </div>
        <div className="info-item">
          <strong>Deadline:</strong>
          <span className="deadline">{exam.applicationDeadline}</span>
        </div>
      </div>

      <button 
        className="details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Details' : 'View Details'}
      </button>

      {showDetails && (
        <div className="exam-details">
          <div className="detail-section">
            <h4>Eligibility</h4>
            <p>{exam.eligibility}</p>
          </div>
          
          <div className="detail-section">
            <h4>Exam Pattern</h4>
            <p>{exam.examPattern}</p>
          </div>
          
          <div className="detail-section">
            <h4>Total Marks & Duration</h4>
            <p>{exam.totalMarks} | {exam.duration}</p>
          </div>

          <a 
            href={exam.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="official-link"
          >
            Visit Official Website →
          </a>
        </div>
      )}
    </div>
  );
};

export default ExamCard;
