import React from 'react';
import PropTypes from 'prop-types';
import './ChannelBox.css';

const ChannelBox = ({channels}) => {
    return (
        <div className="uMargin-bottom-xl">
            
            < ul className = "cList-none d-flex flex-column align-items-start" >
            <h5>
                CHANNELS
            </h5>
                {channels.map(channel => {
                    return (
                        <li key={channel.id} className={channel.active ? "channelActive w-100" : "w-100"}>
                            <button className="btnChat w-100">
                                #{channel.name}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

ChannelBox.propTypes = {
    channels: PropTypes.array.isRequired
}

export default ChannelBox;