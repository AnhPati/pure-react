import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const MainContainer = () => {
    return (
        <div>
            <h1>TEST</h1>
            <ErrorCatcher>
                <LifecycleDemo/>
            </ErrorCatcher>
        </div>
    );
};

class ErrorCatcher extends React.Component {
    state = { error: null }

    componentDidCatch(error, info) {
        console.log('[componentDidCatch]', error);
        this.setState({ error: info.componentStack });
    }

    render() {
        if(this.state.error) {
            return (
                <div>
                    An error occurred: {this.state.error}
                </div>
            );
        };

        return this.props.children;
    };
};

class LifecycleDemo extends React.Component {
    // Initialize state firts
    // (happens before constructor)
    state = {counter: 0};

    // The first method called after initializing state
    constructor(props) {
        super(props);
        console.log('[constructor');
        console.log('   State already set:', this.state);
    }

    //Called after initial render is done
    componentDidMount() {
        console.log('[componentDidMount]', 'Mounted.');
    }

    // **Don't forget to make thus `static` !**
    // Called befor inital render, and any time
    // new props are received.
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('[getDerivedStateFromProps]');
        console.log('   Next props:', nextProps);
        console.log('   Prev state:', prevState);
        return null;
    }

    // Called before each render.
    // Return false to prevent rendering.
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[shouldComponentUpdate]', 'Deciding to update');
        return true;
    }

    // Called after render() but before updating the DOM.
    // A good time to make calculations based on old DOM nodes.
    // The value returned here is passed into ComponentDidUpdtate.
    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log('[getSnapshotBeforeUpdate]', 'About to update...');
        return `Time is ${Date.now()}`;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdante', 'Updated.');
        console.log('   snapsshot:', snapshot)
    }

    componentWillUnmount() {
        console.log('[componentWillUnlount]','Goodbye cruel world.');
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    causeErrorNextRender = () => {
        // Set a flag to cause an error on the next render
        //This will cause componentDidCatch to run in the parent
        this.setState({
            causeError: true
        });
    }

    render() {
        console.log('[render]');
        if(this.state.causeError) {
            throw new Error('oh no!!');
        }

        return (
            <div>
                <span>Counter: {this.state.counter}</span>
                <button onClick={this.handleClick}>
                    Click to increment
                </button>
                <button onClick={this.causeErrorNextRender}>
                    Throw an error
                </button>
            </div>
        );
    }
};

ReactDOM.render(<MainContainer/>, document.getElementById('root'));