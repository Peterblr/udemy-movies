import React from "react";

function Header() {
  return (
    <nav className="deep-purple darken-2">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo right">
          React Movies
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="#!">link-1</a>
          </li>
          <li>
            <a href="#!">link-2</a>
          </li>
          <li>
            <a href="#!">link-3</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
