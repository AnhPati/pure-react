import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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
    nmenu: PropTypes.array
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

function ListArticles({news}) {
    <ul>
        {news.map(new => (
            <Article key={new.id} new={new}/>
        ))}
    </ul>
};

ListArticles.propTypes = {
    news: PropTypes.array
};

function Article({new}) {
    return (
        <div>
            <ArticleEntitle new={new}/>
            <ArticleInfo info={new}/>
        </div>
    );
};

Article.propTypes = {
    new: PropTypes.object
};

function ArticleEntitle({new}) {
    return (
        <div>
            <Rank rank={new.rank} move={new.move}/>
            <Title title={new.title}/>
            <Source src={new.src}/>
        </div>
    );
};

ArticleEntitle.propTypes = {
    new.object
};

function Rank({rank}) {
    return (
        <div>
            <span>
                {rank}.
            </span>
            <i className={`${move ? fa-icon : fa-another}`}></i>
        </div>
    );
};

Rank.propTypes = {
    rank: Proptypes
};

function Title({title}) {
    return (
        <h2>
            {title}
        </h2>
    );
};

Title.propTypes = {
    title: Propotypes.string
}

function Source({src}) {

    return (
        <p>
        
            </p>
    )
}

ReactDOM.render(<HackerNews/>, document.getElementById('root'));