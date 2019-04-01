import React from 'react';
import PropTypes from 'prop-types';
import ListItemName from './list-item-name';
import './index.css';

function ListItem({task}) {
    return (
        <li className="listItem u-marginBottom-md">
            <ListItemName name={task.name}/>
        </li>
    );
};

ListItem.propTypes = {
    task: PropTypes.object
};

export default ListItem;