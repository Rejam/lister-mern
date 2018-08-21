import React from "react";
import { Link } from "react-router-dom";

const AppHeader = () => (
  <nav className="navbar is-dark">
    <div className="navbar-brand">
      <div className="navbar-item">Lister</div>
      <div className="navbar-burger">
        <span />
        <span />
        <span />
      </div>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/lists">
          All Lists
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/">
          Register
        </Link>
        <Link className="navbar-item" to="/lists">
          Login
        </Link>
      </div>
    </div>
  </nav>
);

export default AppHeader;
