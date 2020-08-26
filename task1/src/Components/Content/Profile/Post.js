import React from 'react'
import '../Content.scss'
import post from './Post.module.scss'
import avatar from '../../../img/avatar.jpg'
class Post extends React.Component {

    render() {
        return (
            <div className={post.post}>
                <div className={post.avatar_img}>
                    <img src={avatar} alt="user img"/>
                </div>
                <div className={post.avatar_text}>
                    <p className={post.user_name}>user 1</p>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}


export default Post;
