
import { combineReducers } from 'redux'
import { profileTypes } from '../constants/action.types'
const profile = (state = {}, action) => {
    switch(action.type) {
        case profileTypes.SET_AUTH_LOGIN_SUCCESS: {
            return {
                ...state,
                isauth: true
            }
        }
        case profileTypes.SET_AUTH_LOGIN_FAIL: {
            return {
                ...state,
                isauth: false
            }
        }
        case profileTypes.UPDATE_INFOR_USER_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case profileTypes.UPDATE_INFOR_USER_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case profileTypes.RESET_PROFILE: {
            return {}
        }
        default: return state
    }
}
export default combineReducers({
    profile,
})