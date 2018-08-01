import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import Home from './views/Home'
import ViewAllLists from './views/ViewAllLists'
import ViewList from './views/ViewList'
  
class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div>
                <AppHeader />
                <Switch>
                  <Route 
                    path='/lists/:id' 
                    component={ViewList} />
                  <Route 
                    path='/lists' 
                    component={ViewAllLists} />
                  <Route 
                    path='/' 
                    component={Home} />
                </Switch>
              </div>
          </Router>
        <AppFooter />
      </div>
    );
  }
}

export default App;
