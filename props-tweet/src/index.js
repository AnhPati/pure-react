import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import moment from "moment";

//{tweet} prop, destructured
function Tweet({tweet}) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
                <Message text={tweet.message}/>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton/>
                    <LikeButton/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    );
};

var testTweet = {
    message: "Wesh la tweetosphère ! Qu'est ce qu'il se pas sur le net ?",
    gravatar: "xyz",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    like: 2,
    retwteets: 0,
    timestamp: "2016_07_30 21:24:37"
};

function Avatar({hash}) {
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return (
            <img
                src={url}
                className="avatar"
                alt="avatar"
            />
    );
}

function Message({text}) {
    return (
        <div className="message">
            {text}
        </div>
    );
};

function NameWithHandle({name, handle}) {
    return (
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    )
};

const Time = ({time}) => (
    <span className="time">{time}</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
    <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(<Tweet tweet={testTweet}/>, document.getElementById("root"));