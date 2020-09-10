import React from 'react'
import Users from './Users'
import {followActionCreator, unfollowActionCreator, setUsersActionCreator} from '../../../redux/users_reduser'
import { connect } from 'react-redux'







const mapStateToProps = (state) => {
    // console.log(state)
    return {
        usersItem: state.usersReduser.users
    }
}
const mapdispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => dispatch(followActionCreator(userId)),
        unfollowUser: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users))
    } 
}


const UsersContainer = connect(mapStateToProps, mapdispatchToProps)(Users)


export default UsersContainer;
