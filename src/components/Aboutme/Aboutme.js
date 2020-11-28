import "./Aboutme.css";
import React from "react";
import { Learning } from "../index";

export default function Aboutme() {
    return (
        <div className="aboutme-container">
            <div className="aboutme-inner">
                <img src={require("../res/avatar.png")} alt="Picutre of me" />
                <div className="introduction-container">
                    <div>
                        <h1>Hi,</h1>
                    </div>
                    <div>
                        My name is Phurba. With my background in Biology, I
                        approach code like a living organism and try to
                        understand all the different parts of it. By looking at
                        all the parts I can get a better sense of my code
                        overall.
                    </div>
                    <div>My code is...</div>
                    <div>
                        <span>readable</span> - With readable code anyone is
                        able to understand it making debugging, and
                        maintinability easier. It also allows for easier
                        scalibility if you know what you have and what you need.
                    </div>
                    <div>
                        <span>efficient</span> - I revisit my code to make sure
                        that I consider every possible way for a better
                        solution. By having efficeint code I can attain better
                        performance.
                    </div>
                    <div>
                        <span>modular</span> - I keep things simple and clear.
                        Have code that is focused on one task. With this my code
                        can be reusable. This allows for easier updates because
                        code won't be too dependant on other code.
                    </div>
                </div>
            </div>
            <Learning />
        </div>
    );
}
