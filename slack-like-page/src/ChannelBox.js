import React from 'react';
import PropTypes from 'prop-types';
import './ChannelBox.css';

const ChannelBox = ({channels}) => {
    return (
        <ul>
            {channels.map(channel => {
                return (
                    <li key={channel.id} className={channel.active ? "channelActive" : ""}>
                        #{channel.name}
                    </li>
                )
            })}
        </ul>

    );
};

ChannelBox.propTypes = {
    channels: PropTypes.array.isRequired
}

export default ChannelBox;