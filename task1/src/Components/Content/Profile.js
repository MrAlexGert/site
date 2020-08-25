import React from 'react'
import Fone from '../../img/fone.jpg'
import './Content.scss'


class Profile extends React.Component {

    render() {
        return (
            <main className="content">
                
                <div className="content-img-fone">
                    <img src={Fone} width="100%" height="100%" alt="fone"/>
                </div>

                <div>ava+dickriotion</div>
                <div>myPost</div>
                <div>newPost</div>
                <div>post1</div>
                <div>post2</div>

            </main>
        )
    }
}


export default Profile;
