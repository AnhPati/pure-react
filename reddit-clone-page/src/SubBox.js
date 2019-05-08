import React from 'react';
import PropTypes from 'prop-types';
import Time from './time';
import './SubBox.css';

function SubBox({post}) {
    let time = post.created_utc.toString();
    return (
        <div>
            <p>Submitted <Time time={time}/> ago by <a href="#">{post.author}</a></p>
        </div>
    )
}

export default SubBox;