import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import moment from "moment";

const Time = ({time}) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">{timeString}</span>
    );
};

Time.prototypes = {
    time: PropTypes.string
};

export default Time;