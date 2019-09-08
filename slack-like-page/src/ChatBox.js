import React from 'react';
import PropTypes from 'prop-types';
import ChatLine from './ChatLine';
import './ChatBox.css';

const ChatBox = ({chat}) => {
    let chatList = chat.map(item => {
        return (
            <li key={item.id}>
                <ChatLine post={item}/>
            </li>
        )
    });
    return (
        <div className="overflowContainer">
            <ul className="cList-none d-flex flex-column cList-noPadding justify-content-end chatList">
                {chatList}
            </ul>
        </div>
    )
}

export default ChatBox;