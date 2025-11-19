import React, { useState } from 'react';
import '../styles/CollegeCard.css';

const CollegeCard = ({ college }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={`college-card ${college.ownership?.toLowerCase()}`}>
      <div className="ownership-badge">
        {college.ownership || 'Government'}
      </div>
      
      <div className="college-header">
        <h3>{college.name}</h3>
        <div className="rating">
          <span className="stars">{'⭐'.repeat(Math.floor(college.rating))}</span>
          <span className="rating-number">{college.rating}</span>
        </div>
      </div>

      <div className="college-info">
        <p className="location">
          <i className="icon">📍</i> 
          {college.location}, {college.state}
        </p>
        <p className="type">
          <i className="icon">🏛️</i> 
          {college.type}
        </p>
        <p className="established">
          <i className="icon">📅</i> 
          Established: {college.established}
        </p>
        {college.fees && (
          <p className="fees">
            <i className="icon">💰</i> 
            {college.fees}
          </p>
        )}
      </div>

      <div className="facilities">
        <h4>Facilities:</h4>
        <div className="facility-tags">
          {college.facilities.slice(0, 3).map((facility, index) => (
            <span key={index} className="facility-tag">{facility}</span>
          ))}
          {college.facilities.length > 3 && (
            <span className="facility-tag more">+{college.facilities.length - 3} more</span>
          )}
        </div>
      </div>

      <button 
        className="details-button"
        onClick={() => setShowDetails(!showDetails)}
      >
        <span className="button-text">
          {showDetails ? 'Hide Courses' : 'View Courses'}
        </span>
        <span className="button-icon">
          {showDetails ? '▲' : '▼'}
        </span>
      </button>

      {showDetails && (
        <div className="courses-list">
          <h4>Available Courses:</h4>
          <ul>
            {college.courses.map((course, index) => (
              <li key={index}>
                <span className="course-bullet">▸</span>
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CollegeCard;
