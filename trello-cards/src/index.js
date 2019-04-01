import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import "./index.js";

function Card({data}) {
    return (
        <div>
            <Header title={data.title}/>
            <ListContainer tasks={data.task}/>
            <Footer/>
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object
};

var dataProject = {
    title: "Phone features",
    task: [
        {
            id: 1,
            name: "Subwoofer"
        }, 
        {
            id: 2,
            name: "Non-porous, washable"
        },
        {
            id: 3,
            name: "Wings"
        },
        {
            id: 4,
            name: "Beveled Bezel"
        },
        {
            id: 5,
            name: "Bezeled Bevel"
        },
        {
            id: 6,
            name: "Seedless"
        }

    ]
};

function Header({title}) {
    return (
        <header>
            <CardName title={title}/>
            <MoreOptionButton/>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string
};

function CardName({title}) {
    return (
        <h2>{title}</h2>
    );
};

CardName.propTypes = {
    title: PropTypes.string
};

function MoreOptionButton() {
    return (
        <a href="#">
            <i className="fa fa-ellipsis-h more-options-button"/>
        </a>
    );  
};

function Footer() {
    return (
        <footer>
            <AddCardButton/>
        </footer>
    );
};

function AddCardButton() {
    return (
        <a href="#">
            <p>Add card...</p>
        </a>
    );
};

ReactDOM.render(<Card data={dataProject}/>, document.getElementById("root"));