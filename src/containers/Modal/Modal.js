import React, {useState} from 'react';
import axiosOrder from "../../axiosOrder";
import './Modal.css';

const Modal = props => {
    const [order, setOrder] = useState({
       name: '',
       mail: '',
       phone: ''
    });

    const customerDataChanged = event => {
        const name = event.target.name;
        const value = event.target.value;
        setOrder(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const postOrder = async() => {
        if (order.name !== '' && order.email !== '' && order.phone !== '') {
          await axiosOrder.post('/orders.json', order);
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
                        onClick={postOrder}
                >make order</button>
            </div>
        </div>
    );
};

export default Modal;