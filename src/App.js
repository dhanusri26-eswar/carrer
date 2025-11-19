// src/App.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Student pages
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import CollegesPage from "./pages/CollegesPage";
import CareerPathsPage from "./pages/CareerPathsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ResultsPage from "./pages/ResultsPage";
import ProfilePage from "./pages/ProfilePage";
import ScholarshipsPage from "./pages/ScholarshipsPage";
import ExamsPage from "./pages/ExamsPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import SkillsPage from "./pages/SkillsPage";
import GovernmentJobsPage from "./pages/GovernmentJobsPage";
import ForumPage from "./pages/ForumPage";

// Parent pages
import ParentLoginPage from "./pages/ParentLoginPage";
import ParentDashboard from "./pages/ParentDashboard";

import "./App.css";

/* ------------------------------------------------------
   LayoutWrapper hides Navbar/Footer on login-related pages
------------------------------------------------------- */
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const hideLayoutPaths = ["/login", "/signup", "/parent-login"]; // hide navbar/footer here
  const hideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <div className="main-content">{children}</div>
      {!hideLayout && <Footer />}
    </>
  );
};

/* ------------------------------------------------------
   AutoRedirect for logged-in users
------------------------------------------------------- */
const AutoRedirect = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const hideLayoutPaths = ["/login", "/signup"];

    // Redirect logged-in user away from login/signup
    if (user && hideLayoutPaths.includes(location.pathname)) {
      navigate("/profile", { replace: true });
    }
  }, [navigate, location.pathname]);

  return children;
};

/* ------------------------------------------------------
   Main App Component
------------------------------------------------------- */
function App() {
  useEffect(() => {
    // Optional: create demo user if not exists
    const users = localStorage.getItem("users");
    if (!users) {
      const demoUser = {
        id: 1,
        username: "demo",
        name: "Demo User",
        email: "demo@example.com",
        password: "demo123",
        joinedDate: new Date().toISOString(),
      };
      localStorage.setItem("users", JSON.stringify([demoUser]));
      console.log("Demo user created! Username: demo, Password: demo123");
    }
  }, []);

  return (
    <Router>
      <AutoRedirect>
        <LayoutWrapper>
          <Routes>
            {/* Student routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/colleges" element={<CollegesPage />} />
            <Route path="/careers" element={<CareerPathsPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* Auth routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Extra pages */}
            <Route path="/scholarships" element={<ScholarshipsPage />} />
            <Route path="/exams" element={<ExamsPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/government-jobs" element={<GovernmentJobsPage />} />
            <Route path="/forum" element={<ForumPage />} />

            {/* Parent routes */}
            <Route path="/parent-login" element={<ParentLoginPage />} />
            <Route path="/parent-dashboard" element={<ParentDashboard />} />

            {/* Fallback route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </LayoutWrapper>
      </AutoRedirect>
    </Router>
  );
}

export default App;
