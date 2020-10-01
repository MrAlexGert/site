//a697aea2-926d-4319-adca-ca3663350e89
import * as axios from 'axios'

//FOR USERS REDUSER
export const getUsers = (currentPage, pageSize) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true // INCLUDES COOKIES, SAVE FOR BROUSER
    }).then(response => response.data)
}

export const userFollowDel = (id) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            'API-KEY': 'a697aea2-926d-4319-adca-ca3663350e89'
        }
    }).then(response => response.data)
}
export const userFollowPost = (id) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            'API-KEY': 'a697aea2-926d-4319-adca-ca3663350e89'
        }
    }).then(response => response.data)
}

//FOR PROFILE REDUSER
export const getProfile = (userId) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).
        then(response => response.data)
}
export const getStatus = ( userId) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`).
    then(response => response.data)
}
export const updateStatus = (status) => {
    return axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status/`, {
        status: status,
}, {
    withCredentials: true,
        headers: {
            'API-KEY': 'a697aea2-926d-4319-adca-ca3663350e89'
        }
}).
    then(response => response.data.data)
}
//FOR AUTH REDUSER
export const getDataAuth = () => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true // includes cookies, save cookies for brouwser
    }).
        then(response => response.data)
}