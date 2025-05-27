import React from "react";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaAddressCard } from "react-icons/fa";
import { MdOutlineWork, MdHomeRepairService } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";

function PagesNavbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top shadow">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="mylogo.png"
            alt="Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <HiHome className="me-1" />
          <span>Home</span>
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/about">
                <FaAddressCard className="me-1" />
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center"
                to="/projects"
              >
                <MdOutlineWork className="me-1" />
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center"
                to="/service"
              >
                <MdHomeRepairService className="me-1" />
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center"
                to="/contact"
              >
                <BiSolidContact className="me-1" />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default PagesNavbar;
