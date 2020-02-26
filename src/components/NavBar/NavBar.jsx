import React from 'react';
import '../NavBar/NavBar.css';

const NavBar = () => {
  return (
    <div>
      <div className="navbar-wrapper">
        <div className="logo-left">
          <a id="logo" href="/">Accessibility Project</a>
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
                <a href="#">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
