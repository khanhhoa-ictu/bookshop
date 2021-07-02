import axios from 'axios'
import { userTypes } from '../constants/action.types'
import storeConfig from '../config/store.config'
export const setUser = (data) => ({
    type: userTypes.SET_USER,
    data
})
export const getUser = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/admin/getAllUser/' + getState().userReducers.user.page)
    }
    catch (err) {
        console.log(err)
        return
    }
    dispatch(setUser(res.data.data))
    dispatch(setTotalPage(res.data.totalPage))

}
export const setTotalPage = (totalpage) => ({
    type: userTypes.SET_TOTAL_PAGE,
    totalpage
})
export const setPage = (page) => ({
    type: userTypes.SET_PAGE,
    page
})
export const nextPage = () => (dispatch, getState) => {
    let page = getState().userReducers.user.page
    let totalpage = getState().userReducers.user.totalpage
    if(page < totalpage) {
        dispatch(setPage(parseInt(page) + 1))
    }
}
export const backPage = () => (dispatch, getState) => {
    let page = getState().userReducers.user.page
    if(page > 1) {
        dispatch(setPage(parseInt(page) - 1))
    }
}

export const deleteUser = (email) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/deleteuser/',{
            email: email
        })
    }
    catch (err) {
        console.log(err)
        return
    }
    dispatch(getUser())
}
export const addUserSuccess = () => ({
    type: userTypes.ADD_USER_SUCCESS
})
export const addUserFail = () => ({
    type: userTypes.ADD_USER_FAIL
})
export const updateUserSuccess = () => ({
    type: userTypes.UPDATE_USER_SUCCESS
})
export const updateUserFail = () => ({
    type: userTypes.UPDATE_USER_FAIL
})
export const resetUser = () => ({
    type: userTypes.RESET_USER
})
export const addUser = (email, password, firstName , lastName, address, phone_number, is_admin) => async (dispatch, getState) => {
    dispatch(resetUser())
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/adduser', {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
            address: address,
            phone_number: phone_number,
            is_admin: is_admin
        })
    }
    catch (err) {
        console.log(err)
        dispatch(addUserFail())
        return
    }
    dispatch(addUserSuccess())
    dispatch(getUser())
}
export const updateUser = (email, firstName, lastName, address, phone_number, is_admin) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/updateuser', {
            email: email,
            firstName: firstName,
            lastName: lastName,
            address: address,
            phone_number: phone_number,
            is_admin: is_admin
        })
    }
    catch (err) {
        console.log(err)
        dispatch(updateUserFail())
        return
    }
    dispatch(updateUserSuccess())
    dispatch(getUser())
}
export const loginSuccess = (token, user) => async (dispatch, getState) => {
    storeConfig.setUser(user)
    storeConfig.setToken(token)
    dispatch(setLoginSuccess())
}
export const setLoginSuccess = () => ({
    type: userTypes.LOGIN_SUCCESS,
    data: 'login success'
})
export const setLoginFail = () => ({
    type: userTypes.LOGIN_FAIL,
    data: 'login fail'   
})
export const auth = () => async (dispatch, getState)  => {
    if(storeConfig.getUser() === null){
        dispatch(setLoginFail())
        return false
    }
    let email = storeConfig.getUser().email
    let token = storeConfig.getToken()
    console.log(email)
    let res
    try {
        res = await axios.post('http://localhost:8080/auth', {
            email: email,
            token: token,
        })
    }
    catch (err) {
        dispatch(setLoginFail())
        return false
    }
    dispatch(setLoginSuccess())
    return true
}
export const logout = () => (dispatch, getState) => {
    console.log('logout ')
    storeConfig.clear()
    dispatch(setLoginFail())
}