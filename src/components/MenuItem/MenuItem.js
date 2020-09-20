import React from 'react';
import './MenuItem.css';

const MenuItem = props => {
    return (
        <div className="menuItem">
            <div className="product">
                <img
                    src={props.image}
                    className="productImg"
                    alt="pizza"
                />
            </div>
            <div className="description">
                <h4>{props.name} pizza</h4>
                <p><b>Price: <span>{props.price}</span> KGS</b></p>
            </div>
            <button
                type="button"
                className="addBtn"
                onClick={props.click}
            >Add to cart</button>
        </div>
    );
};

export default MenuItem;