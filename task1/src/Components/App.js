import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
//Content components

import ProfileContiner from './Content/Profile/ProfileContainer'
import Messages from './Content/Messages/Messages'
import Music from './Content/Music/Music'
import UsersContainer from './Content/Users/UsersContainer'


const App = (props) => {
  console.log()


  return (
    <div className="container">

      <Header />
      <main className="main">
        <Router>
          <Sidebar />
          <Switch>

            <Route exact path="/" render={() => <ProfileContiner
              // profileDate={props.state.profileReduser.posts}
              // newPostValue={props.state.profileReduser.newPostValue}
              // dispatch={props.dispatch}
            />} />

            <Route path="/message" render={() => <Messages
              // messagePage={props.state.dialogReduser}
              // newMessageText={props.state.dialogReduser.newMessageText}
              // dispatch={props.dispatch}
            />} />

            <Route exact path="/users" component={UsersContainer} />
            <Route exact path="/music" component={Music} />
          </Switch>
        </Router>

      </main>
      <Footer />

    </div>
  )

}


export default App;
