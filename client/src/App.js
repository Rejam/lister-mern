import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Home from './components/Home'
import Lists from './containers/Lists'
import List from './containers/List'
import { fetchLists } from './actions'
  
class App extends Component {

  componentDidMount(){
    this.props.store.dispatch(fetchLists())
  }
  render() {
    return (
      <div className="App">
          <Router>
              <div>
                <AppHeader />
                <Switch>
                  <Route 
                    path='/lists/:id' 
                    component={List} />
                  <Route 
                    path='/lists' 
                    component={Lists} />
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
