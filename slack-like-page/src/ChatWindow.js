// PropTypes : 
//    handleNewpost: Fonction qui relève la phrase contenue dans l'attribut value de l'input.   
//    chatID: Nombre définit sur l'id du chat en cours. Permet de l'afficher.
//    chat: Tableau des phrases contenues dans le chat en cours.
import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
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
    chat: PropTypes.array.isRequired,
    handleNewPost: PropTypes.func.isRequired,
    chatID: PropTypes.number.isRequired
}

export default ChatWindow;