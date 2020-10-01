import { getUsers, userFollowPost, userFollowDel } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTOL_USERS_COUNT = 'SET_TOTOL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS'

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    return (el.id === action.userId) ? { ...el, followed: true, } : el
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    return (el.id === action.userId) ? { ...el, followed: false, } : el
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTOL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.toggle
            }
        case FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}


export const followUser = (userId) => ({ type: FOLLOW, userId })
export const unfollowUser = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (count) => ({ type: SET_TOTOL_USERS_COUNT, count })
export const setIsFetching = (toggle) => ({ type: TOGGLE_IS_FETCHING, toggle })
export const followingProgress = (isFetching, userId) => ({ type: FOLLOWING_PROGRESS, isFetching, userId })



export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true)) //FUNCTION START PRELOUDER
        getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false)) //FUNCTION END PRELOUDER
            dispatch(setUsers(data.items)) //GET USERS IN user_reduser.js
            dispatch(setTotalUsersCount(data.totalCount)) // ALL USERS IN SERVER
        })
    }
}

export const followSuccsess = (userId) => {
    return (dispatch) => {
        dispatch(followingProgress(true, userId)) //FUNCTION START DISADLED BUTTON
        userFollowPost(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followUser(userId))
                dispatch(followingProgress(false, userId)) //FUNCTION END DISADLED BUTTON
            }
        })
    }
}
export const unFollowSuccsess = (userId) => {
    return (dispatch) => {
        dispatch(followingProgress(true, userId))
        userFollowDel(userId).then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowUser(userId))
                    dispatch(followingProgress(false, userId))
                }
            })
    }
}



export default usersReduser