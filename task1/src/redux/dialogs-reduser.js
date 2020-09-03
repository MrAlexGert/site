const NEW_MESSAGE_TEXT = 'NEW-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogReduser = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: '6',
                message: state.newMessageText,
            }
            state.message.push(newMessage)
            state.newMessageText = ''
            return state
        case NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const ubdateNewMessageBodyActionCreator = () => ({ type: SEND_MESSAGE })
export const addMessageActionCreator = (text) => ({ type: NEW_MESSAGE_TEXT, newText: text })

export default dialogReduser