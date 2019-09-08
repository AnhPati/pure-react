import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './InputBox.css';
import './ChatBox.css';

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

    handleKeyPress = (event) => {
        if (event.key === "Enter") {
            if (this.state.text !== '') {
                let date = new Date;
                let formatDate = [
                    date.getFullYear(),
                    (date.getMonth() + 1),
                    date.getDate()
                ].join('-') + ' ' + [
                    date.getHours(),
                    date.getMinutes(),
                    date.getSeconds()
                ].join(':');
                this.props.handleNewPost(this.state.text, formatDate, this.props.chatId);
                this.setState({
                    text: ''
                });
            };
        };
    };

    render() {
        return (
            <div class="chatInput">
                <input
                    className="w-100"
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    placeholder="Ecrivez votre message"
                />
            </div>
        );
    };
};

export default InputBox;