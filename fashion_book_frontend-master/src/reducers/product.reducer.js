import { userTypes } from '../constants/action.types'
import { combineReducers } from 'redux'
import { productTypes} from '../constants/action.types'
const product = (state = {productDetail: null, bookrelated: [], comment: [], page: 1, totalpage: null}, action) => {
    switch (action.type) {
        case productTypes.SET_PRODUCT_DETAIL: {
            return {
                ...state,
                productDetail: action.productDetail
            }
        }
        case productTypes.SET_NAME_CATEGORY: {
            return {
                ...state,
                nameCategory: action.name
            }
        }
        case productTypes.SET_NAME_PUBLICSHER: {
            return {
                ...state,
                namePublicsher: action.name
            }
        }
        case productTypes.SET_NAME_AUTHOR: {
            return {
                ...state, 
                nameAuthor: action.name
            }
        }
        case productTypes.SET_BOOK_RELATED: {
            return {
                ...state,
                bookrelated: action.bookrelated
            }
        }
        case productTypes.SET_COMMENT: {
            return {
                ...state,
                comment: action.data
            }
        }
        case productTypes.SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case productTypes.SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        default: return state
    }
}
export default combineReducers({
    product,
})