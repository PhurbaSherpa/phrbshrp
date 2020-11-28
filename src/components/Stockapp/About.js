import "./Stockapp.css";
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <div className="aboutStockapp-container container">
                <h3>About Stockapp</h3>
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
                <p className="mt-3">
                    <h5>Purpose</h5>
                    The main goal of this applictaion is to allow users to keep
                    track of their stock portfolio. On this site users can
                    create their own personalized portfolio and see how much
                    profit they are making. The stcoks are updated live so you
                    will always have your status up to date. This application is
                    used as a simulation and so doesn't use real cash. All
                    transactions are stored on the users profile and can be
                    accessed for personal records.
                </p>
                <p className="mt-3">
                    <h5>Technologies Used</h5>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                    </ul>
                </p>
                <p className="mt-3">
                    <h5>Challenges</h5>
                    This project was challenging because I had to work around
                    the api limit for the api used to get the updated stock
                    prices. I made it so that only when the page that shows the
                    stocks you own updates then it will update the prices.
                    Another thing was that the api didn't give real-time data,
                    any data received from the api was delayed by 15 mins. I
                    tried to look for a way to get real-time data for free but
                    unfortunately there was no free option.
                </p>
            </div>
            <div className="arrows-container">
                <Link className="previous" to="/Visuo">
                    <small>Previous</small>
                    <h3>Visuo</h3>
                </Link>
                <Link className="next" to="/CalsTracker">
                    <small>Next</small>
                    <h3>CalsTracker</h3>
                </Link>
            </div>
        </div>
    );
}
