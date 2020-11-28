import "./CalsTracker.css";
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <div className="aboutCalsTracker-container container">
                <h3>About CalsTracker</h3>
                <div className="links">
                    <a
                        href="https://github.com/PhurbaSherpa/CalsTracker"
                        target="_blank"
                    >
                        GitHub
                    </a>
                </div>
                <p className="mt-3">
                    <h5>Purpose</h5>
                    The goal of this app was to recreate an app that I can use
                    daily and find very useful. I do try to stay healthy and eat
                    healthy year round and so I try to track my macros of my
                    meals. It does get tedious having to write them down in a
                    journal everyday and so I decided to make a calorie tracker
                    diary application. It bascially lets me create a
                    personalized account, which takes in my weight, height, age,
                    and activity type and gives me a reccomended daily calorie
                    intake. The app allows for me to search for food or scan
                    barcodes in order to jot down my meal in my diary for the
                    day.
                </p>
                <p className="mt-3">
                    <h5>Technologies Used</h5>
                    <ul>
                        <li>React Native</li>
                        <li>Redux</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                    </ul>
                </p>
                <p className="mt-3">
                    <h5>Challenges</h5>
                    This project was challenging because it was the first time I
                    was creating a mobile application along with my first time
                    using React Native. React Native wasn't too hard to
                    understand since it was very similar to React. I did have
                    trouble with the routing in React Native since it was
                    different from using react-router-dom. I did have to do a
                    lot of debugging to understand how React Navigation worked.
                    <br></br>
                    <br></br>I have an iPhone so it was hard to test it on
                    Android phones. But I decided to use Expo, a platform the
                    allows me to run my app natively on both Apple and Android
                    products. It also allowed me a simple way to deploy it by
                    just scanning a QR code. Working on this I did learn a lot
                    about React Native and mobile development.
                </p>
            </div>
            <div className="arrows-container">
                <Link className="previous" to="/Stockapp">
                    <small>Previous</small>
                    <h3>Stockapp</h3>
                </Link>
            </div>
        </div>
    );
}
