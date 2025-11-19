import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { courseRecommendations } from '../data/courses';
import { collegesData } from '../data/colleges';
import { scholarshipsData } from '../data/scholarships';
import { examsData } from '../data/exams';
import CourseRecommendation from '../components/CourseRecommendation';
import CollegeCard from '../components/CollegeCard';
import ScholarshipCard from '../components/ScholarshipCard';
import ExamCard from '../components/ExamCard';
import '../styles/ResultsPage.css';

const ResultsPage = () => {
  const location = useLocation();
  const { result, userMarks, cutoff } = location.state || {};
  
  // Get recommendations based on primary path
  const primaryPath = result?.primaryPath || 'science';
  const recommendations = courseRecommendations[primaryPath] || courseRecommendations['science'];

  // Filter colleges based on career path
  const getRelevantColleges = () => {
    let filtered = [];
    
    switch(primaryPath) {
      case 'engineering':
        filtered = collegesData.filter(college => 
          college.type === 'Engineering' || college.type === 'Technical'
        );
        break;
      case 'medical':
        filtered = collegesData.filter(college => 
          college.type === 'Medical'
        );
        break;
      case 'commerce':
        filtered = collegesData.filter(college => 
          college.type === 'Commerce'
        );
        break;
      case 'arts':
        filtered = collegesData.filter(college => 
          college.type === 'Arts & Science' || college.type === 'Law'
        );
        break;
      case 'govt':
        // For government jobs, show all colleges as they might need any degree
        filtered = collegesData;
        break;
      default:
        filtered = collegesData;
    }

    return filtered;
  };

  // Filter scholarships based on career path and marks
  const getRelevantScholarships = () => {
    let filtered = [];
    
    // Add merit-based scholarships if marks are good
    if (userMarks && userMarks >= 80) {
      filtered.push(...scholarshipsData.filter(s => s.category === 'Merit-based'));
    }
    
    // Add career-specific scholarships
    switch(primaryPath) {
      case 'engineering':
        // For engineering students, show AICTE scholarships
        filtered.push(...scholarshipsData.filter(s => 
          s.name.includes('AICTE') || s.name.includes('Inspire')
        ));
        break;
      case 'medical':
        // Medical students might need all scholarships due to high fees
        filtered.push(...scholarshipsData);
        break;
      case 'arts':
      case 'commerce':
        // Show general scholarships
        filtered.push(...scholarshipsData.filter(s => 
          s.category === 'Merit-based' || s.category === 'SC/ST' || s.category === 'Minority'
        ));
        break;
      case 'govt':
        // Show all scholarships as they need to complete graduation
        filtered.push(...scholarshipsData);
        break;
    }
    
    // Remove duplicates
    const uniqueScholarships = filtered.filter((scholarship, index, self) =>
      index === self.findIndex((s) => s.id === scholarship.id)
    );
    
    return uniqueScholarships;
  };

  // Filter entrance exams based on career path
  const getRelevantExams = () => {
    let filtered = [];
    
    switch(primaryPath) {
      case 'engineering':
        filtered = examsData.filter(exam => 
          exam.category === 'Engineering' || exam.name === 'CUET'
        );
        // Add specific exams based on specialization
        if (result?.specificField === 'cs') {
          // CS students might also consider other tech exams
          filtered.push(...examsData.filter(exam => 
            exam.name.includes('GATE') || exam.name.includes('BITSAT')
          ));
        }
        break;
        
      case 'medical':
        filtered = examsData.filter(exam => 
          exam.category === 'Medical'
        );
        // Add CUET for BSc courses
        if (result?.specificField === 'pharmacy' || result?.specificField === 'nursing') {
          filtered.push(...examsData.filter(exam => exam.name === 'CUET'));
        }
        break;
        
      case 'commerce':
        filtered = examsData.filter(exam => 
          exam.category === 'Commerce' || exam.name === 'CUET'
        );
        break;
        
      case 'arts':
        filtered = examsData.filter(exam => 
          exam.category === 'Law' || exam.name === 'CUET'
        );
        // Add design exams if interested in design
        if (result?.specificField === 'design') {
          // Would add NIFT, NID etc if available in data
        }
        break;
        
      case 'govt':
        filtered = examsData.filter(exam => 
          exam.category === 'Defence' || exam.name === 'NDA'
        );
        // Also show CUET for graduation
        filtered.push(...examsData.filter(exam => exam.name === 'CUET'));
        break;
        
      default:
        filtered = [examsData.find(exam => exam.name === 'CUET')].filter(Boolean);
    }
    
    // Remove duplicates
    const uniqueExams = filtered.filter((exam, index, self) =>
      index === self.findIndex((e) => e.id === exam.id)
    );
    
    return uniqueExams;
  };

  const relevantColleges = getRelevantColleges();
  const relevantScholarships = getRelevantScholarships();
  const relevantExams = getRelevantExams();

  // Get specific career recommendation based on detailed answers
  const getCareerTitle = () => {
    if (result?.specificField) {
      switch(result.specificField) {
        case 'cs': return 'Computer Science Engineering';
        case 'mech': return 'Mechanical Engineering';
        case 'civil': return 'Civil Engineering';
        case 'ece': return 'Electronics & Communication';
        case 'mbbs': return 'Medicine (MBBS)';
        case 'bds': return 'Dentistry (BDS)';
        case 'pharmacy': return 'Pharmacy';
        case 'nursing': return 'Nursing';
        case 'ca': return 'Chartered Accountancy';
        case 'mba': return 'Business Administration';
        case 'banking': return 'Banking & Finance';
        case 'cs': return 'Company Secretary';
        case 'literature': return 'Literature & Writing';
        case 'design': return 'Arts & Design';
        case 'psychology': return 'Psychology';
        case 'masscom': return 'Mass Communication';
        case 'upsc': return 'Civil Services';
        default: return primaryPath.toUpperCase();
      }
    }
    return primaryPath.toUpperCase();
  };

  return (
    <div className="results-page">
      <div className="results-container">
        <h1>Your Career Assessment Results</h1>
        
        <div className="result-summary">
          <h2>Recommended Path: {getCareerTitle()}</h2>
          {result?.specialization && (
            <p className="specialization">
              Specialization Interest: <strong>{result.specialization.replace(/_/g, ' ').toUpperCase()}</strong>
            </p>
          )}
          {userMarks && (
            <p className="marks-info">Your 12th Marks: <strong>{userMarks}%</strong></p>
          )}
          {result?.timeline && (
            <p className="timeline-info">
              You plan to start: <strong>{result.timeline === 'immediate' ? 'Immediately' : 
                                         result.timeline === '3months' ? 'Within 3 months' :
                                         result.timeline === '6months' ? 'Within 6 months' : 
                                         'After results'}</strong>
            </p>
          )}
        </div>

        <div className="courses-section">
          <h3>Recommended Courses for You</h3>
          <div className="courses-grid">
            {recommendations?.courses ? 
              recommendations.courses.map((course, index) => (
                <CourseRecommendation key={index} course={course} />
              )) :
              <p>Exploring course recommendations for your selected path...</p>
            }
          </div>
        </div>

        {/* College Recommendations Section */}
        <div className="colleges-section">
          <h3>Top Colleges for Your Career Path</h3>
          {relevantColleges.length > 0 ? (
            <div className="colleges-grid">
              {relevantColleges.slice(0, 6).map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>
          ) : (
            <p>No specific colleges found for this path. Please explore all colleges.</p>
          )}
        </div>

        {/* Scholarship Recommendations Section */}
        <div className="scholarships-section">
          <h3>Scholarships for You</h3>
          {relevantScholarships.length > 0 ? (
            <>
              <p className="scholarship-intro">
                Based on your career choice {userMarks && userMarks >= 80 ? 'and excellent marks' : ''}, 
                here are relevant scholarships:
              </p>
              <div className="scholarships-grid">
                {relevantScholarships.slice(0, 4).map((scholarship) => (
                  <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
                ))}
              </div>
              <Link to="/scholarships" className="view-all-scholarships">
                View All Scholarships →
              </Link>
            </>
          ) : (
            <p>Check our scholarships page for financial aid opportunities.</p>
          )}
        </div>

        {/* Entrance Exams Section */}
        <div className="entrance-exams-section">
          <h3>Important Entrance Exams for You</h3>
          {relevantExams.length > 0 ? (
            <>
              <p className="exams-intro">
                Based on your {getCareerTitle()} interest, prepare for these entrance exams:
              </p>
              <div className="exams-grid">
                {relevantExams.slice(0, 3).map((exam) => (
                  <ExamCard key={exam.id} exam={exam} />
                ))}
              </div>
              <Link to="/exams" className="view-all-exams">
                View All Entrance Exams →
              </Link>
            </>
          ) : (
            <p>Check our exams page for entrance exam information.</p>
          )}
        </div>

        {/* Next Steps Section */}
        <div className="next-steps">
          <h3>Your Next Steps</h3>
          <div className="steps-list">
            {primaryPath === 'engineering' && (
              <>
                <p>✓ Start preparing for JEE Main/Advanced</p>
                <p>✓ Focus on Physics, Chemistry, and Mathematics</p>
                <p>✓ Research engineering colleges and their cutoffs</p>
              </>
            )}
            {primaryPath === 'medical' && (
              <>
                <p>✓ Start preparing for NEET exam</p>
                <p>✓ Focus on Physics, Chemistry, and Biology</p>
                <p>✓ Research medical colleges and their fees</p>
              </>
            )}
            {primaryPath === 'commerce' && (
              <>
                <p>✓ Choose between professional courses (CA/CS) or graduation</p>
                <p>✓ Build strong foundation in accounting and economics</p>
                <p>✓ Explore internship opportunities</p>
              </>
            )}
            {primaryPath === 'arts' && (
              <>
                <p>✓ Identify your specific area of interest</p>
                <p>✓ Build a portfolio if choosing creative fields</p>
                <p>✓ Research specialized colleges in your field</p>
              </>
            )}
            {primaryPath === 'govt' && (
              <>
                <p>✓ Choose your graduation stream wisely</p>
                <p>✓ Start preparing for competitive exams early</p>
                <p>✓ Stay updated with current affairs</p>
              </>
            )}
          </div>
        </div>

        <div className="actions">
          <Link to="/quiz" className="retake-button">Retake Quiz</Link>
          <Link to="/colleges" className="explore-button">Explore All Colleges</Link>
          <Link to="/scholarships" className="scholarship-button">Find Scholarships</Link>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
