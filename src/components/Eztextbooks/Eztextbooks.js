import "./Eztextbooks.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Eztextbooks() {
    return (
        <div className="eztextbooks-container">
            <div className="project">
                <div className="left">
                    <Link to="Eztextbooks">Work In Progress!</Link>
                </div>
                <div className="right">
                    <div className="right-text">
                        <h2>Eztextbooks</h2>
                        <br />
                        An ecommerce Web application built for a client to sell
                        his books on.
                        <div className="links">
                            <a href="#">Live site</a> | <a href="#">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
