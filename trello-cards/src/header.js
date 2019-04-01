import React from 'react';
import PropTypes from 'prop-types';
import CardName from './card-name';
import MoreOptionButton from './more-option-button';
import './index.css';

function Header({title}) {
    return (
        <header className="headerCard u-flexBox u-marginBottom-md">
            <CardName title={title}/>
            <MoreOptionButton/>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;