import "./Works.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Works() {
    return (
        <div className="works-container">
            <h1>All Works</h1>
            <div className="mt-5">
                <div className="mt-3">
                    <h5>Eztextbook</h5>
                    <Link to="/Eztextbook">
                        <img
                            className="work-img"
                            src={require("../res/Eztextbook.png")}
                            width="20%"
                            height="20%"
                        />
                    </Link>
                </div>
                <div className="mt-3">
                    <h5>Visuo</h5>
                    <Link to="/Visuo">
                        <img
                            className="work-img"
                            src={require("../res/Visuo.png")}
                            width="20%"
                            height="20%"
                        />
                    </Link>
                </div>
                <div className="mt-3">
                    <h5>Stockapp</h5>
                    <Link to="/Stockapp">
                        <img
                            className="work-img"
                            src={require("../res/Stockapp.png")}
                            width="20%"
                            height="20%"
                        />
                    </Link>
                </div>
                <div className="mt-3">
                    <h5>CalsTracker</h5>
                    <Link to="/CalsTracker">
                        <img
                            className="work-img"
                            src={require("../res/CalsTracker.png")}
                            width="10%"
                            height="20%"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
