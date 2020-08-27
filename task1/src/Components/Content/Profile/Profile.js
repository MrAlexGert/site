import React from 'react'
import Fone from '../../../img/fone.jpg'
import '../Content.scss'
import Post from './Post'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textPost: '',
            newPost: []
        }
        this.newPostElement = React.createRef()
    }
    publicPost = () => {
        const text = this.newPostElement.current.value
       
        this.setState({ textPost: text })
        this.createPost(text)
        //text = ''
    }
    createPost = (text) => {
        this.state.newPost.push( <Post text={text} key={text}/> )   
    }

    render() {
        return (
            <div className="content">
                <div className="profale">


                    <div className="content-img-fone">
                        <img src={Fone} width="100%" height="100%" alt="fone" />
                    </div>

                    <div>ava+dickriotion</div>

                    <div>
                        <textarea ref={this.newPostElement} id="text-post"></textarea>
                        <button onClick={this.publicPost}>new post</button>
                    </div>
                    <div>
                        {this.state.newPost}
                    </div>
                    


                    
                </div>
            </div>
        )
    }
}


export default Profile;
