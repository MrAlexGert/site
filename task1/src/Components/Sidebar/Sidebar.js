import React from 'react'
import './Sidebar.scss'


class Sidebar extends React.Component {

    render() {
        return (
            <nav className="sidebar">
                
                <div>
                    <div className="sidebar-menu">
                        <ul>
                            <li>
                                <a href="/">profile</a>
                            </li>
                            <li>
                                <a href="/message">messages</a>
                            </li>
                            <li>
                                <a href="/news">news</a>
                            </li>
                            <li>
                                <a href="/music">music</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}


export default Sidebar;
