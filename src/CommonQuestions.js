import React from "react";

class CommonQuestions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        };
    }
    handleClose = () => {
        this.setState({ show: false });
    };
    handleOpen = () => {
        this.setState({ show: true });
    };

    render() {
        console.log("questionTab", this.props);
        return (
            <div>
                <div className="questions">{this.props.question}</div>

                {this.state.show ? (
                    <div className="button" onClick={this.handleClose}>
                        THE UP ARROW
                    </div>
                ) : (
                    <div className="button" onClick={this.handleOpen}>
                        THE DOWN ARROW
                    </div>
                )}
                {this.state.show && (
                    <div className="answers">
                        {this.props.answers.map((answer) => {
                            return <div>{answer}</div>;
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export default CommonQuestions;
