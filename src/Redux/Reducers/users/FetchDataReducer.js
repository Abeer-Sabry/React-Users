
import ActionTypes from "./type";

const initialstate = {
    data: [],
    loading: false,
    err: {}
}
const FetchDataReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_DATA_REQUEST:
            return {
                data: [],
                loading: true,
                err: {}
            }
        case ActionTypes.FETCH_DATA_SUCCES:
            return {
                ...state, data: action.payload,
                loading:false,
                err: {}
            }
        case ActionTypes.FETCH_DATA_ERROR:
            return {
                data: [],
                loading: false,
                err: action.payload
            }
        default: return state
    }

}
export default FetchDataReducer