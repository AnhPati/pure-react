import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from "moment";
import './index.css';

function HackerNews({news, nav}) {
    return (
        <div>
            <Header nav={nav}/>
            <ListArticles news={news}/>
        </div>
    );
};

HackerNews.propTypes = {
    news: PropTypes.array.isRequired,
    nav: PropTypes.object.isRequired
};

function Header({nav}) {
    return ( 
        <header>
            <Entitle nav={nav}/>
            <NavContainer menu={nav.menu}/>
        </header>
    );
};

Header.propTypes = {
    nav: PropTypes.object
};

function Entitle({nav}) {
    return (
        <div>
            <Logo img={nav.img}/>
            <MainTitle title={nav.title}/>
        </div>
    );
};

Entitle.propTypes = {
    nav: PropTypes.object
};

function Logo({img}) {
    return (
        <div>
            <img alt={img.alt} src={img.src}/>
        </div>
    );
};

Logo.propTypes = {
    img: PropTypes.shape({
        alt: PropTypes.string,
        src: PropTypes.string
    })
};

function MainTitle({title}) {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

MainTitle.propTypes = {
    title: PropTypes.string
};

function NavContainer({menu}) {
    return (
        <ul>
            {menu.map(item => (
                <NavItem key={item.id} item={item}/>
            ))}  
        </ul>
    );
};

NavContainer.propTypes = {
    menu: PropTypes.array
}

function NavItem({item}) {
    return (
        <li>
            <a href={item.href}>
                <span>{item.name}</span>
            </a>
        </li>
    );
};

NavItem.propTypes = {
    item: PropTypes.object
};

var navConfig = {
    menu: [
        {
            id: 1,
            name: "new",
            href: "#"
        },
        {
            id: 2,
            name: "threads",
            href: "#"
        },
        {
            id: 3,
            name: "comments",
            href: "#"
        },
        {
            id: 4,
            name: "show",
            href: "#"
        },
        {
            id: 5,
            name: "ask",
            href: "#"
        },
        {
            id: 6,
            name: "jobs",
            href: "#"
        },
        {
            id: 7,
            name: "submit",
            href: "#"
        }
    ],
    title: "Hacker News",
    img: {
        alt: "logo",
        src: ""
    }
}


function ListArticles({news}) {
    return (
        <ul>
            {news.map(newItem => (
                <Article key={newItem.id} newItem={newItem}/>
            ))}
        </ul>
    )
};

ListArticles.propTypes = {
    news: PropTypes.array
};

function Article({newItem}) {
    return (
        <div>
            <ArticleEntitle newItem={newItem}/>
            <ArticleInfo info={newItem}/>
        </div>
    );
};

Article.propTypes = {
    newItem: PropTypes.object
};

function ArticleEntitle({newItem}) {
    return (
        <div>
            <Rank rank={newItem.rank} move={newItem.move}/>
            <Title title={newItem.title}/>
            <Source src={newItem.src}/>
        </div>
    );
};

ArticleEntitle.propTypes = {
    newItem: PropTypes.object
};

function Rank({rank, move}) {
    return (
        <div>
            <span>
                {rank}.
            </span>
            {/*<i className={`${move ? fa-icon : fa-another}`}></i>*/}
        </div>
    );
};

Rank.propTypes = {
    rank: PropTypes
};

function Title({title}) {
    return (
        <h2>
            {title}
        </h2>
    );
};

Title.propTypes = {
    title: PropTypes.string
};

function Source({src}) {

    return (
        <p>
            ({src})
        </p>
    );
};

Source.propTypes = {
    src: PropTypes.string
};

function ArticleInfo({info}) {
    return (
        <ul>
            <li>
                <ScoreBox score={info.score} author={info.author}/>
            </li>
            <li>
                <Time time={info.date}/>
            </li>
            <li>
                <Flag/>
            </li>
            <li>
                <Hide/>
            </li>
            <li>
                <CommentsCount number={info.comments}/>
            </li>
            <li>
                <InstaButton/>
            </li>
            <li>
                <SaveButton/>
            </li>
        </ul>
    );
};

ArticleInfo.propTypes = {
    info: PropTypes.object
};

function ScoreBox({score, author}) {
    return (
        <div>
            <p>
                <Score score={score}/>
                <Author author={author}/>
            </p>
        </div>
    );
};

ScoreBox.propTypes = {
    score: PropTypes.number,
    author: PropTypes.string
};

function Score({score}) {
    return (
        <span>{score} points</span>
    );
};

Score.propTypes = {
    score: PropTypes.number
};

function Author({author}) {
    return (
        <span>by {author}</span>
    );
};

Author.propTypes = {
    author: PropTypes.string
};

const Time = ({time}) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">{timeString}</span>
    );
};

Time.prototypes = {
    time: PropTypes.string
};

const Flag = () => (
    <a href="#"><p>flag</p></a>
);

const Hide = () => (
    <a href="#"><p>hide</p></a>
);

function CommentsCount({number}) {
    return (
        <div>
            <span>{number} comments</span>
        </div>
    );
};

CommentsCount.propTypes = {
    number: PropTypes.number
};

const InstaButton = () => (
    <a href="#">instapaper</a>
);

const SaveButton = () => (
    <a href="#">save to pocket</a>
);

var newsData = [
    {
        id: 1,
        rank: 1,
        move: true,
        title: "Coucou",
        score: 1203,
        author: "Jeff",
        date: "2016-07-11 21:24:00",
        comments: 10,
    },
    {
        id: 2,
        rank: 1,
        move: true,
        title: "Coucou",
        score: 1203,
        author: "Jeff",
        date: "2016-07-11 21:24:00",
        comments: 10,
    },
    {
        id: 3,
        rank: 1,
        move: true,
        title: "Coucou",
        score: 1203,
        author: "Jeff",
        date: "2016-07-11 21:24:00",
        comments: 10,
    },
];

ReactDOM.render(<HackerNews news={newsData} nav={navConfig}/>, document.getElementById('root'));