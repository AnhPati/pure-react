import React from 'react';
import PropTypes from 'prop-types';
import ChatLine from './ChatLine';
import './ChatBox.css';

function ChatBox({chat}) {
    let chatList = chat.map(item => {
        return (
            <li key={item.id}>
                <ChatLine post={item}/>
            </li>
        )
    });
    console.log(chat)
    return (
        <ul>
            {}
        </ul>
    )
}

export default ChatBox;