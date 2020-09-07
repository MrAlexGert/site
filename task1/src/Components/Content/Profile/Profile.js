import React from 'react'
import Fone from '../../../img/fone.jpg'
import '../Content.scss'
import Post from './Post'


const Profile = (props) => {
    // console.log('pro',props)
    const newPostElement = React.createRef()

    const addPost = () => props.addPostChange()

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updatePostChange(text)
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
                    <img src={Fone} width="100%" height="100%" alt="fone" />
                </div>

                <div>ava+dickriotion</div>

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
