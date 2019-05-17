import React from 'react';
import PropTypes from 'prop-types';
import ChannelBox from './ChannelBox';
import './ChatPanel.css';

function ChatPanel({channels, people, chatChoice}) {
    let listChannels = channels.map(channel => {
        return (
            <li key={channel.id} className="w-100">
                <ChannelBox channel={channel} chatChoice={chatChoice}/>
            </li>
        )
    });
    let listPeople = people.map(person => {
        return (
            <li key={person.id} className="w-100">
                <ChannelBox channel={person} chatChoice={chatChoice}/>
            </li>
        )
    })
    return (
        <div className="chatPanel container-fluid uPadding-rightNone">
            < ul className = "cList-none d-flex flex-column align-items-start uMargin-bottom-xl" >
                <h5>
                    CHANNELS
                </h5>
                {listChannels}
            </ul>
            <ul className="cList-none d-flex flex-column align-items-start">
                <h5>
                    PEOPLE
                </h5>
                {listPeople}
            </ul>
        </div>
    )
};

ChatPanel.propTypes = {
    channels: PropTypes.array.isRequired,
    people: PropTypes.array.isRequired
};

export default ChatPanel;