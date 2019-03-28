import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import "./index.css";

function ChildrenExercices() {
    return (
        <div className="mainContainer">
            <h2 className="c-exerciceTitle">Exercice 1 :</h2>
            <ErrorBox>
                The world is ending.
            </ErrorBox>
            <h2 className="c-exerciceTitle">Exercices 2 :</h2>
            <ChildrenArray/>
        </div>
    );
};

function ErrorBox({children}) {
    return (
        <div className="alert alert-danger warningBox" role="alert">
            <div className="iconBox">
                <i className="fas fa-exclamation-triangle"></i>
            </div>
            <div className="textBox">
                <p>
                    {children}
                </p>
            </div>
        </div>
    );
};

ErrorBox.propTypes = {
    children: PropTypes.node.isRequired
};

function ChildrenArray() {
    return (
        <div>
            <FirstChildOnly>
                <span>
                    🐦
                </span>
                <span>
                    🐧
                </span>
                <span>
                    🦅
                </span>
                <span>
                    🦆
                </span>
                <span>
                    🦉
                </span>
            </FirstChildOnly>
            <LastChildOnly>
                <span>
                    🐟
                </span>
                <span>
                    🐠
                </span>
                <span>
                    🐡
                </span>
                <span>
                    🦈
                </span>
            </LastChildOnly>
            <Head test={numberFirst}>
                <span>
                    🦔
                </span>
                <span>
                    🐏
                </span>
                <span>
                    🐑
                </span>
                <span>
                    🐐
                </span>
                <span>
                    🐁
                </span>
                <span>
                    🐇
                </span>
                <span>
                    🐿️
                </span>
            </Head>
            <Tail test={numberLast}>
                <span>
                    🦔
                </span>
                <span>
                    🐏
                </span>
                <span>
                    🐑
                </span>
                <span>
                    🐐
                </span>
                <span>
                    🐁
                </span>
                <span>
                    🐇
                </span>
                <span>
                    🐿️
                </span>
            </Tail>
        </div>
    );
};

function FirstChildOnly({children}) {
    let firstChild = React.Children.toArray(children)[0];
    return (
        <div className="childBox u-flexBox centered column u-marginBottom-lg">
            <p className="paragraph-md u-marginBottom-sm u-flexBox">
                <span className="c-circle u-marginRight-xs">a</span>
                <span className="decored">Escoge tu pajaro :</span>
            </p>
            <p className="childSize">
                {firstChild}
            </p>
        </div>
    );
};

FirstChildOnly.propTypes = {
    children: PropTypes.node.isRequired
};

function LastChildOnly({children}) {
    let allChildren = React.Children.toArray(children);
    let lastChild = allChildren.length - 1;
    return (
        <div className="childBox u-flexBox centered column u-marginBottom-lg">
            <p className="paragraph-md u-marginBottom-sm u-flexBox">
                <span className="c-circle u-marginRight-xs">b</span>
                <span className="decored">Escoge tu pez :</span>
            </p>
            <p className="childSize">
                {allChildren[lastChild]}
            </p>
        </div>
    );
};

LastChildOnly.propTypes = {
    children: PropTypes.node.isRequired
};

function Head({children, test}) {
    let childrenFirst = React.Children.map(children, (child) => {
        
        if (children.indexOf(child) < test.number) {
          return <React.Fragment>{child}</React.Fragment>;
        }
    });

    return (
        <div className="childBox u-flexBox centered column u-marginBottom-lg">
            <p className="paragraph-md u-marginBottom-sm u-flexBox">
                <span className="c-circle u-marginRight-xs">c</span>
                <span className="decored">Escoge tus animales :</span>
            </p>
            <p className="childSize">
                {childrenFirst}
            </p>
        </div>
    );
};

var numberFirst = {
    number: 3
}

Head.propTypes = {
    test: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
};

function Tail({ children, test }) {
    let childrenArray = React.Children.toArray(children);
    let childrenLast = childrenArray.slice(-test.number);

    return (
        <div className="childBox u-flexBox centered column u-marginBottom-lg">
            <p className="paragraph-md u-marginBottom-sm u-flexBox">
                <span className="c-circle u-marginRight-xs">d</span>
                <span className="decored">Escoge tus animales :</span>
            </p>
            <p className="childSize">
                {childrenLast}
            </p>
        </div>
    );
};

var numberLast = {
    number: 2
}

Tail.propTypes = {
    test: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
};

ReactDOM.render(<ChildrenExercices/>, document.getElementById("root"));