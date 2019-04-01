import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import ListContainer from './list-container';
import Footer from './footer';

function Card({data}) {
    return (
        <div className="card u-flexBox column centered">
            <Header title={data.title}/>
            <ListContainer tasks={data.task}/>
            <Footer/>
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object
};

export default Card;