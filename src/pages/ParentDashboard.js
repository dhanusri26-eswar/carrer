import React from 'react';
import '../styles/ParentDashboard.css'; // ✅ correct path for CSS (create this file)

const ParentDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Parent Dashboard</h1>
      <p>Welcome to the Parent Dashboard! Here you can view your child’s career recommendations, progress reports, and feedback.</p>

      <div className="dashboard-section">
        <h3>Career Recommendations</h3>
        <p>Based on student interests and performance data.</p>
      </div>

      <div className="dashboard-section">
        <h3>Student Progress</h3>
        <p>Track ongoing assessments, completed tasks, and reports.</p>
      </div>

      <div className="dashboard-section">
        <h3>Notifications</h3>
        <p>No new alerts at this time.</p>
      </div>
    </div>
  );
};

export default ParentDashboard;
