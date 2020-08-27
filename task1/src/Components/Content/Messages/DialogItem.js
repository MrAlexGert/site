import React from 'react'
import '../Content.scss'
import './Messages.scss'
import { NavLink } from 'react-router-dom'




class DialogItem extends React.Component {
   

    render() {
        return (
            <div>
                {this.props.usersData.map(el => {
                    return (
                        <div  key={el.id}>
                            <NavLink to={`/message/${el.id}`}>{el.name}</NavLink>
                        </div>
                    ) 
                })} 
            </div>
        )
    }
}


export default DialogItem;
