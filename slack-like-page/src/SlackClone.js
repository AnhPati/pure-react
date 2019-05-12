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
            <div class="container-fluid">
            <div class="">
                <ChatPanel channels={this.state.channels} people={this.state.people}/>
            </div>
            <div>
                {/*<ChatWindow channels={this.state.channels} people={this.state.people}/>*/}
            </div>
                  
            </div>
        );
    };
}

export default SlackClone;