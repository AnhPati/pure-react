import React, {Component} from 'react';
import ChatPanel from './ChatPanel';
import ChatWindow from './ChatWindow';
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

    // handleNewPost = (event) => {

    // }

    componentDidMount() {
        this.setState({
            channels: conversations.channels,
            people: conversations.people
        });
    };

    render() {
        let channelActive = [];
        this.state.channels.map(item => {
            if (item.active) {
                return (
                    channelActive = item.posts
                )
            }
        });
        this.state.people.map(item => {
            if (item.active) {
                return (
                    channelActive = item.posts
                )
            }
        });
        return (
            <div className="w-100">
                <div className="d-flex flex-nowrap">
                    <div className="chatPanel-container">
                        <ChatPanel channels={this.state.channels} people={this.state.people} chatChoice={this.handleChatChoice}/>
                    </div>
                    <div className="w-100">
                        <ChatWindow chat={channelActive}/>
                    </div>  
                </div>
            </div>
        );
    };
}

export default SlackClone;