import "./Visuo.css";
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <div className="aboutVisuo-container container">
                <h3>About Visuo</h3>
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
                <p className="mt-3">
                    <h5>Purpose</h5>
                    The main goal of this project was to help me understand the
                    different sorting algorithims. Ever since graduating from
                    bootcamp I was grinding out Leetcode problems and came upon
                    a sorting problem. This is when I found out that there were
                    different sorting algorithims and wanted to understand how
                    each one worked. So I created this visualizer that allows me
                    to understand how the actual algorithims works step by step.
                    For this project I kept it simple and just used React only
                    with some basic styling with Bootstrap.
                </p>
                <p className="mt-3">
                    <h5>Technologies Used</h5>
                    <ul>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
                <p className="mt-3">
                    <h5>Challenges</h5>
                    The most challenging part was keeping track of each element
                    and making sure that the visualizer is displaying the bar in
                    the correct order. Also the process of changing colors from
                    sorting in progress to completion. <br></br>
                    <br></br>The other challenge is obviously me understaning
                    the different algorithims and how each one works. The
                    purpose of this project was to help me with that and it did
                    actually help me. I am more of a visual learner so this was
                    actaully very helpful to me. I am planning to maybe update
                    the UI and add more sorting algorithims as I learn them.
                </p>
            </div>
            <div className="arrows-container">
                <Link className="previous" to="/Eztextbook">
                    <small>Previous</small>
                    <h3>Eztextbook</h3>
                </Link>
                <Link className="next" to="/Stockapp">
                    <small>Next</small>
                    <h3>Stockapp</h3>
                </Link>
            </div>
        </div>
    );
}
