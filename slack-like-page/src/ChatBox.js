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
        <ul className="cList-none d-flex flex-column-reverse cList-noPadding justify-content-end">
            {chatList}
        </ul>
    )
}

export default ChatBox;