import React from 'react';
import './Cart.css';
import {useDispatch, useSelector} from "react-redux";
import {removeItem} from "../../store/actions/cartActions";

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removeItemHandler = name => dispatch(removeItem(name));

    const obj = Object.entries(cart)

    const div = obj.map(item => {
        if (item[1] !== 0) {
            return (
                <p
                    key={item[0]}
                    onClick={() => removeItemHandler(item[0])}
                >{item[0] + ': ' + item[1]}</p>
            )
        }
    });
    return (
        <div className="cart">
            <div className="pizza">
                {div}
            </div>

            <div className="order">
                <p>Delivery: 150 KGS</p>
                <p>Total Price:</p>
                <button className="addBtn">Place order</button>
            </div>
        </div>
    );
};

export default Cart;