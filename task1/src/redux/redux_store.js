import {createStore, combineReducers, applyMiddleware} from 'redux'
import ThunkMiddleware from 'redux-thunk'
import profileReduser from './profile_reduser'
import dialogReduser from './dialogs-reduser'
import usersReduser from './users_reduser'
import authReduser from './auth_reduser'


let reducers = combineReducers({
    profileReduser,
    dialogReduser,
    usersReduser,
    authReduser,
})

let store = createStore(reducers, applyMiddleware(ThunkMiddleware))

window.store = store
export default store
