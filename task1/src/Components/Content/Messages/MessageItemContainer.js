import React from 'react'
import {addMessageActionCreator, ubdateNewMessageBodyActionCreator} from '../../../redux/dialogs-reduser'
import { connect } from 'react-redux'
import MessagesItem from './MessageItem'




// export default MessagesItem;

const mapStateToProps = (state) => {
    
    return {
        messageItem: state.dialogReduser.message,
        newMessageText: state.dialogReduser.newMessageText
    }
}
const mapdispatchToProps = (dispatch) => {
    return {
        toWriteMessage: (text) => dispatch(addMessageActionCreator(text)),
        messageSend: () => dispatch(ubdateNewMessageBodyActionCreator())
    }
}


const MessageItemContainer = connect(mapStateToProps, mapdispatchToProps)(MessagesItem)

export default MessageItemContainer