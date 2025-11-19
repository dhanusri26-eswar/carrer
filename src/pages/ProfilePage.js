import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function ProfilePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>Loading your profile...</h2>
      </div>
    );
  }

  // Generate current date as “Member Since”
  const memberSince = new Date().toLocaleDateString("en-IN");

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Profile Picture */}
        <div style={styles.profilePicContainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            style={styles.profilePic}
          />
        </div>

        {/* User Info */}
        <h2 style={styles.name}>{user.name}</h2>
        <p style={styles.email}>{user.email}</p>
        <p style={styles.memberSince}>Member since: {memberSince}</p>

        {/* Action Buttons */}
        <div style={styles.linksContainer}>
          <Link to="/quiz" style={styles.linkBtn}>
            🎯 Take Quiz
          </Link>
          <Link to="/colleges" style={styles.linkBtn}>
            🏫 Browse Colleges
          </Link>
          <Link to="/career-paths" style={styles.linkBtn}>
            💼 Explore Careers
          </Link>
        </div>

        {/* Logout */}
        <button onClick={handleLogout} style={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "85vh",
    background: "linear-gradient(135deg, #e8efff, #f5f7fa)",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px 50px",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "400px",
    transition: "0.3s",
  },
  profilePicContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "15px",
  },
  profilePic: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "3px solid #4a6cf7",
    objectFit: "cover",
  },
  name: {
    color: "#2c3e50",
    fontSize: "22px",
    marginBottom: "5px",
    fontWeight: "600",
  },
  email: {
    color: "#555",
    fontSize: "15px",
    marginBottom: "10px",
  },
  memberSince: {
    color: "#888",
    fontSize: "13px",
    marginBottom: "20px",
  },
  linksContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  linkBtn: {
    display: "block",
    padding: "10px 0",
    backgroundColor: "#4a6cf7",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "500",
    transition: "0.3s",
  },
  logoutBtn: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default ProfilePage;
