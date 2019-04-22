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
        <Parent/>
    );
};

function handleAction(event) {
    console.log('Child did:', event);
};

function Parent() {
    return (
        <Child onAction={handleAction}/>
    );
};

function Child({onAction}) {
    return (
        <button onClick={onAction}>
            Click Me !
        </button>
    );
};

ReactDOM.render(<ExercicesContainer/>, document.getElementById("root"));