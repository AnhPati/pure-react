import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

function ChildrenExercices() {
    return (
        <div class="mainContainer">
            <ErrorBox>
                The world is ending.
            </ErrorBox>
        </div>
    );
};

function ErrorBox({children}) {
    return (
        <div className="alert alert-danger warningBox" role="alert">
            <div className="iconBox">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <div className="textBox">
                <p>
                    {children}
                </p>
            </div>
        </div>
    )
}

ReactDOM.render(<ChildrenExercices/>, document.getElementById("root"));