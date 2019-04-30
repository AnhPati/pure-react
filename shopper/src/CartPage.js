import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

function CartPage({ items, total, onAddOne, onRemoveOne }) {
    let emptyCart= false;
    if (total === 0) {
        emptyCart = true;
    };

    return (
        <div>
            <ul className="CartPage-items">
                {items.map(item =>
                    <li key={item.id} className="CartPage-item">
                        <Item item={item}>
                            <div className="CartItem-controls">
                                <button
                                    className="CartItem-removeOne"
                                    onClick={() => onRemoveOne(item)}
                                >
                                        &ndash;
                                </button>
                                <span className="CartItem-count">{item.count}</span>
                                    <button
                                        className="CartItem-addOne"
                                        onClick={() => onAddOne(item)}
                                    >
                                        +    
                                    </button>
                            </div>
                        </Item>
                    </li>
                )}
            </ul>
            {emptyCart ? <EmptyCart/> : <Total total={total}/>}
        </div>
    );
};

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
};

const EmptyCart = () => {
    return (
        <div>
            <span>
                C'est vide, ne vois tu pas ?!!
            </span>
        </div>
    )
};

const Total = ({total}) => {
    return (
        <div className="CartPage-totalBox">
            <span className="CartPage-totalItem">
                Total: ${total}
            </span>
        </div>
    )
};

export default CartPage;