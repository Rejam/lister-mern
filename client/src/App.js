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
import {connect} from 'react-redux'
  
class App extends Component {
  componentDidMount() {
    this.props.fetchLists()
  }

  render() {
    const Routes = () =>
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

    const {isLoading, error} = this.props
    return (
      <div className="App">
          <Router>
              <div>
                <AppHeader />
                { error.hasError ?
                    <p>{error.msg}</p> :
                    
                    isLoading ?
                      <p>Fetching data</p> :
                    <Routes />
                }
              </div>
          </Router>
        <AppFooter />
      </div>
    );
  }
}

const mapStateToProps = ({isLoading, error}) => ({
  error,
  isLoading
})

export default connect(mapStateToProps, { fetchLists })(App)
