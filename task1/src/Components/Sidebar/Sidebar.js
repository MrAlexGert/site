import React from 'react'
import './Sidebar.scss'


class Sidebar extends React.Component {


    showSidebar = () => {
        let sidebar = document.getElementById('sidebar')
        sidebar.classList.toggle('sidebar_close')
        // (sidebar.classList.contains('sidebar')) ? sidebar.classList.remove('sidebar') : ''
    }

    render() {
        return (
            <nav className="sidebar" id="sidebar">
                <div>
                    <button onClick={this.showSidebar}>go</button>
                </div>
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
