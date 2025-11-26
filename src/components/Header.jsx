import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const { mode, toggleTheme } = useContext(DarkModeContext);

  return (
    <nav className={`navbar navbar-expand-lg shadow-sm py-3 
      ${mode === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>

      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          Rajveer Portfolio
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">Projects</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/skills">Skills</NavLink>
            </li>
          </ul>
          <button 
            className="btn btn-outline-primary ms-3"
            onClick={toggleTheme}
          >
            {mode === "dark" ? "Light Mode" : "Dark Mode"}
          </button>

        </div>
      </div>
    </nav>
  );
}
