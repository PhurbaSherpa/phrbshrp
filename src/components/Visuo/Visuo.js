import "./Visuo.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Visuo() {
    return (
        <div className="visuo-container">
            <div className="project">
                <div className="left">
                    <Link to="/Visuo">
                        <img
                            src={require("../res/Visuo.png")}
                            width="60%"
                            height="60%"
                        />
                    </Link>
                </div>
                <div className="right">
                    <div className="right-text">
                        <Link to="/Visuo" style={{ color: "black" }}>
                            <h2>Visuo</h2>
                        </Link>
                        <br />A Web application built to help me understand the
                        different sorting algorithims, and visualize them
                        better.
                        <div className="links">
                            <a
                                href="https://visual-algo.herokuapp.com/"
                                target="_blank"
                            >
                                Live Site
                            </a>{" "}
                            |{" "}
                            <a
                                href="https://github.com/PhurbaSherpa/Visuo"
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
