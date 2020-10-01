import React from 'react'
import {
    getUsersThunkCreator,
    unFollowSuccsess,
    followSuccsess,
} from '../../../redux/users_reduser'

import { connect } from 'react-redux'
import Users from './Users'
import Preloader from '../../Preloaader/Preloader'
import withAuthRedirect from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'




class UsersContainer extends React.Component {

    componentDidMount() { // INCLUDES AFTER LOADING SITE
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    changeTitle = (page) => { //NEXT REQUEST
        this.props.getUsersThunkCreator(page, this.props.pageSize)
    }

    render() {
        return (
            <>{this.props.isFetching ? <Preloader /> : null}
                <Users
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    changeTitle={this.changeTitle}

                    usersItem={this.props.usersItem}
                    currentPage={this.props.currentPage}

                    followingInProgress={this.props.followingInProgress}

                    unFollowSuccsess={this.props.unFollowSuccsess}
                    followSuccsess={this.props.followSuccsess}
                />
            </>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state)
    return {
        usersItem: state.usersReduser.users,
        pageSize: state.usersReduser.pageSize,
        totalUsersCount: state.usersReduser.totalUsersCount,
        currentPage: state.usersReduser.currentPage,
        isFetching: state.usersReduser.isFetching,
        followingInProgress: state.usersReduser.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps, {
        unFollowSuccsess,
        followSuccsess,
        getUsersThunkCreator,
    }),
    withAuthRedirect,
)(UsersContainer) 
