import React from "react";
import PropTypes from 'prop-types';
import "./index.css";

function FileIcon({type}) {
    return (
        <span>
            <i className={`fa fa-${type}`}></i>
        </span>
    );
};

FileIcon.propTypes = {
    type: PropTypes.string.isRequired

};

export default FileIcon;