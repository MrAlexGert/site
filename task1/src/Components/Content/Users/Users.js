import React from 'react'
import '../Content.scss'
import * as axios from 'axios'
import avatar from '../../../img/avatar.jpg'


const Users = (props) => {
const getUsers = () => { 
    if ( props.usersItem.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            console.log(response)
            props.setUsers(response.data.items)
        })
    }
}
    

    // const a = [{ id: '1', name: 'alex', avatarItem: '../img/avatar.jpg', status: 'boss', followed: true, location: { country: 'russia', sity: 'moscow' } },
    // { id: '2', name: 'viktor', avatarItem: '../img/avatar.jpg', status: 'boss', followed: false, location: { country: 'ukraine', sity: 'kiew' } },
    // { id: '3', name: 'alexey', avatarItem: '../img/avatar.jpg', status: 'boss', followed: true, location: { country: 'belorusia', sity: 'minsk' } },
    // { id: '4', name: 'ksenya', avatarItem: '../img/avatar.jpg', status: 'boss', followed: true, location: { country: 'russia', sity: 'pskow' } },
    // { id: '5', name: 'igor', avatarItem: '../img/avatar.jpg', status: 'boss', followed: false, location: { country: 'russia', sity: 'omsk' } },]

    
    
    
    return (
        <div className="content">
            <button onClick={getUsers}>get users</button>
            { props.usersItem.map(el => {
                return (
                    <div key={el.id} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '20px',
                        border: '.5px solid #000',
                        padding: '20px'
                    }}>
                        <span>
                            <img src={el.photos.small != null ? el.photos.small : avatar} alt="avatar" />
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                            {el.follow ? 
                            <button onClick={() => {props.unfollowUser(el.id)}}>followed</button> :
                            <button onClick={() => {props.followUser(el.id)}}>unfollowed</button>}
                        </span>
                        <span>
                            <div>el.location.country</div>
                            <div>el.location.sity</div>
                        </span>

                    </div>
                )
            })}

        </div>
    )

}


export default Users;
