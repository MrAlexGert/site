import {getDataAuth} from '../api/api'
const SET_USER_DATA = 'ADD-POST'


const initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    isFetching: false,
}

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA : 
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}


export const setUserData = (email, id, login) => ({type: SET_USER_DATA, data: {email, id, login}})


export const getAuthThunkCreator = () => {
    return (dispatch) => {
        getDataAuth().then(data => {
            if (data.resultCode === 0) {
                let { email, id, login } = data.data
                dispatch(setUserData(email, id, login))
            } 
        })
    }
}





export default authReduser