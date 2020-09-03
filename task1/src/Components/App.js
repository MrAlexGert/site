import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
//Content components
import Profile from './Content/Profile/Profile'
import Messages from './Content/Messages/Messages'
import News from './Content/News/News'
import Music from './Content/Music/Music'


const App = (props) => {
  console.log(props.state)


  return (
    <div className="container">

      <Header />
      <main className="main">
        <Router>
          <Sidebar />
          <Switch>

            <Route exact path="/" render={() => <Profile
              profileDate={props.state.profilePage.posts}
              newPostValue={props.state.profilePage.newPostValue}
              dispatch={props.dispatch}
            />} />

            <Route path="/message" render={() => <Messages
              messagePage={props.state.messagePage}
              newMessageText={props.state.messagePage.newMessageText}
              dispatch={props.dispatch}
            />} />

            <Route exact path="/news" component={News} />
            <Route exact path="/music" component={Music} />
          </Switch>
        </Router>

      </main>
      <Footer />

    </div>
  )

}


export default App;
