import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import "./index.css";

function MainContainer({setCards}) {
    return (
        <div className="container">
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
        followersNumber: 50004,
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
    ] 
};

function Header({category}) {
    let boardsNumber = category.boardsNumber;
    let pinsNumber = category.pinsNumber;
    let likesNumber = category.likesNumber;
    let followersNumber = category.followersNumber;
    let followingNumber = category.followingNumber;
    return (
        <header className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center">
                <div className="headerLogo u-marginBottom-md u-marginTop-md">
                    <img className="img-fluid" src={category.logo} alt={category.name}/>
                </div>
                <h1 className="h1 title-big">{category.name}</h1>
            </div>
            <div className="w-100">
                <ul className="nav justify-content-around">
                    <li className="navItem nav-item d-flex flex-column align-items-center u-paddingTop-md u-paddingBottom-md actif">
                        <h5 className="u-marginNone title-big">{boardsNumber > 1000 ? boardsNumber.toString().slice(0, -3) + "K" : boardsNumber}</h5>
                        <h5 className="title-small">Boards</h5>
                    </li>
                    <li className="navItem nav-item d-flex flex-column align-items-center u-paddingTop-md u-paddingBottom-md">
                        <h5 className="u-marginNone title-big">{pinsNumber > 1000 ? pinsNumber.toString().slice(0, -3) + "K" : pinsNumber}</h5>
                        <h5 className="title-small">Pins</h5>
                    </li>
                    <li className="navItem nav-item d-flex flex-column align-items-center u-paddingTop-md u-paddingBottom-md">
                        <h5 className="u-marginNone title-big">{likesNumber > 1000 ? likesNumber.toString().slice(0, -3) + "K" : likesNumber}</h5>
                        <h5 className="title-small">Likes</h5>
                    </li>
                    <li className="navItem nav-item d-flex flex-column align-items-center u-paddingTop-md u-paddingBottom-md">
                        <h5 className="u-marginNone title-big">{followersNumber > 1000 ? followersNumber.toString().slice(0, -3) + "K" : followersNumber}</h5>
                        <h5 className="title-small">Followers</h5>
                    </li>
                    <li className="navItem nav-item d-flex flex-column align-items-center u-paddingTop-md u-paddingBottom-md">
                        <h5 className="u-marginNone title-big">{followingNumber > 1000 ? followingNumber.toString().slice(0, -3) + "K" : followingNumber}</h5>
                        <h5 className="title-small">Following</h5>
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
        <div className="row listCards u-paddingTop-md u-padding-xl">
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
        <div className="col-md-4 u-padding-sm u-marginBottom-md">
            <div className="card u-paddingNone">
                <div className="card-body u-paddingFull-sm">
                    <CardHeader title={card.title} category={card.category}/>
                    <CardImgContainer images={card.images} score={card.score}/>
                    <FollowButton url={card.follow}/>
                </div>
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
            <h5 className="title-big card-title cardTitle">{title}</h5>
            <h6 className="title-big card-subtitle cardSubtitle">{category}</h6>
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