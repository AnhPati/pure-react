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
        <CountingParent/>
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

    render() {
        return (
            <div>
                <Child onAction={this.handleAction}/>
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