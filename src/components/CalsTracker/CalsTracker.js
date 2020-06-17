import "./CalsTracker.css";
import React from "react";

export default function CalsTracker() {
    return (
        <div className="calstracker-container">
            <div className="project">
                <div className="left"></div>
                <div className="right">
                    <div className="right-text">
                        CalsTracker
                        <br />A Mobile application for tracking your calories.
                        Uses .......
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
