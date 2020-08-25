import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
//Content components
import Profile from './Content/Profile'
import Messages from './Content/Messages'
import News from './Content/News'
import Music from './Content/Music'


class App extends React.Component {

  render() {
    return (
      <div className="container">

        <Header />
        <div className="screen">
          <Sidebar />

          <Router>
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route exact path="/message" component={Messages} />
              <Route exact path="/news" component={News} />
              <Route exact path="/music" component={Music} />
            </Switch>
          </Router>
        </div>
        <Footer />

      </div>
    )
  }
}


export default App;
