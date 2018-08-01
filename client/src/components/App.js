import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import Home from './views/Home'
import ShowLists from './views/ShowLists'
  
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
          <Router>
              <div>
                <Route path='/' component={Home} exact />
                <Route path='/lists' component={ShowLists} />
              </div>
          </Router>
        <AppFooter />
      </div>
    );
  }
}

export default App;
