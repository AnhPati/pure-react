import React from 'react';
import Nav from './Nav';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import {items} from './static-data';
import './App.css';

class App extends React.Component {
    state = {
        activeTab: 0,
        cart: [],
        total: 0
    };

    handleTabChange = (index) => {
        this.setState({
            activeTab: index
        });
    };

    handleAddToCart = (item) => {
        this.setState({
            cart: [...this.state.cart, item.id],
            total: this.state.total + item.price
        });
    };

    handleRemoveOne = (item) => {
        let index = this.state.cart.indexOf(item.id);
        this.setState({
            cart: [
                ...this.state.cart.slice(0, index),
                ...this.state.cart.slice(index + 1)
            ],
            total: this.state.total - item.price
        });
    };

    renderContent() {
        switch(this.state.activeTab) {
            default:
                case 0:
                    return (
                        <ItemPage
                            items={items}
                            onAddToCart={this.handleAddToCart}
                        />
                    );
                case 1:
                    return this.renderCart();
        };
    };

    renderCart() {
        // Count how many of each item is in the cart
        let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
            itemCounts[itemId] = itemCounts[itemId] || 0;
            itemCounts[itemId]++;
            return itemCounts;
        }, {});

        // Create an array of items
        let cartItems = Object.keys(itemCounts).map(itemId => {
            // Find the item by its id
            var item = items.find(item =>
                item.id === parseFloat(itemId, 10)
            );
            
            //Create a new "item" and add the 'count' property
            return {
                ...item, count: itemCounts[itemId]
            };
        });
        
        return (
            <CartPage
                items={cartItems}
                onAddOne={this.handleAddToCart}
                onRemoveOne={this.handleRemoveOne}
                total={this.state.total}
            />
        );
    };

    render() {
        let {activeTab} = this.state;
        return (
            <div className="App">
                <Nav item={this.state.cart.length} total={this.state.total} activeTab={activeTab} onTabChange={this.handleTabChange}/>
                <main className="App-content">
                    {/*<div>
                        {this.state.cart.length} items
                    </div>*/}
                    {this.renderContent()}
                </main>
            </div>
        );
    };
};

export default App;