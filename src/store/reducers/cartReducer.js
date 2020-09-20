import {
    REMOVE_MENU_ITEM,
    ADD_MENU_ITEM
} from "../actionsTypes";

const initialState = {
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