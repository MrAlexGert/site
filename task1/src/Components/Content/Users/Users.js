import React from 'react'
import '../Content.scss'
import avatar from '../../../img/avatar.jpg'
import { NavLink } from 'react-router-dom';






const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize) //GET V PAGES
    let page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }

    return (
        <div className="content">
            <div className="number_tatle">
                {//CREATE NUMBER TATLE USERS
                    page.map(p => {
                        return <div
                            key={p}
                            onClick={() => props.changeTitle(p)} //START FUNCTION TRANSITION TATLE  
                            className={props.currentPage === p ? 'activ' : null}
                        >{p}</div>
                    })
                }
            </div>
            {/*CREATE USERS CARD*/}
            {props.usersItem.map((el, inx) => {
                return (
                    <div key={el.id} className="user" >
                        <span>
                            {/* PHOTO USERS AND NAME; TRANSITION TO PROFILE USER*/}
                            <NavLink to={`/profile/${el.id}`}>
                                <img className="avatar" src={el.photos.small != null ? el.photos.small : avatar} alt="avatar" />
                                <div>{el.name}</div>
                                <div>{el.status}</div>
                            </NavLink>

                            {
                                el.followed ?
                                    <button disabled={props.followingInProgress.some(id => id === el.id)}
                                        onClick={() => props.unFollowSuccsess(el.id)
                                        }>unfollowed</button>
                                    :
                                    <button disabled={props.followingInProgress.some(id => id === el.id)}
                                        onClick={() => props.followSuccsess(el.id)
                                        }>followed</button>
                            }
                        </span>
                        <span>
                            <div>el.location.country {inx}</div>
                            <div>el.location.sity</div>
                        </span>

                    </div>
                )
            })}

        </div>
    )


}

export default Users;
