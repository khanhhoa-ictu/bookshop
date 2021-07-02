import { homeTypes } from '../constants/action.types'
import { combineReducers } from 'redux'
const home = (state = {top_product: []}, action) => {
    switch(action.type) {
        case homeTypes.SET_TOP_PRODUCT: {
            return {
                ...state,
                top_product: action.data
            }
        }
        default: return state
    }
}
export default combineReducers({
    home
})