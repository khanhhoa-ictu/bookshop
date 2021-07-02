import { combineReducers } from 'redux'
import bookReducers from './book.reducer'
import userReducers from './user.reducer'
import homeReducers from './home.reducer';
export default combineReducers({
    bookReducers,
    userReducers,
    homeReducers
})