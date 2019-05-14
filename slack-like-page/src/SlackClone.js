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

    handleChatChoice = (channel) => {
        let newChannels = this.state.channels.map(item => {
            if (channel.id === item.id) {
                item.active = true;
            } else {
                item.active = false;
            };
        });
        this.setState({
            channels: newChannels
        });
    }

    componentDidMount() {
        this.setState({
            channels: conversations.channels,
            people: conversations.people
        });
    };

    render() {
        return (
            <div className="container-fluid">
            <div className="">
                <ChatPanel channels={this.state.channels} people={this.state.people} channelChoice={this.handleChatChoice}/>
            </div>
            <div>
                {/*<ChatWindow channels={this.state.channels} people={this.state.people}/>*/}
            </div>
                  
            </div>
        );
    };
}

export default SlackClone;