import React from 'react'
import '../Content.scss'
import './Messages.scss'


const MessagesItem = (props) => {
    
 
    const toWriteMessage = (e) => {
        let text = e.target.value
        console.log(text)
        props.addMessage(text)
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
                <button onClick={props.ubdateNewMessageBody}>go</button>
            </div>
        </div>
    )
}


export default MessagesItem;
