import React, { useState } from 'react';
import CareerPathCard from '../components/CareerPathCard';
import { careerPaths, categories } from '../data/careers';
import '../styles/CareerPathsPage.css';

const CareerPathsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');

  // Filter careers
  const filteredCareers = careerPaths.filter(career => {
    const matchesCategory = selectedCategory === '' || career.category === selectedCategory;
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Sort careers
  const sortedCareers = [...filteredCareers].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'salary') {
      // Extract first number from salary string for comparison
      const getSalary = (str) => parseInt(str.match(/\d+/)[0]);
      return getSalary(b.averageSalary) - getSalary(a.averageSalary);
    }
    return 0;
  });

  return (
    <div className="careers-page">
      <div className="careers-header">
        <h1>Explore Career Paths</h1>
        <p>Discover various career opportunities and their requirements</p>
      </div>

      <div className="careers-filters">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search careers, skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="career-search"
          />
        </div>

        <div className="filter-controls">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-filter"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-filter"
          >
            <option value="title">Sort by Name</option>
            <option value="salary">Sort by Salary</option>
          </select>
        </div>
      </div>

      <div className="careers-stats">
        <div className="stat-card">
          <h3>{filteredCareers.length}</h3>
          <p>Career Options</p>
        </div>
        <div className="stat-card">
          <h3>{categories.length}</h3>
          <p>Categories</p>
        </div>
        <div className="stat-card">
          <h3>100+</h3>
          <p>Companies Hiring</p>
        </div>
      </div>

      <div className="careers-grid">
        {sortedCareers.map(career => (
          <CareerPathCard key={career.id} career={career} />
        ))}
      </div>
    </div>
  );
};

export default CareerPathsPage;
