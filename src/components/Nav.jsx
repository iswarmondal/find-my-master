import React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link
              to="/"
              style={{
                color: `black`,
                textDecoration: `none`,
                fontSize: `x-large`,
                marginRight: `4rem`,
              }}
            >
              My Teacher
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Profile
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Log in
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Sign up
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Need Help
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className="nav-link disabled"
                    to="/"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </Link>
                </li> */}
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
