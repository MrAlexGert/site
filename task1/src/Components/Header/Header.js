import React from 'react'
import './Header.scss'

import Logo from '../../img/logo.png'

const Header = (props) => {
  
    return (
        <header className="header">
          <div className="logo">
              <img src={Logo} alt="logo"/>
          </div>
          <div className="header-menu">
              menu
          </div>
        </header>
    )
}


export default Header;
