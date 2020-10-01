import {getProfile, getStatus, updateStatus} from '../api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {

    posts: [
        { id: "1", name: "user1", message: 'massageUser-1' },
        { id: "2", name: "user2", message: 'massageUser-2' },
        { id: "3", name: "user3", message: 'massageUser-3' },
        { id: "4", name: "user4", message: 'massageUser-4' }
    ],
    newPostValue: '',
    userProfile: null,
    status: 'newstatus',
}

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: '5',
                message: state.newPostValue,
                name: 'Muser5'
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                
                newPostValue: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostValue: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}


export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_STATUS, status })

export const getProfileThunkCreator = (userId) => {
        return (dispath) => {
            getProfile(userId).
            then(data => {
                dispath(setUserProfile(data)) //GET USER PROFILE IN profile_reduser.js
            })
        } 
}

export const getUserStatusThunkCreator = (userId) => {
    return (dispath) => {
        getStatus(userId).
        then(data => {
            dispath(setUserStatus(data))
        })
    }
}
export const updateUserStatusThunkCreator = (status) => {
    return (dispath) => {
        
        updateStatus(status).
        then(data => {
            console.log('re', status)
            if (data.resulteCode === 0) {
                dispath(setUserStatus(status))
            }
           
        })
    }
}
export default profileReduser