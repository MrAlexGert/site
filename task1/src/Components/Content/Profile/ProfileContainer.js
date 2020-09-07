import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reduser'





const mapStateToProps = (state) => {
    console.log(state)
    return {
        profileDate: state.profileReduser.posts,
        newPostValue: state.profileReduser.newPostValue
    }
}
const mapdispatchToProps = (dispatch) => {
    return {
        updatePostChange: (text) => dispatch(updateNewPostTextActionCreator(text)),
        addPostChange: () => dispatch(addPostActionCreator()),
    }
}


const ProfileContainer = connect(mapStateToProps, mapdispatchToProps)(Profile)


export default ProfileContainer;
