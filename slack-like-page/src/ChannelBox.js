import React from 'react';
import PropTypes from 'prop-types';
import './ChannelBox.css';

const ChannelBox = ({channel, channelChoice}) => {
    return (
        <div className={channel.active ? "channelActive w-100" : "w-100"}>
            <button onClick={() => channelChoice(channel)} className={channel.news ? "btnChat news w-100" : "btnChat w-100"}>
                #{channel.name}
            </button>
        </div>
    );
};

ChannelBox.propTypes = {
    channel: PropTypes.object.isRequired,
    channelChoice: PropTypes.func.isRequired
}

export default ChannelBox;