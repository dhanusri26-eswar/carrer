import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Perfect Career Path</h1>
          <p className="hero-subtitle">
            Get personalized course recommendations based on your interests and skills
          </p>
          <Link to="/quiz" className="cta-button">
            Take Free Career Quiz →
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-icon">📝</div>
            <h3>Take a Quick Quiz</h3>
            <p>Answer simple questions about your interests and strengths</p>
          </div>
          <div className="step">
            <div className="step-icon">📊</div>
            <h3>Get Personalized Results</h3>
            <p>Our AI analyzes your responses to find best matches</p>
          </div>
          <div className="step">
            <div className="step-icon">🎓</div>
            <h3>Find Your Path</h3>
            <p>Discover courses, colleges, and career opportunities</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Smart Career Assessment</h3>
            <p>10-minute quiz to discover careers that match your personality</p>
            <Link to="/quiz" className="feature-button">Start Quiz</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏫</div>
            <h3>Government Colleges Near You</h3>
            <p>Find quality education options in your area with complete details</p>
            <Link to="/colleges" className="feature-button">Browse Colleges</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💼</div>
            <h3>Explore Career Options</h3>
            <p>See job opportunities and growth prospects for each course</p>
            <Link to="/careers" className="feature-button">View Careers</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat">
            <h3>1000+</h3>
            <p>Students Guided</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Colleges Listed</p>
          </div>
          <div className="stat">
            <h3>100+</h3>
            <p>Career Paths</p>
          </div>
          <div className="stat">
            <h3>28</h3>
            <p>States Covered</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Find Your Future?</h2>
        <p>No registration required. Get results in 10 minutes.</p>
        <Link to="/quiz" className="cta-button">Take Free Career Quiz Now</Link>
      </section>
    </div>
  );
};

export default HomePage;
