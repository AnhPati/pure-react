import React from 'react';
import PropTypes from 'prop-types';
import './ChatLine.css';

function ChatLine({post}) {
    return (
        <div className="">
            <div>
                {post.author} {post.postDate}
            </div>
            <div>
                <p>
                    {post.content} 
                </p>
            </div>
        </div>
    )
}

export default ChatLine;