import React, { useState, useEffect } from 'react';
import CollegeCard from '../components/CollegeCard';
import { collegesData, states, types, ownership } from '../data/colleges';
import '../styles/CollegesPage.css';

const CollegesPage = () => {
  const [selectedState, setSelectedState] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedOwnership, setSelectedOwnership] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [filteredColleges, setFilteredColleges] = useState(collegesData);

  useEffect(() => {
    let filtered = collegesData.filter(college => {
      const matchesState = selectedState === 'All' || college.state === selectedState;
      const matchesType = selectedType === 'All' || college.type === selectedType;
      const matchesOwnership = selectedOwnership === 'All' || college.ownership === selectedOwnership;
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           college.location.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesState && matchesType && matchesOwnership && matchesSearch;
    });

    // Sort colleges
    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'established':
          return b.established - a.established;
        default:
          return 0;
      }
    });

    setFilteredColleges(filtered);
  }, [selectedState, selectedType, selectedOwnership, searchTerm, sortBy]);

  const clearFilters = () => {
    setSelectedState('All');
    setSelectedType('All');
    setSelectedOwnership('All');
    setSearchTerm('');
    setSortBy('rating');
  };

  return (
    <div className="colleges-page">
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">Find Your Perfect College</h1>
          <p className="page-subtitle">Explore {collegesData.length}+ colleges across India</p>
        </div>
      </div>

      <div className="search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search colleges by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="filters-section">
        <div className="filters-row">
          <div className="filter-group">
            <label>State</label>
            <select 
              value={selectedState} 
              onChange={(e) => setSelectedState(e.target.value)}
              className="filter-select"
            >
              <option value="All">All States</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Type</label>
            <select 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Ownership</label>
            <select 
              value={selectedOwnership} 
              onChange={(e) => setSelectedOwnership(e.target.value)}
              className="filter-select"
            >
              {ownership.map(own => (
                <option key={own} value={own}>{own}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Sort By</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="rating">Rating</option>
              <option value="name">Name</option>
              <option value="established">Established Year</option>
            </select>
          </div>

          <button className="clear-filters-btn" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>

      <div className="results-summary">
        <p className="results-count">
          Showing <strong>{filteredColleges.length}</strong> colleges
        </p>
        <div className="view-options">
          <span className="view-option active">Grid View</span>
          <span className="view-option">List View</span>
        </div>
      </div>

      <div className="colleges-grid">
        {filteredColleges.length > 0 ? (
          filteredColleges.map(college => (
            <CollegeCard key={college.id} college={college} />
          ))
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No colleges found</h3>
            <p>Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>

      <div className="info-section">
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">🎓</div>
            <h3>Government Colleges</h3>
            <p>Quality education at affordable fees with excellent infrastructure</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🏛️</div>
            <h3>Private Colleges</h3>
            <p>Modern facilities, industry connections, and placement support</p>
          </div>
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Location Matters</h3>
            <p>Choose colleges based on proximity, climate, and opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegesPage;
