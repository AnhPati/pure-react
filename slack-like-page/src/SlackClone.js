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

    handleChatChoice = (chat) => {
        let newChannels = this.state.channels.map(item => {
            if (chat.id === item.id) {
                item.active = true;
                item.news = false;
            } else {
                item.active = false;
            };
            return item;
        });
        let newPeople = this.state.people.map(item => {
            if (chat.id === item.id) {
                item.active = true;
                item.news = false;
            } else {
                item.active = false;
            };
            return item;
        });
        this.setState({
            channels: newChannels,
            people: newPeople
        });
    };

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
                <ChatPanel channels={this.state.channels} people={this.state.people} chatChoice={this.handleChatChoice}/>
            </div>
            <div>
                {/*<ChatWindow channels={this.state.channels} people={this.state.people}/>*/}
            </div>
                  
            </div>
        );
    };
}

export default SlackClone;