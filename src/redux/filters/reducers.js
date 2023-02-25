import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes";
import { initialState } from "./initialState";


const filtersReducers= (state =initialState, action) =>{
    switch (action.type) {
        case COLOR_CHANGED:
            const {color, changeType} =action.paylaod
            switch (changeType) {
                case "added":
                    return{
                        ...state,
                        colors:[
                            ...state.colors,
                            color
                        ]
                    }
                
                case "removed":
                    return {
                        ...state,
                        colors: state.color.filters(existinColor => existinColor !==color)
                    }
                
            
                default:
                    return state;
            }

        case STATUS_CHANGED:
            return{
                ...state,
                status: action.payload
            }

        default:
            return state;
    }
}

export default filtersReducers;