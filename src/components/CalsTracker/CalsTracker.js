import "./CalsTracker.css";
import React from "react";
import { Link } from "react-router-dom";

export default function CalsTracker() {
    return (
        <div className="calstracker-container">
            <div className="project">
                <div className="left">
                    <Link to="/CalsTracker">
                        <img
                            src={require("../res/CalsTracker.png")}
                            width="40%"
                            height="70%"
                        />
                    </Link>
                    <Link to="/CalsTracker">
                        <img
                            src={require("../res/CalsTracker2.png")}
                            width="40%"
                            height="70%"
                        />
                    </Link>
                </div>
                <div className="right">
                    <div className="right-text">
                        <h2>CalsTracker</h2>
                        <br />A Mobile application for tracking your calories.
                        <div className="links">
                            <a href="#">Video Showcase</a> |{" "}
                            <a href="#">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
