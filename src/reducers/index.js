import { combineReducers } from "redux";

const todo = ( state = [], action ) => {
    switch ( action.type ) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case "TOGGLE_TODO":
            return state.map( todo => {
                if( todo.id !== action.id ) {
                    return todo;
                }
                return Object.assign( {}, todo, { completed: !todo.completed } )
            } );
        default :
            return state;
    }
}

const visibilityFilter = ( state = "all", action ) => {
    switch ( action.type ) {
        case "SET_VISIBILITY_FILTER": {
            return action.filter;
        }
        default:
            return state;
    }
}

const todoState = combineReducers({
    todo,
    visibilityFilter
});

export default todoState;
