const NEW_MESSAGE_TEXT = 'NEW-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {

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
    
}


const dialogReduser = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: '6',
                message: state.newMessageText,
            }
            return {
                ...state,
                message: [...state.message, newMessage],
                newMessageText: ''
            }
        case NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}

export const ubdateNewMessageBodyActionCreator = () => ({ type: SEND_MESSAGE })
export const addMessageActionCreator = (text) => ({ type: NEW_MESSAGE_TEXT, newText: text })

export default dialogReduser