import React from "react";
import PropTypes from 'prop-types';
import "./TitleBox.css";

function TitleBox({post}) {
    return (
        <div className="d-flex w-100">
            <h3 className="titlePost mb-1">
                <a href={post.url} className="cLink-none">{post.title}</a>
                <span className="titleSource mx-2"><a href="#" className="cLink-none">{post.subreddit_name_prefixed}</a></span>
            </h3>
        </div>
    )
}

export default TitleBox;