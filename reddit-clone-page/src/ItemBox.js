import React from 'react';
import PropTypes from 'prop-types';
import './ItemBox.css';

const ItemBox = ({post}) => {
    return (
        <div>
            {post.author}
        </div>
    )
}

export default ItemBox;