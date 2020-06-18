import "./Eztextbooks.css";
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <div className="aboutEztextbooks-container">
                About Eztextbooks
                <div className="arrows-container">
                    <Link className="previous" to="/CalsTracker">
                        <small>Previous</small>
                        <h3>CalsTracker</h3>
                    </Link>
                    <div className="arrow"></div>
                </div>
            </div>
        </div>
    );
}
