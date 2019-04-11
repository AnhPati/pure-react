import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

function Card({card}) {
    return (
        <div className="card">
            <div className="card-body">
                <CardHeader title={card.title} category={card.category}/>
                <CardImgContainer images={card.images} score={card.score}/>
                <FollowButton url={card.follow}/>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object
};

var cardData = {
    title: "Une vache tout ce qu'il y a de plus banal",
    category: "Ruminant",
    images : [
        "https://www.vache-maraichine.org/wp-content/uploads/2018/04/vachemaraichine.jpg",
        "https://www.courrierinternational.com/sites/ci_master/files/styles/image_original_765/public/assets/images//illustrations/article/2010/08/vache.jpg?itok=0Pf-EE12",
        "https://cdn.radiofrance.fr/s3/cruiser-production/2016/02/923e0c3e-74b4-4334-8312-1cee9d6419da/870x489_tarineok.jpg",
        "https://parcsaintecroix.com/wp-content/uploads/2017/10/vache-ecossaise-taureau-web-785x460.jpg"
    ],
    score: 4.444,
    follow: false
}

function CardHeader({title, category}) {
    return (
        <ReactFragment>
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle">{category}</h6>
        </ReactFragment>
    );
};

CardHeader.propTypes = {
    title: PropTypes.string,
    category: PropTypes.string
};

function CardImgContainer({images}) {
    return (
        <div className="row">
            <div className="card col-md-12">
                <img src={images[0]} className="card-img"/>
            </div>
            <div className="card col-md-3">
                <img src={images[1]} className="card-img"/>
            </div>
            <div className="card col-md-3">
                <img src={images[2]} className="card-img"/>
            </div>
            <div className="card col-md-3">
                <img src={images[3]} className="card-img"/>
            </div>
        </div>
    );
};

CardImgContainer.propTypes = {
    images: PropTypes.array
};

const FollowButton = ({url}) => {
    return (
        <a href={url} className="btn btn-light c-followBtn">
            Follow
        </a>
    );
};

FollowButton.propTypes = {
    url: PropTypes.string.isRequired
};

ReactDOM.render(<Card card={cardData}/>, document.getElementById("root");)