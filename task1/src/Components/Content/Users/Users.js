import React from 'react'
import '../Content.scss'


const Users = (props) => {
    const a = [{ id: '1', name: 'alex', avatarItem: '../img/avatar.jpg', status: 'boss', follow: true, location: { country: 'russia', sity: 'moscow' } },
    { id: '2', name: 'viktor', avatarItem: '../img/avatar.jpg', status: 'boss', follow: false, location: { country: 'ukraine', sity: 'kiew' } },
    { id: '3', name: 'alexey', avatarItem: '../img/avatar.jpg', status: 'boss', follow: true, location: { country: 'belorusia', sity: 'minsk' } },
    { id: '4', name: 'ksenya', avatarItem: '../img/avatar.jpg', status: 'boss', follow: true, location: { country: 'russia', sity: 'pskow' } },
    { id: '5', name: 'igor', avatarItem: '../img/avatar.jpg', status: 'boss', follow: false, location: { country: 'russia', sity: 'omsk' } },]

    if ( props.usersItem.length === 0) {
        props.setUsers(a)
    }
    
    
    
    return (
        <div className="content">
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
                            <img src={el.avatarItem} alt="avatar" />
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                            {el.follow ? 
                            <button onClick={() => {props.unfollowUser(el.id)}}>follow</button> :
                            <button onClick={() => {props.followUser(el.id)}}>unfollow</button>}
                        </span>
                        <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.sity}</div>
                        </span>

                    </div>
                )
            })}

        </div>
    )

}


export default Users;
