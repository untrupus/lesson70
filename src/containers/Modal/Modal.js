import React, {useState} from 'react';
import axiosOrder from "../../axiosOrder";
import './Modal.css';
import {useSelector} from "react-redux";

const Modal = props => {
    const cart = useSelector(state => state.cart);
    const [order, setOrder] = useState({
       name: '',
       mail: '',
       phone: ''
    });

    const pizza = [];
    Object.values(cart).forEach(value => {
        console.log(value);
        if (value.amount > 0) {
            pizza.push(value.amount);
        }
    });

    console.log(pizza);

    const customerDataChanged = event => {
        const name = event.target.name;
        const value = event.target.value;
        setOrder(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const postOrder = async(cancel) => {
        if (order.name !== '' && order.email !== '' && order.phone !== '') {
          await axiosOrder.post('/orders.json', {customer: order, cart: pizza});
            cancel();
        }
    };

    return (
        <div className="modal">
            <input type="text"
                   name="name"
                   placeholder="Name"
                   onChange={customerDataChanged}
            />
            <input type="text"
                   name="mail"
                   placeholder="E-mail"
                   onChange={customerDataChanged}
            />
            <input type="text"
                   name="phone"
                   placeholder="Phone"
                   onChange={customerDataChanged}
            />
            <div className="btns">
                <button type="button"
                        className="addBtn"
                        onClick={props.click}
                        >cancel</button>
                <button type="button"
                        className="addBtn"
                        onClick={() => postOrder(props.click)}
                >make order</button>
            </div>
        </div>
    );
};

export default Modal;