import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './list-item';
import './index.css';

function ListContainer({tasks}) {
    return (
        <ul className="c-listBlank listContainer u-marginNone">
            {tasks.map(task => (
                <ListItem key={task.id} task={task}/>
            ))}
        </ul>
    );
};

ListContainer.propTypes = {
    tasks: PropTypes.array
};

export default ListContainer;