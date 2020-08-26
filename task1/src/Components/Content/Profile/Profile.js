import React from 'react'
import Fone from '../../../img/fone.jpg'
import '../Content.scss'
 import Post from './Post'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textPost: '',
        }
    }
    publicPost = () => {
        const text = document.getElementById('text-post')
        this.setState({textPost: text.value})
        
    }

    render() {
        return (
            <div className="content">
                
                <div className="content-img-fone">
                    <img src={Fone} width="100%" height="100%" alt="fone"/>
                </div>

                <div>ava+dickriotion</div>
                <div>
                    <textarea id="text-post"></textarea>
                    <button onClick={this.publicPost}>new post</button>
                </div>
                <Post text={this.state.textPost}/>
                
                
                <div>newPost</div>
                <div>post1</div>
                <div>post2</div>

            </div>
        )
    }
}


export default Profile;
