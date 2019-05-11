import React from 'react';
import PropTypes from 'prop-types';
import ChannelBox from './ChannelBox';
import PeopleBox from './ProfilBox';
import './ChatPanel.css';

function ChatPanel({channels, people}) {
    return (
        <div>
            <ChannelBox channels={channels}/>
            <PeopleBox people={people}/>
        </div>
    )
};

ChatPanel.propTypes = {
    channels: PropTypes.array.isRequired,
    people: PropTypes.array.isRequired
};

export default ChatPanel;