import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/hashrouter"
              className="nav-link"
              activeClassName="active"
            >
              Hash Router
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/memoryrouter"
              className="nav-link"
              activeClassName="active"
            >
              Memory Router
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" className="nav-link" activeClassName="active">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/notaurl"
              className="nav-link"
              activeClassName="active"
            >
              Not a Url
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
