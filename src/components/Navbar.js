import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="header-navigation">
      <nav className="navigation-display">
        <div className="showcase">
          <Link to="/" className="logo-show">
            <div className="logo-wrapper">
              <h2>
                <i className="fas fa-project-diagram" id="project-logo"></i>
                <span>Project Management App</span>
              </h2>
            </div>
          </Link>
          <ul className="items-nav right-side">
            <li>
              <div className="get-started">
                <Link to="/signup" className="signup">
                  <button className="button">
                    <span className="gs-show">
                      <span className="gs-show2">Sign up here</span>
                    </span>
                  </button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
