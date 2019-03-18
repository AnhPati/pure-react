import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//{tweet} prop, destructured
function Tweet({tweet}) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <NameWithHandle/><Time/>
                <Message/>
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

function Message() {
    return (
        <div className="message">
            This is less than 140 characters.
        </div>
    );
};

function NameWithHandle() {
    return (
        <span className="name-with-handle">
            <span className="nam">Your Name</span>
            <span className="handle">@yourhandle</span>
        </span>
    )
};

const Time = () => (
    <span className="time">3h ago</span>
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