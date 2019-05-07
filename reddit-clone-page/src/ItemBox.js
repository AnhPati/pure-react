import React from 'react';
import PropTypes from 'prop-types';
import ProfilBox from './ProfilBox';
import TitleBox from './TitleBox';
import SubBox from './SubBox';
import BtnBox from './BtnBox';
import './ItemBox.css';

const ItemBox = ({post}) => {
    return (
        <div className="d-flex">
            <ProfilBox post={post}/>
            <div>
                <TitleBox post={post}/>
                <SubBox post={post}/>
                <BtnBox/>
            </div>
            {post.author}
            <p>ID : {post.id}</p>
        </div>
    )
}

export default ItemBox;