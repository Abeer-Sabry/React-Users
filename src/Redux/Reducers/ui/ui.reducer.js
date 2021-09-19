import UiTypes from "./ui.type";

const initialState = {
    isLight: false,
}
const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case UiTypes.CHANGE_APP_THEME:
            return {
                ...state,
                isLight: !state.isLight
            }
        default: return state
    }
}
export default uiReducer