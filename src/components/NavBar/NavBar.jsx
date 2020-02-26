import React from 'react';
import '../NavBar/NavBar.css';

const NavBar = () => {

  return (
    <div>
      <div className="navbar-wrapper">
        <div className="logo-left">
          <h1>
            <a id="logo" href="/" tabIndex="0">
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
              <li role="list" class="dropdown" aria-haspopup="false">
                <a href="">Contacts</a>
                <li class="dropdown-content">
                  <li role="listitem">
                    <a href="#">Where</a>
                  </li>
                  <li role="listitem">
                    <a href="#">Contact us</a>
                  </li>
                </li>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
