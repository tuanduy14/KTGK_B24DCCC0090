import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="navbar-logo" onClick={() => navigate("/posts")}>
          <span className="navbar-title">Blog Manager</span>
        </div>
        <div className="navbar-links">
          
          <button className="navbar-btn" onClick={() => navigate("/create")}>
            Viết bài
          </button>
        </div>
      </div>
    </nav>
  );
}
