import { ADDED, ALL_COMPLETED, CLEAR_ALL, COLOR_SELECTED, DELETED, TOGGLED } from "./actionTypes";

export const added = (todo_text) => {
    return {
        type:ADDED,
        payload: todo_text
    };
};
export const toggled = (todo_id) => {
    return {
        type:TOGGLED,
        payload: todo_id
    };
};
export const colorSelected = (todo_id, rong) => {
    return {
        type:COLOR_SELECTED,
        payload:{
            todo_id,
            rong
        }
    };
};
export const deleted = (todo_id) => {
    return {
        type:DELETED,
        payload: todo_id
    };
};
export const allCompleted = () => {
    return {
        type:ALL_COMPLETED
    };
};
export const clearAll = () => {
    return {
        type:CLEAR_ALL
    };
};

