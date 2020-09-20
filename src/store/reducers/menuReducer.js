import {
    FETCH_MENU_ERROR,
    FETCH_MENU_REQUEST,
    FETCH_MENU_SUCCESS,
} from "../actionsTypes";

const initialState = {
    menu: [],
    error: null,
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MENU_REQUEST:
            return {...state};
        case FETCH_MENU_SUCCESS:
            return {...state, menu: action.value};
        case FETCH_MENU_ERROR:
            return {...state};
        default:
            return state;
    }
};

export default menuReducer;