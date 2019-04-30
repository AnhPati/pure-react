import React from 'react';

const Nav = ({ item, total, activeTab, onTabChange }) => (
    <nav className="App-nav">
        <ul>
            <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
                <NavLink index={0} onClick={onTabChange}>Items</NavLink>
            </li>
            <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
                <NavLink index={1} onClick={onTabChange}>Cart</NavLink>
            </li>
        </ul>
        <div className={`App-nav-cart ${item > 0 ? 'show' : ''}`}>
             <i className="fas fa-shopping-cart"></i> {item} item{item > 1 ? 's' : ''} ({total > 0 ? `$ ${total}` : '$ 0'})
        </div>
    </nav>
);

class NavLink extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.index);
    }

    render() {
        return (
            <a onClick={this.handleClick}>
                {this.props.children}
            </a>
        );
    };
};

export default Nav;