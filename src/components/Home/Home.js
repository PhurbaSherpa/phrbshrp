import "./Home.css";
import React from "react";
import { Stockapp, CalsTracker, Eztextbooks } from "../index";

export default function Home() {
    return (
        <div className="home-container">
            <div className="hero-container">
                <div className="hero">
                    <div>
                        <img
                            src={require("../res/manComputer.png")}
                            alt="man working on computer"
                        />
                    </div>
                    <div className="home-description">
                        Hi, I'm Phurba, a Software Engineer in New York City.
                        <br />I focus on writing <span>Clean</span>,{" "}
                        <span>Elegant</span> and <span>Efficient</span> code.
                    </div>
                    <a className="arrow-down" href="#facts">
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div id="facts" className="bottom-container">
                <Stockapp />
                <CalsTracker />
                <Eztextbooks />
            </div>
        </div>
    );
}
