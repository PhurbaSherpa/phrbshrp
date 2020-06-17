import "./Navbar.css";
import React from "react";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
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
                <a className="navbar-brand" href="#">
                    <img
                        src={require("../res/Brand.png")}
                        width="125"
                        height="85"
                    />
                </a>

                <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo03"
                >
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Work
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                    </ul>
                    <div className="social-container">
                        <i class="fab fa-lg fa-linkedin-in"></i>
                        <i class="fas fa-lg fa-envelope"></i>
                        <i class="fab fa-lg fa-instagram"></i>
                    </div>
                </div>
            </nav>
        </div>
    );
}
