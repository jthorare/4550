import { FIND_ALL_TUITS, DELETE_TUIT, UPDATE_TUIT, CREATE_TUIT } from "../../../actions/tuits-actions";
const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        case CREATE_TUIT:
        return [
            ...state,
            action.newTuit
        ];
        case UPDATE_TUIT:
            return state.map(
            tuit => tuit._id === action.tuit._id ?
            action.tuit : tuit);
        case DELETE_TUIT:
            return state.filter(tuit => tuit._id != action.tuit._id);
        default:
            return state
    }
}

export default tuitsReducer;