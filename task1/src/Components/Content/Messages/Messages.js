import React from 'react'
import '../Content.scss'
import './Messages.scss'
import DialogItem from './DialogItem'
import MassagesUsers from './MassageItem'


// const UsersData = [
//     {id: "1", name: "user1", massage: 'massageUser-1' },
//     {id: "2", name: "user2", massage: 'massageUser-1' },
//     {id: "3", name: "user3", massage: 'massageUser-1' },
//     {id: "4", name: "user4", massage: 'massageUser-1' }
// ]

class Messages extends React.Component {

    render() {
        return (
            <div className="content">
                <div className="messages">

                    <div className="users_dialogs">
                        <DialogItem usersData={this.props.UsersData}/>

                    </div>
                    <div className="users_messages">
                        <MassagesUsers usersData={this.props.UsersData}/>
                    </div>
                </div>

            </div>
        )
    }
}


export default Messages;
