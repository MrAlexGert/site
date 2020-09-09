import {createStore, combineReducers} from 'redux'
import profileReduser from './profile_reduser'
import dialogReduser from './dialogs-reduser'
import usersReduser from './users_reduser'

let reducers = combineReducers({
    profileReduser,
    dialogReduser,
    usersReduser,
})

let store = createStore(reducers)

window.store = store
export default store