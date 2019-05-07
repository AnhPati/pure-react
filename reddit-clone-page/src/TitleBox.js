import React from "react";
import PropTypes from 'prop-types';
import "./TitleBox.css";

function TitleBox({post}) {
    return (
        <div className="d-flex w-100">
            <a href={post.url}><h1 className="">{post.title}</h1></a><a href="#"><span>{post.subreddit_name_prefixed}</span></a>
        </div>
    )
}

export default TitleBox;