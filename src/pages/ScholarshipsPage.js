import React, { useState } from 'react';
import ScholarshipCard from '../components/ScholarshipCard';
import { scholarshipsData, scholarshipCategories } from '../data/scholarships';
import '../styles/ScholarshipsPage.css';

const ScholarshipsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredScholarships = scholarshipsData.filter(scholarship => {
    const matchesCategory = selectedCategory === 'All' || scholarship.category === selectedCategory;
    const matchesSearch = scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.eligibility.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="scholarships-page">
      <div className="scholarships-header">
        <h1>Scholarships & Financial Aid</h1>
        <p>Find government scholarships to fund your education</p>
      </div>

      <div className="search-filter-section">
        <input
          type="text"
          placeholder="Search scholarships..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="scholarship-search"
        />

        <div className="category-filters">
          {scholarshipCategories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="results-info">
        <p>Showing {filteredScholarships.length} scholarships</p>
      </div>

      <div className="scholarships-grid">
        {filteredScholarships.map(scholarship => (
          <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
        ))}
      </div>

      <div className="how-to-apply">
        <h2>How to Apply for Scholarships</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Check Eligibility</h3>
            <p>Ensure you meet all criteria including income limits, category, and academic requirements</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Gather Documents</h3>
            <p>Collect all required documents like income certificate, marksheets, and ID proofs</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Apply Online</h3>
            <p>Visit the official website and fill the application form before the deadline</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipsPage;
