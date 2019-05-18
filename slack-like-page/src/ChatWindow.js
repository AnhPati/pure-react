import React from 'react';
import PropTypes from 'prop-types';
import ChatBox from './ChatBox';
import InputBox from './InputBox';
import './ChatWindow.css';

function ChatWindow({chat, handleNewPost}) {
    return (
        <div className="container-fluid chatWindow">
            <ChatBox chat={chat}/>
            <InputBox handleNewPost={handleNewPost}/>
        </div>
    )
}

ChatWindow.propTypes = {
    channels: PropTypes.array.isRequired,
    people: PropTypes.array.isRequired
}

export default ChatWindow;