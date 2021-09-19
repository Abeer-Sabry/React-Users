import { combineReducers } from "redux";
import uiReducer from "./Reducers/ui/ui.reducer";
import FetchDataReducer from "./Reducers/users/FetchDataReducer";


const rootReducer = combineReducers({
    data: FetchDataReducer,
    ui:uiReducer
})



export default rootReducer