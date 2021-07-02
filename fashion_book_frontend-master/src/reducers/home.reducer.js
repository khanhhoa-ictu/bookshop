import { homeTypes, sortTypes } from '../constants/action.types'
import { combineReducers } from 'redux'

const category = (state = { data: [] }, action) => {
    switch (action.type) {
        case homeTypes.SET_CATEGORY_BOOK: {
            return {
                ...state,
                data: action.data
            }
        }
        default: return state
    }
}
const publisher = (state = { data: [] }, action) => {
    switch (action.type) {
        case homeTypes.SET_PUBLISHSER: {
            return {
                ...state,
                data: action.data
            }
        }
        default: return state
    }
}
const author = (state = {data: []}, action) => {
    switch(action.type) {
        case homeTypes.SET_AUTHOR: {
            return {
                ...state,
                data: action.data
            }
        }
        default: return state
    }
}

const book = (state = {
    data: [], page: 1, totalpage: null, title: 'ALL BOOK', searchtext: '',
    sortType: sortTypes.SORT_DAY_DECREASED, sortOrder: -1
}, action) => {
    switch (action.type) {
        case homeTypes.SET_BOOK: {
            return {
                ...state,
                data: action.data
            }
        }
        case homeTypes.SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case homeTypes.SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        case homeTypes.SET_SORT_TYPE: {
            return {
                ...state,
                sortType: action.sortType,
                sortOrder: action.sortOrder
            }
        }
        case homeTypes.SET_RANGE: {
            return {
                ...state,
                range: action.range
            }
        }
        case homeTypes.SET_NAME_TITLE_ITEM: {
            return {
                ...state,
                title: action.title
            }
        }
        case homeTypes.SET_BRANCH_SEARCH_BOOK: {
            return {
                ...state,
                branch: action.branch
            }
        }
        case homeTypes.SET_ID_BRANCH: {
            return {
                ...state,
                id: action.id
            }
        }
        case homeTypes.RESET_BOOK: {
            return { data: [], page: 1, totalpage: null, title: 'ALL BOOK',
            sortType: sortTypes.SORT_DAY_DECREASED, sortOrder: -1}
        }
        case homeTypes.SET_SEARCH_TEXT: {
            return {
                ...state, 
                searchtext: action.searchtext
            }
        }
        
        default: return state
    }
}
export default combineReducers({
    category,
    publisher,
    book, 
    author
})