import { combineReducers } from 'redux'
import { purchaseHistoryTypes } from '../constants/action.types'

const purchaseHistory = (state = {data: []}, action) => {
    switch(action.type) {
        case purchaseHistoryTypes.SET_PURCHASED_HISTORY: {
            return {
                ...state,
                data: action.data
            }
        }
        default: return state
    }
}
export default combineReducers({
    purchaseHistory,
})