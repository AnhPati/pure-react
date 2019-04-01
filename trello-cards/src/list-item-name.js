import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function ListItemName({name}) {
    return (
        <p className="paragraph-md u-marginNone">
            {name}
        </p>
    );
};

ListItemName.propTypes = {
    name: PropTypes.string
};

export default ListItemName;