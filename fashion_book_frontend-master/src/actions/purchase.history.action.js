import axios from 'axios'
import storeConfig from '../config/storage.config'
import { purchaseHistoryTypes } from '../constants/action.types'
export const setPurchaseHistory = (data) => ({
    type: purchaseHistoryTypes.SET_PURCHASED_HISTORY,
    data
})
export const getPurchaseHitory = () => async (dispatch, getState) => {
    let res = null
    let user = storeConfig.getUser()
    if(user === null) 
        return
    try {
        res = await axios.get('http://localhost:8080/bill/' + user.id)
    }
    catch(err) {
        console.log(err)
        return
    }
    dispatch(setPurchaseHistory(res.data.data))
}
export const deleteBill = (id) => async (dispatch, getState) => {
    try {
        await axios.get('http://localhost:8080/bill/delete/' + id)
    }
    catch(err) {
        console.log(err.response)
    }
    dispatch(getPurchaseHitory())
}
