import React from 'react';
import PropTypes from 'prop-types';
import ChatBox from './ChatBox';
import InputBox from './InputBox';
import './ChatWindow.css';

function ChatWindow({chat, handleNewPost, chatId}) {
    return (
        <div className="container-fluid chatWindow d-flex justify-content-end flex-column pb-3">
            <ChatBox chat={chat}/>
            <InputBox handleNewPost={handleNewPost} chatId={chatId}/>
        </div>
    )
}

ChatWindow.propTypes = {
    channels: PropTypes.array.isRequired,
    people: PropTypes.array.isRequired
}

export default ChatWindow;