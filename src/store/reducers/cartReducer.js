import {
    REMOVE_MENU_ITEM,
    ADD_MENU_ITEM
} from "../actionsTypes";

const initialState = {
    italian: {
        price: 615,
        amount: 0
    },
    pepperoni: {
        price: 410,
        amount: 0
    },
    classic: {
        price: 510,
        amount: 0
    },
    margarita: {
        price: 290,
        amount: 0
    },
    chili: {
        price: 510,
        amount: 0
    }
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_MENU_ITEM:
            if (state[action.name].amount > 0) {
                return {...state, [action.name]: {
                        amount: state[action.name].amount - 1,
                        price: state[action.name].price}
            }}
            break;
        case ADD_MENU_ITEM:
            return {
                ...state, [action.name]: {
                    amount: state[action.name].amount + 1,
                    price: state[action.name].price
                }
            }
        default:
            return state;
    }
};

export default cartReducer;