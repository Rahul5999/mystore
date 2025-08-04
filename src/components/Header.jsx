import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
// Replace with your logo path

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Left Side: Logo and MyStore */}
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          src={logo}
          alt="Logo"
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
        />
        MyStore
      </Link>

      {/* Mobile Toggler */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Right Side Navigation */}
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link" to="/users">
            Users
          </Link>
          <Link className="nav-item nav-link" to="/products">
            Products
          </Link>
          <Link className="nav-item nav-link">Cart</Link>
        </div>
      </div>
    </nav>
  );
};
export default Header;
