import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import "./index.css";

function MainContainer({setCards}) {
    return (
        <div>
            <Header category={setCards.category}/>
            <ListCards cards={setCards.cards}/>
        </div>
    );
};

MainContainer.propTypes = {
    setCards: PropTypes.object.isRequired
};

var cardsData = {
    category: {
        name: "Cow explorer",
        logo: "https://wordassociations.net/image/200x/svg_to_png/lemmling_Cartoon_cow.png",
        boardsNumber: 43,
        pinsNumber: 12,
        likesNumber: 1234,
        followersNumber: 304,
        followingNumber: 210,
    },
    cards: [
        {
            id: 1,
            title: "Une vache tout ce qu'il y a de plus banal",
            category: "Ruminant",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbii2cE-mppOkYG1hfBf17qwdtvCTcSz6_r23WvymzduB3pYxL",
                "https://www.avenuedesanges.com/media/catalog/product/cache/29/image/9df78eab33525d08d6e5fb8d27136e95/l/o/lola-medium-gris-clair---noukies.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzRBjtFVDTdDAsxsyXr0Xq2fzWHgUgEbvPxHVTJOeHXgYSDhjZA",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONFa8S_WtxGXUuecp0SIiwsdfeH507WSezACsCXY9ef5vcqN-"
            ],
            score: 4.444,
            follow: false
        },
        {
            id: 2,
            title: "Une vache tout ce qu'il y a de plus banal",
            category: "Ruminant",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbii2cE-mppOkYG1hfBf17qwdtvCTcSz6_r23WvymzduB3pYxL",
                "https://www.avenuedesanges.com/media/catalog/product/cache/29/image/9df78eab33525d08d6e5fb8d27136e95/l/o/lola-medium-gris-clair---noukies.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzRBjtFVDTdDAsxsyXr0Xq2fzWHgUgEbvPxHVTJOeHXgYSDhjZA",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONFa8S_WtxGXUuecp0SIiwsdfeH507WSezACsCXY9ef5vcqN-"
            ],
            score: 4.444,
            follow: false
        },
        {
            id: 3,
            title: "Une vache tout ce qu'il y a de plus banal",
            category: "Ruminant",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbii2cE-mppOkYG1hfBf17qwdtvCTcSz6_r23WvymzduB3pYxL",
                "https://www.avenuedesanges.com/media/catalog/product/cache/29/image/9df78eab33525d08d6e5fb8d27136e95/l/o/lola-medium-gris-clair---noukies.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzRBjtFVDTdDAsxsyXr0Xq2fzWHgUgEbvPxHVTJOeHXgYSDhjZA",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONFa8S_WtxGXUuecp0SIiwsdfeH507WSezACsCXY9ef5vcqN-"
            ],
            score: 4.444,
            follow: false
        },
        {
            id: 4,
            title: "Une vache tout ce qu'il y a de plus banal",
            category: "Ruminant",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbii2cE-mppOkYG1hfBf17qwdtvCTcSz6_r23WvymzduB3pYxL",
                "https://www.avenuedesanges.com/media/catalog/product/cache/29/image/9df78eab33525d08d6e5fb8d27136e95/l/o/lola-medium-gris-clair---noukies.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzRBjtFVDTdDAsxsyXr0Xq2fzWHgUgEbvPxHVTJOeHXgYSDhjZA",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONFa8S_WtxGXUuecp0SIiwsdfeH507WSezACsCXY9ef5vcqN-"
            ],
            score: 4.444,
            follow: false
        },
        {
            id: 5,
            title: "Une vache tout ce qu'il y a de plus banal",
            category: "Ruminant",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbii2cE-mppOkYG1hfBf17qwdtvCTcSz6_r23WvymzduB3pYxL",
                "https://www.avenuedesanges.com/media/catalog/product/cache/29/image/9df78eab33525d08d6e5fb8d27136e95/l/o/lola-medium-gris-clair---noukies.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzRBjtFVDTdDAsxsyXr0Xq2fzWHgUgEbvPxHVTJOeHXgYSDhjZA",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONFa8S_WtxGXUuecp0SIiwsdfeH507WSezACsCXY9ef5vcqN-"
            ],
            score: 4.444,
            follow: false
        },
        {
            id: 6,
            title: "Une vache tout ce qu'il y a de plus banal",
            category: "Ruminant",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbii2cE-mppOkYG1hfBf17qwdtvCTcSz6_r23WvymzduB3pYxL",
                "https://www.avenuedesanges.com/media/catalog/product/cache/29/image/9df78eab33525d08d6e5fb8d27136e95/l/o/lola-medium-gris-clair---noukies.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzRBjtFVDTdDAsxsyXr0Xq2fzWHgUgEbvPxHVTJOeHXgYSDhjZA",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONFa8S_WtxGXUuecp0SIiwsdfeH507WSezACsCXY9ef5vcqN-"
            ],
            score: 4.444,
            follow: false
        },
        {
            id: 7,
            title: "Une vache tout ce qu'il y a de plus banal",
            category: "Ruminant",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbii2cE-mppOkYG1hfBf17qwdtvCTcSz6_r23WvymzduB3pYxL",
                "https://www.avenuedesanges.com/media/catalog/product/cache/29/image/9df78eab33525d08d6e5fb8d27136e95/l/o/lola-medium-gris-clair---noukies.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzRBjtFVDTdDAsxsyXr0Xq2fzWHgUgEbvPxHVTJOeHXgYSDhjZA",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONFa8S_WtxGXUuecp0SIiwsdfeH507WSezACsCXY9ef5vcqN-"
            ],
            score: 4.444,
            follow: false
        },
    ] 
};

function Header({category}) {
    return (
        <header>
            <div>
                <img src={category.logo} alt={category.name}/>
                <h1>{category.name}</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <p>{category.boardsNumber}</p>
                        <h5>Boards</h5>
                    </li>
                    <li>
                        <p>{category.pinsNumber}</p>
                        <h5>Pins</h5>
                    </li>
                    <li>
                        <p>{category.likesNumber}</p>
                        <h5>Likes</h5>
                    </li>
                    <li>
                        <p>{category.followersNumber}</p>
                        <h5>Followers</h5>
                    </li>
                    <li>
                        <p>{category.followingNumber}</p>
                        <h5>Following</h5>
                    </li>
                </ul>
            </div>
        </header>
    );
};

Header.propTypes = {
    category: PropTypes.object.isRequired
};

function ListCards({cards}) {
    return (
        <div>
            {cards.map(card => (
                <Card key={card.id} card={card}/>
            ))}
        </div>
    );
};

ListCards.propTypes = {
    cards: PropTypes.array.isRequired
}

function Card({card}) {
    return (
        <div className="card col-md-4 u-paddingNone">
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbii2cE-mppOkYG1hfBf17qwdtvCTcSz6_r23WvymzduB3pYxL",
        "https://www.avenuedesanges.com/media/catalog/product/cache/29/image/9df78eab33525d08d6e5fb8d27136e95/l/o/lola-medium-gris-clair---noukies.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzRBjtFVDTdDAsxsyXr0Xq2fzWHgUgEbvPxHVTJOeHXgYSDhjZA",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONFa8S_WtxGXUuecp0SIiwsdfeH507WSezACsCXY9ef5vcqN-"
    ],
    score: 4.444,
    follow: false
}

function CardHeader({title, category}) {
    return (
        <React.Fragment>
            <h5 className="card-title cardTitle">{title}</h5>
            <h6 className="card-subtitle cardSubtitle">{category}</h6>
        </React.Fragment>
    );
};

CardHeader.propTypes = {
    title: PropTypes.string,
    category: PropTypes.string
};

function CardImgContainer({images}) {
    return (
        <div className="row u-marginTop-md">
            <div className="col-md-12 cardImg-primary u-marginBottom-xs">
                <img src={images[0]} className="card-img card"/>
            </div>
            <div className="card-group u-marginBottom-xs col-md-12">
                <div className="col-md-4 cardImg-secondary u-paddingNone">
                    <img src={images[1]} className="card-img card"/>
                </div>
                <div className="col-md-4 cardImg-secondary u-paddingNone">
                    <img src={images[2]} className="card-img card"/>
                </div>
                <div className="col-md-4 cardImg-secondary u-paddingNone">
                    <img src={images[3]} className="card-img card"/>
                </div>
            </div>
        </div>
    );
};

CardImgContainer.propTypes = {
    images: PropTypes.array
};

const FollowButton = ({url}) => {
    return (
        <a href={url} className="btn btn-light btn-block c-followBtn">
            Follow
        </a>
    );
};

FollowButton.propTypes = {
    url: PropTypes.string.isRequired
};

ReactDOM.render(<MainContainer setCards={cardsData}/>, document.getElementById("root"));