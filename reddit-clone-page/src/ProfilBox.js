import React from 'react';
import PropTypes from 'prop-types';
import logo_reddit from './logo_reddit.jpg'
import "./ProfilBox.css";

function ProfilBox({post}) {
    return (
        <div className="profilBox m-4">
            <img className={post.thumbnail === "self" ? "redditImg" : "profilImg"} src={post.thumbnail === "self" ? logo_reddit : post.thumbnail} alt={post.author}/>
        </div>
    )
}

export default ProfilBox;