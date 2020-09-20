import React, {useState} from 'react';
import './Cart.css';
import {useDispatch, useSelector} from "react-redux";
import {removeItem} from "../../store/actions/cartActions";
import Modal from "../Modal/Modal";

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);

    const removeItemHandler = name => dispatch(removeItem(name));

    const cartSum = Object.values(cart);
    const int = cartSum.reduce((acc, value) => {
        return acc + value;
    }, 0);

    let order = null;
    if (int > 0) {
        order = (
            <>
                <p>Delivery: 150 KGS</p>
                <p>Total Price:</p>
                <button className="addBtn"
                        onClick={() => setShowModal(true)}
                >Place order
                </button>
            </>
        );
    }

    const pizza = Object.entries(cart).map(item => {
        if (item[1] !== 0) {
            return (
                <div className="orderItem"
                     key={item[0]}>
                    <p onClick={() => removeItemHandler(item[0])}
                    >{item[0] + ': ' + item[1]}</p>
                </div>
            )
        }
    });

    const backdrop = (showModal) => (
        showModal ? <Modal
            click={() => setShowModal(false)}
        /> : null
    );


    return (
        <div className="cart">
            <div className="pizza">
                {pizza}
            </div>

            <div className="order">
                {order}
            </div>
            {backdrop(showModal)}
        </div>
    );
};

export default Cart;