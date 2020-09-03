import React from 'react'
import '../Content.scss'
import './Messages.scss'
import {addMessageActionCreator, ubdateNewMessageBodyActionCreator} from '../../../redux/dialogs-reduser'

const MessagesItem = (props) => {

    const messageSend = () => {
        props.dispatch(ubdateNewMessageBodyActionCreator())
    }

    const toWriteMessage = (e) => {
        let text = e.target.value
        props.dispatch(addMessageActionCreator(text))
    }
 
        return (
            <div>
                {props.messageItem.map(el => {
                    return ( 
                        <div key={el.id} className="massages-item_dialog">
                            {el.message} 
                        </div>
                    )
                })}
                <div>
                    <textarea onChange={toWriteMessage} value={props.newMessageText}></textarea>
                    <button onClick={messageSend}>go</button>
                </div>
            </div>
        )

}


export default MessagesItem;
