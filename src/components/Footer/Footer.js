import "./Footer.css";
import React from "react";

export default function Footer() {
    return (
        <div id="footer" className="footer-container">
            <div>©2020 Phurba Sherpa</div>
            <div className="social-container">
                <i className="fab fa-lg fa-linkedin-in"></i>
                <i className="fas fa-lg fa-envelope"></i>
                <i className="fab fa-lg fa-instagram"></i>
            </div>
        </div>
    );
}
