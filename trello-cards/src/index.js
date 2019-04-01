import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import Card from "./card";
import "./index.css";

function ListCard({datas}) {
    return (
        <div className="mainContainer">
            {datas.map(data => (
                <Card key={data.id} data={data}/>
            ))}
        </div>
    );
};

ListCard.prototypes = {
    datas: PropTypes.array
}

var datasProject = [
    {
        id: 1,
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
    },
    {
        id: 2,
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
    },
    {
        id: 3,
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
    },
    {
        id: 4,
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
    },
    {
        id: 5,
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
    },
    {
        id: 6,
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
    },
];

ReactDOM.render(<ListCard datas={datasProject}/>, document.getElementById("root"));