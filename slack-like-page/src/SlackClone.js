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

    handleNewPost = (text, date, id) => {
        let newChannels = this.state.channels.map(item => {
            if (item.id === id) {
                item.posts.push({
                    id: item.posts.length + 1,
                    author: 'Me',
                    postDate: date,
                    content: text
                })
                return (
                   item 
                )
            }
            return (
                item
            );
        });
        let newPeople = this.state.people.map(item => {
            if (item.id === id) {
                item.posts.push({
                    id: item.posts.length + 1,
                    author: 'Me',
                    postDate: date,
                    content: text
                })
                return (
                    item
                )
            }
            return (
                item
            );
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
        let channelActive = [];
        let channelId;
        this.state.channels.map(item => {
            if (item.active) {
                return (
                    channelActive = item.posts,
                    channelId = item.id
                )
            }
        });
        this.state.people.map(item => {
            if (item.active) {
                return (
                    channelActive = item.posts,
                    channelId = item.id
                )
            }
        });
        return (
            <div className="w-100">
                <div className="d-flex flex-nowrap vh-100">
                    <div className="chatPanel-container">
                        <ChatPanel channels={this.state.channels} people={this.state.people} chatChoice={this.handleChatChoice}/>
                    </div>
                    <div className="w-100">
                        <ChatWindow chat={channelActive} handleNewPost={this.handleNewPost} chatId={channelId}/>
                    </div>  
                </div>
            </div>
        );
    };
}

export default SlackClone;