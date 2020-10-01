import React from 'react'
import './App.scss'
import {Route} from 'react-router-dom' // bilding component BrauserRouter

//Components
import HeaderContainer from './Header/HeaderContainer'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import Login from './Login/Login'
//Content components

import ProfileContiner from './Content/Profile/ProfileContainer'
import Messages from './Content/Messages/Messages'
import Music from './Content/Music/Music'
import UsersContainer from './Content/Users/UsersContainer'


const App = (props) => {



  return (
    <div className="container">

      <HeaderContainer />
      <main className="main">

        <Sidebar />


        <Route path="/profile/:userId?" render={() => <ProfileContiner

        />} />

        <Route path="/message" render={() => <Messages

        />} />

        <Route exact path="/users" component={UsersContainer} />
        <Route exact path="/music" component={Music} />
        <Route path="/login" component={Login} />



      </main>
      <Footer />

    </div>
  )

}


export default App;
