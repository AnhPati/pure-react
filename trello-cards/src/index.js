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

Card.PropTypes = {
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


ReactDOM.render(<Card data={dataProject}/>, document.getElementById("root"));