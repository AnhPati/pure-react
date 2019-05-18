import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './InputBox.css';

class InputBox extends Component {
    state = {
        text: ''
    };

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
        console.log(event.target)
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="Ecrivez votre message"
                />
            </div>
        )
    }
}

export default InputBox;