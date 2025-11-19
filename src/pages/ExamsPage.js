import React, { useState } from 'react';
import ExamCard from '../components/ExamCard';
import { examsData, examCategories } from '../data/exams';
import '../styles/ExamsPage.css';

const ExamsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExams = examsData.filter(exam => {
    const matchesCategory = selectedCategory === 'All' || exam.category === selectedCategory;
    const matchesSearch = exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exam.fullName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="exams-page">
      <div className="exams-header">
        <h1>Entrance Exams Hub</h1>
        <p>Complete information about all major entrance exams in India</p>
      </div>

      <div className="search-filter-section">
        <input
          type="text"
          placeholder="Search exams..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="exam-search"
        />

        <div className="category-filters">
          {examCategories.map(category => (
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
        <p>Showing {filteredExams.length} entrance exams</p>
      </div>

      <div className="exams-grid">
        {filteredExams.map(exam => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>

      <div className="exam-tips">
        <h2>General Exam Preparation Tips</h2>
        <div className="tips-grid">
          <div className="tip">
            <h3>📚 Start Early</h3>
            <p>Begin preparation at least 6-12 months before the exam date</p>
          </div>
          <div className="tip">
            <h3>📝 Practice Daily</h3>
            <p>Solve previous year papers and take mock tests regularly</p>
          </div>
          <div className="tip">
            <h3>🎯 Stay Focused</h3>
            <p>Create a study schedule and stick to it consistently</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamsPage;
