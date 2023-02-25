import { ADDED, ALL_COMPLETED, CLEAR_ALL, COLOR_SELECTED, DELETED, TOGGLED } from "./actionTypes";
import { initialState } from "./initialState";

const nextTodoId =(todos) =>{
    const maxId= todos.reduce((maxId, todo)=>Math.max(todo.id, maxId), -1)//-1+1 =0 -0 o jate id hishebe aste pare
    return maxId+1;
}
 const todosReducers=(state =initialState, action) =>{
    console.log(state)
    switch (action.type) {
        case ADDED:
            return [
                     ...state,
                {
                    id: nextTodoId(state)
                }
            ]
        case TOGGLED:
            return state.map(todo =>{
                // if(todo.id === action.payload){
                //     return {
                //     ...todo,
                //     completed:!completed
                // }
                // } //erokom kole ki hoto?
                if(todo.id !== action.payload){
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed//3.3 -8m
                }
            })

        case COLOR_SELECTED:
            console.log(action.payload);
            const {todo_Id, rong} = action.payload;

            return state.map((todo) => {
                if(todo.id !== todo_Id){
                    return todo;
                }
                return {
                    ...todo,
                    // color: action.payload.color
                    rong: rong
                }
            })
        case DELETED:
            return state.filter(todo =>todo.id !== action.payload.todo_id);

        case ALL_COMPLETED:
            return state.map(todo =>{
                return {
                    ...todo,
                    completed: true
                    }
                }) 
                
                
        case CLEAR_ALL:
            return state.filter(todo =>todo.id !== action.payload.todo_id);           
        default:
            return state;
    }
}

export default todosReducers;