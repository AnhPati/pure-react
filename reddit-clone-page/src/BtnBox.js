import React from 'react';
import PropTypes from 'prop-types';
import './BtnBox.css';

const BtnBox = ({comment}) => {
    return (
        <div className="d-flex">
            <a href="#" className="cLink-none btnText uMargin-right-sm">{comment > 0 ? `${comment} ` : ""}comment{comment > 1 ? "s" : ""}</a>
            <a href="#" className="cLink-none btnText uMargin-right-sm">share</a>
            <a href="#" className="cLink-none btnText uMargin-right-sm">save</a>
            <a href="#" className="cLink-none btnText uMargin-right-sm">hide</a>
            <a href="#" className="cLink-none btnText uMargin-right-sm">hide</a>
            <a href="#" className="cLink-none btnText uMargin-right-sm">report</a>
            <a href="#" className="cLink-none btnText uMargin-right-sm">pocket</a>
        </div>
    )
}

export default BtnBox;