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
                    <RetweetButton count={tweet.retweets}/>
                    <LikeButton count={tweet.like}/>
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
    likes: 2,
    retwteets: 0,
    timestamp: "2016-07-30 21:24:37"
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

function NameWithHandle({author}) {
    const {name, handle} = author;
    return (
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    )
};

const Time = ({time}) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">{timeString}</span>
    )
};

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetweetButton = ({count}) => (
    <span className="retweet-button">
        <i className="fa fa-retweet"/>
        {getRetweetCount(count)}
    </span>
);

const LikeButton = ({count}) => (
    <span className="like-button">
        <i className="fa fa-heart"/>
            {count > 0 &&
                <span className="likecount">
                    {count}
                </span>
            }
    </span>
);

function getRetweetCount(count) {
    if (count > 0) {
        return (
            <span class="retweet-count">
                {count} 
            </span>
        )
    } else {
        return null;
    }
};

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(<Tweet tweet={testTweet}/>, document.getElementById("root"));