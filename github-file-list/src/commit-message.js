import React from "react";
import PropTypes from 'prop-types';
import "./index";

function CommitMessage({message}) {
    return (
    <span>
        {message}
    </span>
)};

CommitMessage.propTypes = {
    message: PropTypes.string
};

export default CommitMessage;