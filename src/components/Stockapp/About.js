import "./Stockapp.css";
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <div className="aboutStockapp-container">
                About Stockapp
                <div className="arrows-container">
                    <div className="previous"></div>
                    <Link className="next" to="/CalsTracker">
                        <small>Next</small>
                        <h3>CalsTracker</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
}
