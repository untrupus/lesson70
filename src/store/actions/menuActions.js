import axiosOrder from "../../axiosOrder";
import {
  FETCH_MENU_ERROR,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_REQUEST,
} from "../actionsTypes";

const fetchMenuRequest = () => {
    return {type: FETCH_MENU_REQUEST};
};
const fetchMenuSuccess = value => {
    return {type: FETCH_MENU_SUCCESS, value};
};
const fetchMenuError = error => {
    return {type: FETCH_MENU_ERROR, error};
};

export const fetchMenu = () => {
    return async dispatch => {
        dispatch(fetchMenuRequest());
        try {
            const response = await axiosOrder.get("/pizzas.json");
            dispatch(fetchMenuSuccess(response.data));
        } catch (e) {
            dispatch(fetchMenuError(e));
        }
    };
};
