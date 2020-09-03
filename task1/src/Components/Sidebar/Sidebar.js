import React from 'react'
import './Sidebar.scss'
import { NavLink } from 'react-router-dom';


const Sidebar = () => {

        return (
            <nav className="sidebar" >
                {/* <div>
                    <button onClick={this.showSidebar}>go</button>
                </div> */}
                <div>
                    <div className="sidebar-menu">
                        <ul>
                            <li>
                                <NavLink activeClassName="active_link" to="/">profile</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active_link" to="/message">messages</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active_link" to="/news">news</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active_link" to ="/music">music</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
}


export default Sidebar;
