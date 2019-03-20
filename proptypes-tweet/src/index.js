import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import moment from "moment";
import PropTypes from "prop-types";

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
                    <LikeButton count={tweet.likes}/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    );
};

Tweet.propTypes = {
    tweet: PropTypes.shape({
        message: PropTypes.string,
        gravatar: PropTypes.string,
        author: PropTypes.shape({
            handle: PropTypes.string,
            name: PropTypes.string
        }),
        likes: PropTypes.number,
        retweets: PropTypes.number,
        timestamp: PropTypes.string
    })
}

var testTweet = {
    message: "Wesh la tweetosphère ! Qu'est ce qu'il se pas sur le net ?",
    gravatar: "xyz",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    likes: 2,
    retweets: 0,
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
};

Avatar.propTypes = {
    hash: PropTypes.string
};

function Message({text}) {
    return (
        <div className="message">
            {text}
        </div>
    );
};

Message.prototypes = {
    text: PropTypes.string
};

function NameWithHandle({author}) {
    const {name, handle} = author;
    return (
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
};

NameWithHandle.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
};

const Time = ({time}) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">{timeString}</span>
    );
};

Time.prototypes = {
    time: PropTypes.string
}

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetweetButton = ({count}) => (
    <span className="retweet-button">
        <i className="fa fa-retweet"/>
        <Count count={count}/>
    </span>
);

RetweetButton.propTypes = {
    count: PropTypes.number
};

const LikeButton = ({count}) => (
    <span className="like-button">
        <i className="fa fa-heart"/>
            <span className="likecount">
                {count ? count : null}
            </span>
    </span>
);

LikeButton.propTypes = {
    count: PropTypes.number
};

function Count({count}) {
    if (count > 0) {
        return (
            <span class="retweet-count">
                {count} 
            </span>
        )
    } else {
        return null;
    };
};

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(<Tweet tweet={testTweet}/>, document.getElementById("root"));