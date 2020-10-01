import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {
    addPost,
    updateNewPostText,
    getProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator,
} from '../../../redux/profile_reduser'
import Preloader from '../../Preloaader/Preloader'
import withAuthRedirect from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'

// CONTAINER COMPONENT FOR PROFILE
class ProfileContainer extends React.Component {

    componentDidMount = () => {
        let userId = this.props.match.params.userId
        if (!userId) userId = 11559
        
        this.props.getProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)
    }

    render() {
        if (!this.props.userProfile) return <Preloader />
        return (
            <Profile
                profileDate={this.props.profileDate}
                newPostValue={this.props.newPostValue}
                addPost={this.props.addPost}
                updateNewPostText={this.props.updateNewPostText}
                userProfile={this.props.userProfile}

                status={this.props.status}
                updateStatus={this.props.updateUserStatusThunkCreator}
            />
        )
    }
}







const mapStateToProps = (state) => {

    return {
        profileDate: state.profileReduser.posts,
        newPostValue: state.profileReduser.newPostValue,
        userProfile: state.profileReduser.userProfile,
        status: state.profileReduser.status,
    }
}

export default compose(
    connect(mapStateToProps, {
        addPost,
        updateNewPostText,
        getProfileThunkCreator,
        getUserStatusThunkCreator,
        updateUserStatusThunkCreator,
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)


