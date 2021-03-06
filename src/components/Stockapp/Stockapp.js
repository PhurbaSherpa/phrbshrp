import "./Stockapp.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Stockapp() {
    return (
        <div className="stockapp-container">
            <div className="project">
                <div className="left">
                    <Link to="/Stockapp">
                        <img
                            src={require("../res/Stockapp.png")}
                            width="60%"
                            height="60%"
                        />
                    </Link>
                </div>
                <div className="right">
                    <div className="right-text">
                        <Link to="/Stockapp" style={{ color: "black" }}>
                            <h2>StockApp</h2>
                        </Link>
                        <br />A Web application for tracking your stock
                        portfolio.
                        <div className="links">
                            <a
                                href="https://ttp-stockapp.herokuapp.com/"
                                target="_blank"
                            >
                                Live Site
                            </a>{" "}
                            |{" "}
                            <a
                                href="https://github.com/PhurbaSherpa/stockapp"
                                target="_blank"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
