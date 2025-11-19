import React from 'react';
import '../styles/CourseRecommendation.css';

const CourseRecommendation = ({ course }) => {
  return (
    <div className="course-card">
      <h4>{course.name}</h4>
      <p className="duration">Duration: {course.duration}</p>
      <p className="description">{course.description}</p>
      
      <div className="careers">
        <h5>Career Options:</h5>
        <ul>
          {course.careers.map((career, index) => (
            <li key={index}>{career}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseRecommendation;
