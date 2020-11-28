import "./Eztextbooks.css";
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <div className="aboutEztextbooks-container container">
                <h3>About Eztextbook</h3>
                <a href="https://eztextbook.com" target="_blank">
                    Live site
                </a>
                <p className="mt-3">
                    <h5>Purpose</h5>
                    The main goal is making textbooks more accesible and
                    affordable to students around the world. Eztextbook believes
                    that education is already expensive and that students should
                    not have to pay ludicrous prices for textbooks that are
                    required for many of their courses. By being an intermediary
                    between book stores, people selling their old textbooks, and
                    large suppliers, we can sell textbooks and access cards at a
                    very afforable price.
                </p>
                <p className="mt-3">
                    <h5>Technologies Used</h5>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Golang</li>
                        <li>MongoDB</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                    </ul>
                </p>
                <p className="mt-3">
                    <h5>Challenges</h5>
                    This project was one of proudest works ever but also one of
                    my most challenging. The most challenging part would be not
                    having multiple teams where the work I did would be
                    delegated to specific teams working on specific parts.
                    Normally I would discuss with other teams and other team
                    members but without that things did take longer. <br></br>
                    <br></br>
                    Another challenge would be learning new techonolgies that I
                    was using for the developemnt of the site. I was already
                    familiar with the overall flow of how things should work,
                    but every so often I would have to refer to docs to
                    understand specific methods and syntax. Docker and
                    Kubernetes was something totally new to me, I understood the
                    basic concepts, but implementing it took a while.
                </p>
            </div>
            <div className="arrows-container">
                <div className="previous"></div>
                <Link className="next" to="/Visuo">
                    <small>Next</small>
                    <h3>Visuo</h3>
                </Link>
            </div>
        </div>
    );
}
