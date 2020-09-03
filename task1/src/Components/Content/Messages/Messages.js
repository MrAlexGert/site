import React from 'react'
import '../Content.scss'
import './Messages.scss'
import DialogItem from './DialogItem'
import MessageItem from './MessageItem'




const Messages = (props) => {

        return (
            <div className="content">
                <div className="messages">

                    <div className="users_dialogs">
                        <DialogItem dialogItem={props.messagePage.users} />

                    </div>
                    <div className="users_messages">
                        <MessageItem messageItem={props.messagePage.message} 
                        newMessageText={props.newMessageText} 
                        dispatch={props.dispatch}/>
                    </div>
                </div>

            </div>
        )
}


export default Messages;
