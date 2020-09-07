import React from 'react'
import '../Content.scss'
import './Messages.scss'
import DialogItemContainer from './DialogItemContainer'

import MessageItemContainer from './MessageItemContainer'




const Messages = () => {

    return (
        <div className="content">
            <div className="messages">

                <div className="users_dialogs">
                    <DialogItemContainer />

                </div>
                <div className="users_messages">
                    <MessageItemContainer />
                </div>
            </div>

        </div>
    )
}


export default Messages;
