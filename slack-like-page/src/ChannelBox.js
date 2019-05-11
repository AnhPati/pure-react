import React from 'react';
import PropTypes from 'prop-types';
import ChannelBox from './ChannelBox';

function ChannelBox({channels}) {
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

    )
};

export default ChannelBox;