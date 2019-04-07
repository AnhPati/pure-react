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
        <header className="headerContainer u-flexBox">
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
        <div className="u-flexBox">
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
        < div className = "title-xl logoCSS u-flexBox centered u-marginRight" >
            <span>Y</span>
            {/*<img alt={img.alt} src={img.src}/>*/} 
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
            <h1 className="title-xl u-marginCentered">{title}</h1>
        </div>
    );
};

MainTitle.propTypes = {
    title: PropTypes.string
};

function NavContainer({menu}) {
    return (
        <ul className="u-flexBox c-listBlank">
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
        < li class = "navItem title-lg u-marginCentered" >
            <a href={item.href} className="c-linkBlank">
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
        < ul className = "listArticles c-listBlank" >
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
        <div className="u-flexBox">
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
        <h2 className="u-marginNone">
            {title}
        </h2>
    );
};

Title.propTypes = {
    title: PropTypes.string
};

function Source({src}) {

    return (
        <p className="u-marginNone">
            ({src})
        </p>
    );
};

Source.propTypes = {
    src: PropTypes.string
};

function ArticleInfo({info}) {
    return (
        <ul class="u-flexBox c-listBlank">
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
    <a href="#" className="c-linkBlank"><p>flag</p></a>
);

const Hide = () => (
    <a href="#" className="c-linkBlank"><p>hide</p></a>
);

function CommentsCount({number}) {
    return (
        <div>
            <span>{number} {number > 1 ? "comments" : "comment"}</span>
        </div>
    );
};

CommentsCount.propTypes = {
    number: PropTypes.number
};

const InstaButton = () => (
    <a href="#" className="c-linkBlank">instapaper</a>
);

const SaveButton = () => (
    <a href="#" className="c-linkBlank">save to pocket</a>
);

var newsData = [
    {
        id: 1,
        rank: 1,
        move: true,
        title: "Why I'm Suing the US Government",
        src: "(bunniestudios.com)",
        score: 1346,
        author: "ivank",
        date: "2019-04-07 18:37:20",
        comments: 257,
    },
    {
        id: 2,
        rank: 2,
        move: true,
        title: "Zenzizenziznezic",
        src: "(wikipedia.org)",
        score: 140,
        author: "vinchuco",
        date: "2019-04-08 02:37:20",
        comments: 140,
    },
    {
        id: 3,
        rank: 3,
        move: true,
        title: "A practical security guide for web developers",
        src: "(bunniestudios.com)",
        score: 72,
        author: "zianwar",
        date: "2019-04-08 01:37:20",
        comments: 6,
    },
    {
        id: 4,
        rank: 4,
        move: true,
        title: "I got arrested in Kazakhstran and represented myself in court",
        src: "(bunniestudios.com)",
        score: 370,
        author: "drpp",
        date: "2019-04-07 21:37:20",
        comments: 79,
    },
    {
        id: 5,
        rank: 5,
        move: true,
        title: "Sculpture of Housing Prices Ripping San Francisco Apart",
        src: "(dougmccune.com)",
        score: 254,
        author: "dougmccune",
        date: "2019-04-07 21:37:20",
        comments: 149,
    },
    {
        id: 6,
        rank: 6,
        move: true,
        title: "Practical Guide to Bare Metal C++",
        src: "(gitbooks.io)",
        score: 175,
        author: "adamnemecek",
        date: "2019-04-07 21:37:20",
        comments: 31,
    },
    {
        id: 7,
        rank: 7,
        move: true,
        title: "Superformula",
        src: "(wikipedia.org)",
        score: 77,
        author: "GuiA",
        date: "2019-04-06 23:37:20",
        comments: 17,
    },
    {
        id: 8,
        rank: 8,
        move: true,
        title: "Police asked 3D printing lab to recreate a dead man's fingers to unlock phone",
        src: "(fusion.net)",
        score: 109,
        author: "theandrewballey",
        date: "2019-04-06 18:37:20",
        comments: 57,
    },
    {
        id: 9,
        rank: 9,
        move: true,
        title: "Edward Snowden's New Research Aims to Keep Smartphones from Betraying Owners",
        src: "(theintercept.com)",
        score: 190,
        author: "Jeff",
        date: "2019-04-07 03:37:20",
        comments: 69,
    },
    {
        id: 10,
        rank: 10,
        move: true,
        title: "Assessing IBM's POWER8, Part 1 : A Low Level Look at Little Endian",
        src: "(anandtech.com)",
        score: 24,
        author: "tambourine_man",
        date: "2019-04-07 14:37:20",
        comments: 1,
    }
];

ReactDOM.render(<HackerNews news={newsData} nav={navConfig}/>, document.getElementById('root'));