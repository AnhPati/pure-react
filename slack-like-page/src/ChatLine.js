import React from 'react';
import PropTypes from 'prop-types';
import './ChatLine.css';

function ChatLine({post}) {
    return (
        <div className="w-100 d-flex flex-column align-items-start">
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