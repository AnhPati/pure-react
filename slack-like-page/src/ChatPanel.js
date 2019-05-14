import React from 'react';
import PropTypes from 'prop-types';
import ChannelBox from './ChannelBox';
import PeopleBox from './PeopleBox';
import './ChatPanel.css';

function ChatPanel({channels, people, channelChoice}) {
    let listChannels = channels.map(channel => {
        return (
            <li key={channel.id}>
                <ChannelBox channel={channel} channelChoice={channelChoice}/>
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
            
            <PeopleBox people={people}/>
        </div>
    )
};

ChatPanel.propTypes = {
    channels: PropTypes.array.isRequired,
    people: PropTypes.array.isRequired
};

export default ChatPanel;