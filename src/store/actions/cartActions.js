import {
    REMOVE_MENU_ITEM,
    ADD_MENU_ITEM
} from "../actionsTypes";

export const removeItem = (name) => {
    return {type: REMOVE_MENU_ITEM, name};
};

export const addItem = (name) => {
    return {type: ADD_MENU_ITEM, name};
};