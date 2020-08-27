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


class App extends React.Component {


  render() {
    
    return (
      <div className="container">

        <Header />
        <main className="main">
          <Router>
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route  path="/message" render={() => <Messages UsersData={this.props.UsersData} />} />
              <Route exact path="/news" component={News} />
              <Route exact path="/music" component={Music} />
            </Switch>
          </Router>

        </main>
        <Footer />

      </div>
    )
  }
}


export default App;
