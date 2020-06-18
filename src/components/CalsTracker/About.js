import "./CalsTracker.css";
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <div className="aboutCalsTracker-container">
                About CalsTracker
                <div className="arrows-container">
                    <Link className="previous" to="/Stockapp">
                        <small>Previous</small>
                        <h3>Stockapp</h3>
                    </Link>
                    <Link className="next" to="/Eztextbooks">
                        <small>Next</small>
                        <h3>Eztextbooks</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
}
