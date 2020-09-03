// window.store = store.state
import profileReduser from './profile_reduser'
import dialogReduser from './dialogs-reduser'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'


const store = {
    _state: {
        profilePage: {
            posts: [
                { id: "1", name: "user1", message: 'massageUser-1' },
                { id: "2", name: "user2", message: 'massageUser-2' },
                { id: "3", name: "user3", message: 'massageUser-3' },
                { id: "4", name: "user4", message: 'massageUser-4' }
            ],
            newPostValue: '',
        },
        messagePage: {
            users: [
                { id: "1", name: "Muser1" },
                { id: "2", name: "Muser2" },
                { id: "3", name: "Muser3" },
                { id: "4", name: "Muser4" }
            ],
            message: [
                { id: "1", message: 'massageUser-1' },
                { id: "2", message: 'massageUser-2' },
                { id: "3", message: 'massageUser-3' },
                { id: "4", message: 'massageUser-4' }
            ],
            newMessageText: '',
        },


        sidebar: {}
    },
    _collSubscriber() { },

    getState() {
        return this._state
    },

    subscribe(observer) {
        store._collSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.messagePage = dialogReduser(this._state.messagePage, action)

        this._collSubscriber(this._state)
    }
}

export default store




