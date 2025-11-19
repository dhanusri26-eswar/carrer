import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/');
    toggleMenu();
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Career Advisor 🎓
        </Link>
        
        <div className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <Link to="/" className="nav-link" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/quiz" className="nav-link" onClick={toggleMenu}>
            Take Quiz
          </Link>
          <Link to="/colleges" className="nav-link" onClick={toggleMenu}>
            Colleges
          </Link>
          <Link to="/careers" className="nav-link" onClick={toggleMenu}>
            Career Paths
          </Link>
          <Link to="/scholarships" className="nav-link" onClick={toggleMenu}>
            Scholarships
          </Link>
          <Link to="/exams" className="nav-link" onClick={toggleMenu}>
            Entrance Exams
          </Link>
          
          {currentUser ? (
            <>
              <Link to="/profile" className="nav-link" onClick={toggleMenu}>
                Profile ({currentUser.name})
              </Link>
              <button onClick={handleLogout} className="nav-link nav-login">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="nav-link nav-login" onClick={toggleMenu}>
              Login
            </Link>
          )}
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
