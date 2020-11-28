import "./Eztextbooks.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Eztextbooks() {
    return (
        <div className="eztextbooks-container">
            <div className="project">
                <div className="left">
                    <Link to="/Eztextbook">
                        <img
                            src={require("../res/Eztextbook.png")}
                            width="60%"
                            height="60%"
                        />
                    </Link>
                </div>
                <div className="right">
                    <div className="right-text">
                        <Link to="/Eztextbook" style={{ color: "black" }}>
                            <h2>Eztextbook</h2>
                        </Link>
                        <br />
                        An ecommerce Web application built for a client to sell
                        books on.
                        <div className="links">
                            <a href="https://eztextbook.com" target="_blank">
                                Live site
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
