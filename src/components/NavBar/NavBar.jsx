import React from 'react';
import '../NavBar/NavBar.css';

const NavBar = () => {
  return (
    <div>
      <div className="navbar-wrapper">
        <div className="logo-left">
          <h1>
            <a id="logo" href="/">
              Accessibility Project
            </a>
          </h1>
        </div>
        <div className="navbar-right">
          <nav role="navigation" aria-label="menu">
            <ul role="list">
              <li role="listitem">
                <a href="#">Home</a>
              </li>
              <li role="listitem">
                <a href="#">About</a>
              </li>
              <li role="listitem">
                <a href="#">Articles</a>
              </li>
              <li role="listitem">
                <div class="dropdown">
                  <span> Contacts </span>
                  <ul class="dropdown-content">
                    <li>
                      <a href="#">Where</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <p></p>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
