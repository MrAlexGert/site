import React from 'react'
import {ubdateNewMessageBody, addMessage} from '../../../redux/dialogs-reduser'
import { connect } from 'react-redux'
import MessagesItem from './MessageItem'
import withAuthRedirect from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'






const mapStateToProps = (state) => {
    return {
        messageItem: state.dialogReduser.message,
        newMessageText: state.dialogReduser.newMessageText,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        addMessage,
        ubdateNewMessageBody,
    }),
   
)(MessagesItem)