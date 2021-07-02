import { bookTypes } from '../constants/action.types'
import { combineReducers } from 'redux'
const category = (state = { data: [], page: 1, totalpage: null }, action) => {
    switch (action.type) {
        case bookTypes.SET_CATEGORY_BOOK: {
            return {
                ...state,
                data: action.data
            }
        }
        case bookTypes.ADD_CATEGORY_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case bookTypes.ADD_CATEGORY_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case bookTypes.UPDATE_CATEGORY_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case bookTypes.UPDATE_CATEGORY_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case bookTypes.RESET_CATEGORY: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        case bookTypes.CATEGORY_SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case bookTypes.CATEGORY_SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        case bookTypes.UPDATE_ISSEND_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case bookTypes.UPDATE_ISSEND_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        default: return state
    }
}
const publisher = (state = { data: [], page: 1, totalpage: null }, action) => {
    switch (action.type) {
        case bookTypes.SET_PUBLISHSER: {
            return {
                ...state,
                data: action.data
            }
        }
        case bookTypes.ADD_PUBLISHER_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case bookTypes.ADD_PUBLISHER_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case bookTypes.UPDATE_PUBLISHER_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case bookTypes.UPDATE_PUBLISHER_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case bookTypes.RESET_PUBLISHER: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        case bookTypes.PUBLISHER_SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case bookTypes.PUBLISHER_SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        default: return state
    }
}
const author = (state = {data: [], page: 1, totalpage: null}, action) => {
    switch(action.type) {
        case bookTypes.SET_AUTHOR: {
            return {
                ...state,
                data: action.data
            }
        }
        case bookTypes.ADD_AUTHOR_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case bookTypes.ADD_AUTHOR_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case bookTypes.UPDATE_AUTHOR_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case bookTypes.UPDATE_AUTHOR_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case bookTypes.RESET_AUTHOR: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        case bookTypes.AUTHOR_SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case bookTypes.AUTHOR_SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        default: return state
    }
}
const bill = (state = { data: [], page: 1, totalpage: null}, action) => {
    switch(action.type) {
        case bookTypes.BILL_SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case bookTypes.BILL_SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        case bookTypes.BILL_SET_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        default: return state
    }
}
const book = (state = {
    data: [], page: 1, totalpage: null
}, action) => {
    switch(action.type){
        case bookTypes.SET_BOOK: {
            return {
                ...state, 
                data: action.data
            }
        }
        case bookTypes.SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case bookTypes.SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        case bookTypes.ADD_BOOK_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case bookTypes.ADD_BOOK_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case bookTypes.UPDATE_BOOK_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case bookTypes.UPDATE_BOOK_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case bookTypes.RESET_BOOK: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        default: return state
    }
}
export default combineReducers({
    category,
    publisher,
    book, 
    author,
    bill
})