import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const MainContainer = () => {
    return (
        <div>
            <h1>WESH</h1>
            <Example/>
            <TrickInput/>
            <NoNumbersInput/>
            <EasyInput/>
            <RefInput/>
            <RefInputStateless/>
        </div>
    );
};

class Example extends React.Component {
    state = { text: '' };

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    };

    render() {
        return (
            <div>
            <input type="text"
                value={this.state.text}
                onChange={this.handleChange}
            />
            {console.log(this.state.text)}
            </div>
        );
    };
};

class TrickInput extends React.Component {
    state = {
        text: 'try typing something'
    };

    handleChage = (event) => {
        this.setState({
            text: 'haha nope'
        });
    };

    render() {
        return (
            <input type="text"
                value={this.state.text}
                onChange={this.handleChange}
            />
        );
    };
};

class NoNumbersInput extends React.Component {
    state = {
        text: ''
    };

    handleChange = (event) => {
        let text = event.target.value;
        text = text.replace(/[0-9]/g, '');
        this.setState({ text });
    };

    render() {
        return (
            <input type="text"
                value={this.state.text}
                onChange={this.handleChange}
            />
        );
    };
};

const EasyInput = () => (
    <input type="text"/>
);

class RefInput extends React.Component {
    showValue = () => {
        alert(`Input contains : ${this.input.value}`);
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={input => this.input = input}
                />
                <button onClick={this.showValue}>
                    Alert the Value !
                </button>
            </div>
        );
    };
};

const RefInputStateless = () => {
    let input;

    const showValue = () => {
        alert(`Input contains: ${input.value}`);
    };

    return (
        <div>
            <input
                type="text"
                ref={i => input = i}
            />
            <button onClick={showValue}>
                Alert the Value !
            </button>
        </div>
    );
};

ReactDOM.render(<MainContainer/>, document.getElementById('root'));