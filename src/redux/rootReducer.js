import { combineReducers } from "redux";
import filtersReducer from './filters/reducers';
import todosReducer from './todos/reducers';

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer,
})

export default rootReducer;