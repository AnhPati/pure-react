import React, {Component} from 'react';
import ChatPanel from './ChatPanel';
import ChatWindow from './ChatWindow';
import './SlackClone.css';

class SlackClone extends Component {
    state = {
        channels :[],
        people: []
    };

    render() {
        return (
            <div>
                <ChatPanel channels={this.state.channels} people={this.state.people}/>
                <ChatWindow channels={this.state.channels} people={this.state.people}/>
            </div>
        )
    }
}

export default SlackClone;