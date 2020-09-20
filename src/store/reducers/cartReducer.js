import {
    REMOVE_MENU_ITEM,
    ADD_MENU_ITEM
} from "../actionsTypes";

const initialState = {
    // pizza: [
    //     {
    //         name: 'italian',
    //         price: 615,
    //         amount: 0
    //     },
    //     {
    //         name: 'pepperoni',
    //         price: 410,
    //         amount: 1
    //     },
    //     {
    //         name: 'classic',
    //         price: 510,
    //         amount: 6
    //     },
    //     {
    //         name: 'margarita',
    //         price: 290,
    //         amount: 2
    //     },
    //     {
    //         name: 'chili',
    //         price: 510,
    //         amount: 4
    //     }
    // ],

    italian: 0,
    pepperoni: 0,
    classic: 0,
    margarita: 0,
    chili: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_MENU_ITEM:
            if (state[action.name] > 0) {
                return {...state, [action.name]: state[action.name] - 1}
            }
            return {...state};
        case ADD_MENU_ITEM:
            return {...state, [action.name]: state[action.name] + 1}
        default:
            return state;
    }
};

export default cartReducer;