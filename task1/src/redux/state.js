

export const state = {
    UsersData: [
        { id: "1", name: "user1", massage: 'massageUser-1' },
        { id: "2", name: "user2", massage: 'massageUser-1' },
        { id: "3", name: "user3", massage: 'massageUser-1' },
        { id: "4", name: "user4", massage: 'massageUser-1' }
    ]
}

export const post = (postMassage) => {
    let newPost = {
        id: '5',
        massage: postMassage,
        name: 'user5'
    }
    state.UsersData.push(newPost)
}


