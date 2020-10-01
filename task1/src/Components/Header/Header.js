import React from 'react'
import './Header.scss'

import Logo from '../../img/logo.png'
import profileLogo from '../../img/avatar.jpg'
import { NavLink } from 'react-router-dom'

//presintation component Header
const Header = (props) => {


    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="header-menu">
                {/* authorization user */}
                <div className='login'>
                    <div>
                        <img className="profile_logo" src={profileLogo} />
                    </div>
                    {
                        (props.isAuth) ?
                            <NavLink to={`/profile`}>{props.login}</NavLink>
                            :
                            <NavLink to={`/profile`}>login</NavLink>
                    }
                </div>
            </div>
        </header>
    )
}


export default Header;
