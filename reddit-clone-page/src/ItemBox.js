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
            <div className="d-flex flex-column">
                <TitleBox post={post}/>
                <SubBox post={post}/>
                <BtnBox comment={post.num_comments}/>
            </div>
        </div>
    )
}

export default ItemBox;