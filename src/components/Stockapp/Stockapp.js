import "./Stockapp.css";
import React from "react";

export default function Stockapp() {
    return (
        <div className="stockapp-container">
            <div className="project">
                <div className="left"></div>
                <div className="right">
                    <div className="right-text">
                        StockApp
                        <br />A Web application for tracking your stock
                        portfolio. Uses .......
                        <div className="links">
                            <a href="#">Live Site</a> | <a href="#">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
