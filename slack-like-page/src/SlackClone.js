import React, {Component} from 'react';
import ChatPanel from './ChatPanel';
// import ChatWindow from './ChatWindow';
import {conversations} from './slack-datas'
import './SlackClone.css';

class SlackClone extends Component {
    state = {
        channels :[],
        people: []
    };

    componentDidMount() {
        this.setState({
            channels: conversations.channels,
            people: conversations.people
        });
    };

    render() {
        return (
            <div>
                <ChatPanel channels={this.state.channels} people={this.state.people}/>
                {/*<ChatWindow channels={this.state.channels} people={this.state.people}/>*/}
            </div>
        );
    };
}

export default SlackClone;