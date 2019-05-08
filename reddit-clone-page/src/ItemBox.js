import React from 'react';
import PropTypes from 'prop-types';
import ProfilBox from './ProfilBox';
import TitleBox from './TitleBox';
import SubBox from './SubBox';
import BtnBox from './BtnBox';
import './ItemBox.css';

const ItemBox = ({post}) => {
    return (
        <div className="d-flex w-100">
            <ProfilBox post={post}/>
            <div className="d-flex flex-column w-100 py-4 border-bottom">
                <TitleBox post={post}/>
                <SubBox post={post}/>
                <BtnBox comment={post.num_comments}/>
            </div>
        </div>
    )
}

ItemBox.prototypes = {
    post: PropTypes.object.isRequired,
}

export default ItemBox;