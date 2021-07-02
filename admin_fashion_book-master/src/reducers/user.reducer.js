import { userTypes } from '../constants/action.types'
import { combineReducers } from 'redux'
const user = (state = {
    data: [], page: 1, totalpage: null
}, action) => {
    switch(action.type){
        case userTypes.SET_USER: {
            return {
                ...state, 
                data: action.data
            }
        }
        case userTypes.ADD_USER_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case userTypes.ADD_USER_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case userTypes.UPDATE_USER_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case userTypes.UPDATE_USER_SUCCESS: {
            return {
                ...state,
                isupdate: false
            }
        }
        case userTypes.RESET_USER: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        case userTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                islogin: true
            }
        }
        case userTypes.LOGIN_FAIL: {
            return {
                ...state,
                islogin: false
            }
        }
        case userTypes.SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case userTypes.SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        default: return state
    }
}
export default combineReducers({
    user
})