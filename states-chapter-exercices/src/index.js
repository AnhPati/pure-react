import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import "./index.css";

const ExercicesContainer = () => {
    return (
        <div className="mainContainer">
            <CounterExercice/>
        </div>
    );
};

function CounterExercice() {
    return (
        <div>
            <CountingParent/>
            <CountingParent/>
            <CountingParent/>
        </div>
    );
};


class CountingParent extends React.Component {
    state = {
        actionCount: 0
    }

    handleAction = (action) => {
        console.log("Child says", action);
        this.setState({
            actionCount: this.state.actionCount + 1
        })
    }

    handleReset = () => {
        this.setState({
            actionCount: 0
        })
    }

    render() {
        return (
            <div>
                <Child onAction={this.handleAction}/>
                <button onClick={this.handleReset}>
                    Reset !
                </button>
                <p>Clicked {this.state.actionCount}</p>
            </div>
        );
    }
    
};

function Child({onAction}) {
    return (
        <button onClick={onAction}>
            Click Me !
        </button>
    );
};

ReactDOM.render(<ExercicesContainer/>, document.getElementById("root"));