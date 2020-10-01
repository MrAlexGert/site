import React from 'react'
import '../Content.scss'
import Post from './Post'
import Status from './Status'

const Profile = (props) => {
    // console.log('pro',props)
    const newPostElement = React.createRef()

    const addPost = () => props.addPost()

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    const postElements = props.profileDate.map(el => {
        return (
            <div key={el.id}>
                <Post text={el.message} name={el.name} />
            </div>
        )
    })

    return (
        <div className="content">
            <div className="profale">


                <div className="content-img-fone">
                    <img src={props.userProfile.photos.large} width="300px" height="300px" alt="fone" />
                </div>

                <div>
                    <div>name: {props.userProfile.fullName}</div>
                    <div>Tagline: {props.userProfile.lookingForAJobDescription}</div>
                    <div>aboutMe: {props.userProfile.aboutMe}</div>
                    <div>
                        <div>Contacts</div>
                        <div>facebook: {props.userProfile.contacts.facebook}</div>
                        <div>instagram: {props.userProfile.contacts.instagram}</div>
                        <div>vk: {props.userProfile.contacts.vk}</div>
                    </div>
                </div>
                <div>
                    <Status status={props.status} updateStatus={props.updateStatus} />
                </div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostValue} />
                    <button onClick={addPost}>new post</button>
                </div>
                <div>
                    {postElements}
                </div>
            </div>
        </div>
    )
}



export default Profile;
