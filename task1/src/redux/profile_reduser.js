const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const initialState = {

    posts: [
        { id: "1", name: "user1", message: 'massageUser-1' },
        { id: "2", name: "user2", message: 'massageUser-2' },
        { id: "3", name: "user3", message: 'massageUser-3' },
        { id: "4", name: "user4", message: 'massageUser-4' }
    ],
    newPostValue: '',

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
        default:
            return state
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReduser