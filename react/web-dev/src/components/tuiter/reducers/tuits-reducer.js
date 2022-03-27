import tuitsJson from "../data/tuits.json"

const tuitsReducer = (state = tuitsJson, action) => {
    switch (action.type) {
        case 'create-tuit':
        const newTuit = {
            tuit: action.tuit,
            _id: (new Date()).getTime() + '',
            postedBy: {
            "username": "ReactJS"
            },
            stats: {
            retuits: 111,
            likes: 222,
            replies: 333
            }
        }
        return [
            newTuit,
            ...state,
        ];
        case 'delete-tuit':
            return state.filter(tuit => tuit._id != action.tuit._id);
        default:
        return tuitsJson
    }
}

export default tuitsReducer;