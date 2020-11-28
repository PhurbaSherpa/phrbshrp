import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const goToSocials = () => {
        document.getElementById("#footer");
    };

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
                    <img src={require("../res/Brand.png")} width="100%" />
                </Link>

                <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo03"
                >
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        {/* {make this a dropdown to about projects} */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Works">
                                Works
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutme">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">
                                Socials
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
