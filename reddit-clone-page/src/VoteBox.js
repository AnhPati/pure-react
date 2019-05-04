import React from 'react';
import PropTypes from 'prop-types';
import './VoteBox.css';

const VoteBox = ({score}) => {
    return (
        <div>
            {score}
        </div>
    )
}

export default VoteBox;