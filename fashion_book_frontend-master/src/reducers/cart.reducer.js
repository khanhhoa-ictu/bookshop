import { cartTypes} from '../constants/action.types'
import { combineReducers } from 'redux'
const cart = (state = { data: []}, action) => {
    switch(action.type) {
        case cartTypes.SET_CART: {
            return {
                ...state,
                data: action.data
            }
        }
       
        case cartTypes.PAYMENT_SUCCESS: {
            return {
                ...state,
                ispay: true
            }
        }
        case cartTypes.PAYMENT_FAIL: {
            return {
                ...state,
                ispay: false
            }
        }
        case cartTypes.RESET_PAYMENT: {
            return {
                ...state,
                ispay: null
            }
        }
        default: return state
    }
}
export default combineReducers({
    cart
})