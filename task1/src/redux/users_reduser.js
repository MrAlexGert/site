const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


const initialState = {
    users: [
        // { id: '1', name: 'alex', avatarItem: '../img/avatar.jpg', status: 'boss', follow: true, location: { country: 'russia', sity: 'moscow' } },
        // { id: '2', name: 'viktor', avatarItem: '../img/avatar.jpg', status: 'boss', follow: false, location: { country: 'ukraine', sity: 'kiew' } },
        // { id: '3', name: 'alexey', avatarItem: '../img/avatar.jpg', status: 'boss', follow: true, location: { country: 'belorusia', sity: 'minsk' } },
        // { id: '4', name: 'ksenya', avatarItem: '../img/avatar.jpg', status: 'boss', follow: true, location: { country: 'russia', sity: 'pskow' } },
        // { id: '5', name: 'igor', avatarItem: '../img/avatar.jpg', status: 'boss', follow: false, location: { country: 'russia', sity: 'omsk' } },
    ]
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
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}


export const followActionCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })

export default usersReduser