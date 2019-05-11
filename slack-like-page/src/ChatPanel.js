import React from 'react';
import PropTypes from 'prop-types';
import ChannelBox from './ChannelBox';
import ProfilBox from './ProfilBox';
import './ChatPanel.css';

function ChatPanel({channels, people}) {
    return (
        <div>
            <ChannelBox channels={channels}/>
            <PeopleBox people={people}/>
        </div>
    )
};

ChatPanel.proptypes = {
    channels: PropTypes.number.isRequired,
    people: PropTypes.num.isRequired
};

export default ChatPanel;