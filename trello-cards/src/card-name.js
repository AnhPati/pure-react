import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function CardName({title}) {
    return (
        <h2 className="title-md u-marginNone">{title}</h2>
    );
};

CardName.propTypes = {
    title: PropTypes.string
};

export default CardName;