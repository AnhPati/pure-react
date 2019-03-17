import React from "react";
import ReactDOM from "react-dom";

function Tests() {
    return (
        <div>
            <MyThing/>
            <MyThing2/>
            <Greeting/>
            <Table/>
        </div>
    )
}

function MyThing() {
    return (
        <div className="book">
            <div className="title">
                The Title
            </div>
            <div className="author">
                The Author
            </div>
            <ul className="stats">
                <li className="rating">
                    5 stars
                </li>
                <li className="isbn">
                    12 - 345678 - 910
                </li>
            </ul>
            <div>
                {/*a. Single lines*/}
                Newline
                Test
            </div>
            <div>
                {/*b. Empty lines*/}
                Empty
                
                Newline
                
                Test
            </div>
            <div>
                {/*c. Space with Newlines*/}
                &nbsp;No breaking
                &nbsp;Space&nbsp;
            </div>
            <div>
                {/*d. Inserting spaces when content spans multiple lines*/}
                Line 1
                {' '}
                Line 2
            </div>
        </div>
    )
}

function MyThing2() {
    return (
        React.createElement('div',
            {className: "book"},
            React.createElement('div',
                {className: "title"},
                'The Title'
            ),
            React.createElement('div',
                {className: "author"},
                'The Author'
            ),
            React.createElement('ul',
                {className: "stats"},
                React.createElement('li',
                    {className: "rating"},
                    '5 stars'
                ),
                React.createElement('li',
                    {className: "isbn"},
                    '12 - 345678 - 910'
                )
            )
        )
    )
}

function Greeting() {
    let username = "Rhum";
    let hello = "Hello " + username;
    // Try all of these variations:
    //let username = "root";
    //let username = undefined;
    //let username = null;
    //let username = false;
    return (
        <div>
            {username === null || username === undefined ? "Not Loggin"
            : typeof username === "string" ? hello
            : ""}
        </div>
    )
}

function Table() {
    return (
        <table>
            <tbody>
                <tr>
                    <td>first col</td>
                    <td>second col</td>
                    <td>third col</td>
                    <Data/>
                </tr>
            </tbody>
        </table>
    )
}

function Data() {
    return (
        <div>
            <td>first data-col</td>
            <td>second data-col</td>
            <td>third data-col</td>
        </div>
    )
}

ReactDOM.render(<Tests/>, document.getElementById("root"));