import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import "./index.css";

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
        <header className="headerCard u-flexBox u-marginBottom-md">
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
        <h2 className="title-md u-marginNone">{title}</h2>
    );
};

CardName.propTypes = {
    title: PropTypes.string
};

function MoreOptionButton() {
    return (
        <a className="c-linkBlank" href="#">
            <i className="fa fa-ellipsis-h more-options-button"/>
        </a>
    );  
};

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

function Footer() {
    return (
        <footer className="footerCard u-marginTop-md">
            <AddCardButton/>
        </footer>
    );
};

function AddCardButton() {
    return (
        <a className="c-linkBlank" href="#">
            <p className="paragraph-md u-marginNone">Add card...</p>
        </a>
    );
};

ReactDOM.render(<Card data={dataProject}/>, document.getElementById("root"));