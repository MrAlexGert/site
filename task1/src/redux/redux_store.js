import {createStore, combineReducers} from 'redux'
import profileReduser from './profile_reduser'
import dialogReduser from './dialogs-reduser'

let reducers = combineReducers({
    profileReduser,
    dialogReduser,
})

let store = createStore(reducers)

window.store = store
export default store