import React from 'react'
import '../Content/Content.scss'
import fetching from '../../img/fetching.gif'

const Preloader = () => {

        return (
            <div>
                <img src={fetching} className="fetching" />
            </div>
        )
}


export default Preloader;
