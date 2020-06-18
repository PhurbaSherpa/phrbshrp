import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-md navbar-light bg-white">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">
                    <img
                        src={require("../res/Brand.png")}
                        width="125"
                        height="85"
                    />
                </Link>

                <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo03"
                >
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        {/* {make this a dropdown to about projects} */}
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                Work
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutme">
                                About
                            </Link>
                        </li>
                    </ul>
                    <div className="social-container">
                        <i className="fab fa-lg fa-linkedin-in"></i>
                        <i className="fas fa-lg fa-envelope"></i>
                        <i className="fab fa-lg fa-instagram"></i>
                    </div>
                </div>
            </nav>
        </div>
    );
}
