import CommonQuestions from "./CommonQuestions";
import React from "react";

class WhatIs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "1. What is identity theft?",
            answers: [
                "You may have heard of identity theft, but what does this term really mean? Going far beyond credit card fraud, identity theft is a rapidly growing crime that most people will face at some point in their lives. Identity theft is officially defined as the deliberate assumption of another person's identity. It is a crime where a criminal acquires and uses the victim's personal information, such as a Social Security or driver's license number, to take out loans, obtain new credit cards, rent an apartment, purchase a car, run up debt, file for bankruptcy and other criminal activities.Identity theft can not only damage someone's creditworthiness, it can also create unknown criminal records that can result in the identity theft victim being wrongly arrested or denied employment after a routine background check.",
            ],
        };
    }
    render() {
        console.log("here", this.state);
        return (
            <div>
                <div>
                    <CommonQuestions
                        question={this.state.question}
                        answers={this.state.answers}
                    />
                </div>
            </div>
        );
    }
}

export default WhatIs;
